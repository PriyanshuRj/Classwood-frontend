import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoMdAddCircleOutline } from "react-icons/io";
import { FiFilter, FiMoreHorizontal } from "react-icons/fi";
import { AiOutlineSearch } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";

import { getAllSchoolData } from "./helpers/dataFetcher";
import AddSubject from "./AddSubject";
import AddStudent from "../UI/SideBars/AddStudentSidebar";
import ClassroomCard from "../UI/Cards/ClassroomCard";
import ClassroomRow from "../UI/Rows/ClassroomRow";
import Layout from "./Layout";
import ClassroomSideBar from "../UI/SideBars/classroomSidebar";

const tabs = [
  "All Classes",
  "Senior Secondary",
  "Secondary",
  "Primary",
  "Middle",
  "Pre Primary",
];
export default function Classroom() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [viewState, setViewState] = useState("grid");
  const [openSidebar, setOpenSidebar] = useState(-1);
  const [selectedClass, setSelectedClass] = useState(-1);
  const [isOpen, setOpen] = useState(false);
  const [openAddStudent, setOpenAddStudent] = useState(false);
  const [subjects, setSubjects] = useState([]);
  const [tabState, setTabState] = useState(0);
  const [searchQuery, setSearchQueary] = useState("");
  const staff = useSelector((state) => state.staff.allStaff);
  const classrooms = useSelector((state) => state.classroom.allClasses);

  useEffect(() => {
    if (!classrooms || classrooms.length === 0)
      getAllSchoolData(dispatch, navigate);
  }, []);

  function fliterClassroom(classData) {
    return (classData.class_name + " " + classData.section_name)
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
  }

  return (
    <Layout>
      {isOpen ? (
        <AddSubject setOpen={setOpen} classroom={classrooms[openSidebar]} />
      ) : undefined}

      {openAddStudent ? (
        <AddStudent
          subjects={subjects}
          classroom={classrooms[selectedClass]}
          setOpenAddProfile={setOpenAddStudent}
        />
      ) : undefined}

      {openSidebar !== -1 ? (
        <ClassroomSideBar
          setSubjects={setSubjects}
          setOpen={setOpen}
          setOpenSidebar={setOpenSidebar}
          data={classrooms[openSidebar]}
          setOpenAddStudent={setOpenAddStudent}
        />
      ) : undefined}

      <div className="px-4 md:px-10">
        <div className="flex flex-col justify-between my-4 md:flex-row">
          <p className="text-2xl font-semibold ">All CLassroom</p>
          <Link
            to="/school/addclass"
            className="flex items-center justify-between px-4 py-1 mx-8 mt-4 font-medium text-white bg-indigo-600 rounded-md md:m-0"
          >
            <IoMdAddCircleOutline className="mr-2" />
            Add Class
          </Link>
        </div>
        <div className="flex-row hidden w-full mb-4 border-b-2 md:flex">
          {tabs.map((tab, index) => {
            return (
              <span
                key={index}
                className={`mx-4 font-semibold text-gray-400 ${
                  tabState === index
                    ? "text-indigo-600 border-b-2 border-indigo-600"
                    : undefined
                }`}
                onClick={() => setTabState(index)}
              >
                {tab}
              </span>
            );
          })}
        </div>
        <div className="flex flex-row items-center justify-between w-full">
          <div className="flex flex-row my-8">
            <div className="relative mr-4 text-gray-600 focus-within:text-gray-400">
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <AiOutlineSearch />
              </span>
              <input
                type="search"
                name="q"
                onChange={(e) => setSearchQueary(e.target.value)}
                className="py-2 pl-10 text-sm text-gray-900 bg-white rounded-md focus:outline-none w-[280px] sm:w-[320px]"
                placeholder="Search a class"
                autoComplete="off"
              />
            </div>
            <button className="flex items-center px-2 py-1 font-medium text-gray-800 bg-gray-200 rounded-md sm:px-4">
              <FiFilter className="sm:mr-2" />
              <span className="hidden sm:flex">Fliter</span>
            </button>
          </div>
          <div className="flex flex-row p-1 rounded-md bg-slate-100">
            <span
              className={`px-2 pl-4 py-2  ${
                viewState === "grid" ? "bg-white pr-4 font-semibold" : undefined
              } rounded-md`}
              onClick={() => setViewState("grid")}
            >
              Grid
            </span>
            <span
              className={`px-2 pr-4 py-2 ${
                viewState === "list" ? "bg-white pl-4 font-semibold" : undefined
              } rounded-md`}
              onClick={() => setViewState("list")}
            >
              List
            </span>
          </div>
        </div>

        {  staff.length == 0 ? (
          <div className="flex items-center justify-center w-full h-96">
            <span>No Staff Till First Add Staff Members</span>
          </div>
        ) : classrooms.length == 0 ? (
          <div className="flex items-center justify-center w-full h-96">
            <span>No Classroom Created Create A Classroom</span>
          </div>
        ) : viewState==="grid" ?  (
          <div className="mb-10 grid gap-4 min-[590px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {classrooms.filter(fliterClassroom).map((classData, index) => {
              return (
                <ClassroomCard
                  key={index}
                  classData={classData}
                  index={index}
                  setSelectedClass={setSelectedClass}
                  setOpenSidebar={setOpenSidebar}
                />
              );
            })}
          </div>
        ) : 
        <div className="border-2 rounded-md">
          <div className="grid w-full grid-cols-5 p-2 text-sm font-semibold text-gray-500 bg-slate-100">
            <span>Class</span>
            <span>Total Subjects</span>
            <span>Teachers Assigned</span>
            <span>Students</span>
            <span>Actions</span>
          </div>
          {classrooms.map((classData, index) => {
            return (
              <ClassroomRow
                key={index}
                classData={classData}
                index={index}
                setSelectedClass={setSelectedClass}
                setOpenSidebar={setOpenSidebar}
              />
            );
          })}
        </div>}
      </div>
    </Layout>
  );
}
