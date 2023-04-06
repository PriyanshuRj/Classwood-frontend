import React, { useState, useEffect } from "react";
import { PieChart } from "react-minimal-pie-chart";
import { AiOutlineBarChart } from "react-icons/ai";
import Layout from "./Layout";
import axios from "axios";
import { API_URL } from "../../helpers/URL";
import { Link } from "react-router-dom";
import schoolStudentImg from "../../assets/schoolStudent.png";
import schoolStaffImg from "../../assets/schoolStaff.png";
import schoolClassImg from "../../assets/schoolClasses.png";
import schoolAcchivementImg from "../../assets/schoolAchivement.png";
import { getAllSchoolData } from "./helpers/dataFetcher";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Rings } from "react-loader-spinner";
import EventPannel from "../Common/EventPannel";
import NoticePannel from "../Common/NoticePannel";
import AddNoticeSidebar from "./AddNoticeSidebar";
import AddEventSidebar from "./AddEventSidebar";

export default function StudentDashboard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const noOfStudent = useSelector((state) => state.student.noOfStudent);
  const noOfStaffMenber = useSelector((state) => state.staff.noOfStaffMember);
  const noOfCasses = useSelector((state) => state.classroom.noOfClasses);
  const allStudent = useSelector((state) => state.student.allStudent);
  const allStaffMemeber = useSelector((state) => state.staff.allStaff);
  useEffect(() => {
    if (!noOfStaffMenber) getAllSchoolData(dispatch, navigate, setLoading);
  }, []);
  const [openAddNoticeModal, setOpenAddNoticeModal] = useState(false);
  const [openAddEventModal, setOpenAddEventeModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [today, setToday] = useState(0);
  const [presentStudent, setPresentStudents] = useState("");
  const [presentStaff, setPresentStaff] = useState("");
  useEffect(() => {
    const date = new Date();
    setToday(date.getDate());
  }, []);

  const getAllStudentAttendence = async () => {
    if(today){
      let presents = 0;
      for(let i in allStudent){
        let val = JSON.parse(allStudent[i].month_attendance)[today-1];
        if(val===2) presents++;
      }
      setPresentStudents(presents);
    }

  }
  const getAllStaffAttendence = async () => {
    if(today){
      let presents = 0;
      for(let i in allStaffMemeber){
        let val = JSON.parse(allStaffMemeber[i].month_attendance)[today-1];
        if(val===2) presents++;
      }
      setPresentStaff(presents);
    }

  }
  useEffect(()=>{
    getAllStudentAttendence();
    getAllStaffAttendence();
  },[today,allStudent]);
  return (
    <Layout>
      {loading ? (
        <div className="flex items-center justify-center w-full h-screen">
          <Rings
            height="220"
            width="220"
            // radius="9"
            color="rgb(30 64 175)"
            ariaLabel="loading"
          />{" "}
        </div>
      ) : (
        <div className="flex flex-col my-10 min-[1200px]:flex-row md:px-10 min-[1200px]:px-0">
          {openAddNoticeModal ? (
            <AddNoticeSidebar setOpenAddNoticeModal={setOpenAddNoticeModal} />
          ) : undefined}
          {openAddEventModal ? (
            <AddEventSidebar setOpenAddEventeModal={setOpenAddEventeModal} />
          ) : undefined}
          <div className="w-full min-[1200px]:ml-10 2xl:pl-0 xl:w-3/5 2xl:w-2/3 2xl:mx-10">
            <span className="mb-4 text-3xl font-semibold">Dashboard</span>
            {/* Add flex */}
            <div className=" w-full mt-4 p-3 shadow-lg rounded-lg">
              <div className="flex justify-between ">
                <Link to="/school/students" 
                onClick={() => {
                  localStorage.removeItem("classId");
                  localStorage.removeItem("className");
                }}
                className=" cursor-pointer flex rounded-lg w-[22%] bg-[#FBF0FD] py-4 px-4 flex-col justify-center items-center">
                  <img className="my-2" src={schoolStudentImg} />
                  <span className="text-xl font-semibold">{noOfStudent}</span>
                  <span className="text-sm">Total Student</span>
                </Link>
                <Link to="/school/staff" className="cursor-pointer flex rounded-lg w-[22%] bg-[#FDF9F0] py-4 px-4 flex-col justify-center items-center">
                  <img className="my-2" src={schoolStaffImg} />
                  <span className="text-xl font-semibold">
                    {noOfStaffMenber}
                  </span>
                  <span className="text-sm">Total Staff</span>
                </Link>
                <Link to="/school/classroom" className="cursor-pointer flex rounded-lg w-[22%] bg-[#F0F7FD] py-4 px-4 flex-col justify-center items-center">
                  <img className="my-2" src={schoolClassImg} />
                  <span className="text-xl font-semibold">{noOfCasses}</span>
                  <span className="text-sm">Total Classes</span>
                </Link>
                <div className="cursor-pointer flex rounded-lg w-[22%] bg-[#F0FDF0] py-4 px-4 flex-col justify-center items-center">
                  <img className="my-2" src={schoolAcchivementImg} />
                  <span className="text-xl font-semibold">00</span>
                  <span className="text-sm">Total Achivements</span>
                </div>
              </div>
              <div className="w-full mt-8 flex-flex-col">
                <span className=" font-semibold text-2xl">
                  Thought Of the Day
                </span>
                <textarea
                  placeholder="Enter Thought of the day"
                  className="border w-full rounded-lg p-2 mt-4"
                />
                <button className="py-2 mt-2 px-4 bg-[#372ed1] rounded-md text-white font-sembold">
                  Save and Share
                </button>
              </div>
            </div>
            
            <div className="flex flex-row mt-8 ">
              {/* Fees Management */}
            <Link to="/school/fees" className="w-3/5 mb-8 flex flex-col shadow-md rounded-xl py-4 px-6">
              <span className="font-semibold text-xl flex border-b pb-2">Fee Management</span>
              <div className="  flex flex-row ">

            
              <div className="w-full ">
                <div className="flex flex-col items-center justify-center w-full h-full p-4">
           
                  <PieChart
                    data={[{ title: "Paid", value: 30, color: "#2DD4BF" },{ title: "Pending", value: 20, color: "#F59E0B" },]}
                    lengthAngle={360}
                    lineWidth={10}
                    startAngle={180}
                    totalValue={100}
                    rounded={true}
                    animate={true}
                    background="#818CF8"
                  />
                  
                  {/* <div className="flex flex-col items-center justify-center -mt-40  ">
                    <span className="text-2xl font-semibold text-center md:text-5xl">
                      30% Paid
                    </span>
                    <h1 className="my-2 mt-4 text-2xl text-center text-[#8A8A8A]">
                      Fees
                    </h1>
                  </div> */}
                </div>
                <div>

                </div>
              </div>
              <div className="flex flex-col w-2/5 justify-center items-start">
              <div className="flex flex-col mb-6">
                <span className="flex items-center justify-center text-gray-600 ">
                  <span className="h-4 w-4 rounded-full bg-[#818CF8] mr-2">

                  </span>
                  Total Fees</span>
                <span className="text-xl font-bold ml-6">2 Crore</span>
              </div>
              <div className="flex flex-col mb-6">
                <span className="flex items-center justify-center text-gray-600 ">
                  <span className="h-4 w-4 rounded-full bg-[#2DD4BF] mr-2">

                  </span>
                  Fee Submitted</span>
                  <span className="text-xl font-bold ml-6">2 Crore</span>
              </div>
              <div className="flex flex-col ">
                <span className="flex items-center justify-center text-gray-600 ">
                  <span className="h-4 w-4 rounded-full bg-[#F59E0B] mr-2">

                  </span>
                  Fee Pending</span>
                  <span className="text-xl font-bold ml-6">2 Crore</span>
              </div>
            </div>
            </div>
            </Link>
                  {/* Attendence Management */}
                  <div className="mx-4 w-2/5 shadow-md rounded-xl p-4 h-fit">
                  <span className="font-semibold text-xl flex border-b pb-2">Attendence Management</span>
                  <div className="flex flex-col pt-4">
                    <div className="flex flex-row justify-between items-center">

                    <div className="mb-5 flex flex-col">
                      <span className="text-gray-500 ">
                        Present Student
                      </span>
                      <span className="font-semibold text-xl">
                      {presentStudent}
                      </span>
                    </div>
                    <AiOutlineBarChart className="w-6 h-6 text-[#2dd480]"/>
                    </div>
                    <div className="flex flex-row justify-between items-center">
                    <div className="">

                      <span className="text-gray-500 flex flex-col">
                        Present Staff
                      </span>
                      <span className="font-semibold text-xl">
                        {presentStaff}
                      </span>
                    </div>
                    <AiOutlineBarChart className="w-6 h-6 text-[#2dd480]"/>

                    </div>
                  </div>
                  </div>
            </div>
         
            
            {/* shop and roadmaps */}

            <div className="flex mt-10 "></div>
            {/* fees history */}
            <div className="h-72 md:rounded-[30px] bg-gray-200 p-6 w-full mt-10">
              <h1 className="text-2xl text-center md:text-4xl">
                Payment History
              </h1>
              <div className="grid grid-cols-3 mt-4">
                <div className="py-3 font-bold text-center text-gray-700 uppercase text-md lg:text-lg">
                  Serial
                </div>
                <div className="py-3 font-bold text-center text-gray-700 uppercase text-md lg:text-lg">
                  Amount
                </div>
                <div className="py-3 font-bold text-center text-gray-700 uppercase text-md lg:text-lg">
                  Date
                </div>

                <div className="px-6 py-4 text-center">1</div>
                <div className="px-6 py-4 text-center">Rs 11000</div>
                <div className="px-6 py-4 text-center">11 jan</div>

                <div className="col-span-3 px-6 py-4 text-center">
                  No Payment History Found
                </div>
              </div>
            </div>
          </div>
          <div className="w-full my-10 xl:w-2/5 2xl:w-1/3 min-[1200px]:mx-10 px-10 min-[1200px]:px-0 min-[1200px]:my-0">
            
            <NoticePannel setOpenAddNoticeModal={setOpenAddNoticeModal} />
            <EventPannel setOpenAddEventModal={setOpenAddEventeModal} />
          </div>
        </div>
      )}
    </Layout>
  );
}
