import React, { useState, useEffect } from "react";
import { GoPrimitiveDot, GoLocation } from "react-icons/go";
import { RxCross1 } from "react-icons/rx";
import { BsBriefcase } from "react-icons/bs";
import { MdOutlineSchool } from "react-icons/md";
import { Link } from "react-router-dom";
import { FiEdit2 } from "react-icons/fi";
import { MdClass } from "react-icons/md";
import { Rings } from "react-loader-spinner";
import axios from "axios";
import { API_URL } from "../../../helpers/URL";
import { useSelector } from "react-redux";
import { IoMdAddCircleOutline } from "react-icons/io";
export default function ClassroomSideBar({
  setOpen,
  setOpenSidebar,
  data,
  setOpenAddStudent,
  setSubjects,
}) {
  console.log(data);
  const [classSubjects, setClassSubject] = useState([]);
  const [classTeacher, setClassTeacher] = useState({});
  const [loading, setLoading] = useState(false);
  const students = useSelector((state) => state.user.classStudents);

  async function fetchSubjects() {
    setLoading(true);
    const token = localStorage.getItem("token");
    const classroomSubjects = await axios.get(API_URL + "staff/subject/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        classroom: localStorage.getItem("classId"),
      },
    });
    console.log(classroomSubjects.data);
    setClassSubject(classroomSubjects.data);
    setLoading(false);
  }
  async function getClassTeacher() {
    setLoading(true);
    const token = localStorage.getItem("token");
    const Teachers = await axios.get(API_URL + "list/staff", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        classroom: localStorage.getItem("classId"),
      },
    });
    console.log("Teacher :", Teachers);
    const classroomTeacher = Teachers.data.filter((teacher) => {
      return teacher.user.id === data.class_teacher;
    });
    setClassTeacher(classroomTeacher[0]);
    setLoading(false);
  }
  useEffect(() => {
    fetchSubjects();
    getClassTeacher();
  }, [data]);

  return (
    <div className="fixed top-0 right-0 z-50 flex flex-col justify-between h-full pt-8 overflow-y-scroll bg-white w-96">
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
        <>
          <div>
            <div
              onClick={() => setOpenSidebar(-1)}
              className="absolute p-2 bg-gray-200 rounded-full top-8 left-8"
            >
              <RxCross1 />
            </div>

            <div className="flex flex-col items-center justify-center w-full mt-8">
              <span className="text-2xl font-semibold ">
                {data.class_name + " " + data.section_name}
              </span>
            </div>
            <div className="flex flex-row justify-around mt-4 border-b-[1px] border-gray-200 pb-4 mx-4">
              <div className="flex flex-col w-40 p-4 bg-slate-50 rounded-lg">
                <BsBriefcase className="w-6 h-6 mb-2 text-indigo-600" />
                <span className="mb-2 font-semibold text-md">
                  Class Teacher
                </span>
                <span>
                  {classTeacher.first_name + " " + classTeacher.last_name}
                </span>
              </div>
              <div className="flex flex-col w-40 p-4 bg-slate-50 rounded-lg">
                <MdOutlineSchool className="w-6 h-6 mb-2  text-indigo-600" />
                <span className="mb-2 font-semibold text-md">
                  Total Students
                </span>
                <span>{data.strength}</span>
              </div>
            </div>
            <div className="flex flex-col mx-4 mt-4 ">
              <p className="mb-4 text-xl font-semibold text-gray-800">
                Attendence
              </p>
              <div className="mb-6">
                <div className="px-4 flex flex-col  items-start justify-start mt-2 ">
                  <span className="font-semibold text-gray-500 flex flex-row justify-center items-center">
                    <svg
                      className="mr-2 h-6 w-6"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g
                        id="Icon/Outline/present"
                        clipPath="url(#clip0_228_14583)"
                      >
                        <path
                          id="Vector"
                          d="M5.99967 14.6663H9.99967C13.333 14.6663 14.6663 13.333 14.6663 9.99967V5.99967C14.6663 2.66634 13.333 1.33301 9.99967 1.33301H5.99967C2.66634 1.33301 1.33301 2.66634 1.33301 5.99967V9.99967C1.33301 13.333 2.66634 14.6663 5.99967 14.6663Z"
                          stroke="#2DD4BF"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          id="Vector_2"
                          opacity="0.4"
                          d="M10.3337 6.5C10.5989 6.5 10.8532 6.39464 11.0408 6.20711C11.2283 6.01957 11.3337 5.76522 11.3337 5.5C11.3337 5.23478 11.2283 4.98043 11.0408 4.79289C10.8532 4.60536 10.5989 4.5 10.3337 4.5C10.0684 4.5 9.81409 4.60536 9.62655 4.79289C9.43902 4.98043 9.33366 5.23478 9.33366 5.5C9.33366 5.76522 9.43902 6.01957 9.62655 6.20711C9.81409 6.39464 10.0684 6.5 10.3337 6.5ZM5.66699 6.5C5.93221 6.5 6.18656 6.39464 6.3741 6.20711C6.56164 6.01957 6.66699 5.76522 6.66699 5.5C6.66699 5.23478 6.56164 4.98043 6.3741 4.79289C6.18656 4.60536 5.93221 4.5 5.66699 4.5C5.40178 4.5 5.14742 4.60536 4.95989 4.79289C4.77235 4.98043 4.66699 5.23478 4.66699 5.5C4.66699 5.76522 4.77235 6.01957 4.95989 6.20711C5.14742 6.39464 5.40178 6.5 5.66699 6.5ZM5.60033 8.86667H10.4003C10.7337 8.86667 11.0003 9.13333 11.0003 9.46667C11.0003 11.1267 9.66033 12.4667 8.00033 12.4667C6.34033 12.4667 5.00033 11.1267 5.00033 9.46667C5.00033 9.13333 5.26699 8.86667 5.60033 8.86667Z"
                          stroke="#2DD4BF"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_228_14583">
                          <rect width="16" height="16" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    Present Student{" "}
                  </span>
                  <span className="font-semibold text-gray-500 ml-8">44</span>
                </div>
                <div className="px-4 flex flex-col items-start justify-between mt-1 ">
                  <span className="flex flex-row items-center justify-between font-semibold text-gray-500">
                    <svg
                      className="mr-2 h-6 w-6"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_228_14590)">
                        <path
                          d="M5.99967 14.6663H9.99967C13.333 14.6663 14.6663 13.333 14.6663 9.99967V5.99967C14.6663 2.66634 13.333 1.33301 9.99967 1.33301H5.99967C2.66634 1.33301 1.33301 2.66634 1.33301 5.99967V9.99967C1.33301 13.333 2.66634 14.6663 5.99967 14.6663Z"
                          stroke="#FB7185"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          opacity="0.34"
                          d="M4.66699 5.83301C5.33366 5.16634 6.42033 5.16634 7.09366 5.83301M8.90699 5.83301C9.57366 5.16634 10.6603 5.16634 11.3337 5.83301M5.60033 11.7997H10.4003C10.7337 11.7997 11.0003 11.533 11.0003 11.1997C11.0003 9.53967 9.66033 8.19967 8.00033 8.19967C6.34033 8.19967 5.00033 9.53967 5.00033 11.1997C5.00033 11.533 5.26699 11.7997 5.60033 11.7997Z"
                          stroke="#FB7185"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_228_14590">
                          <rect width="16" height="16" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    Absent Students{" "}
                  </span>
                  <span className="font-semibold text-gray-500 ml-8">11</span>
                </div>
              </div>

              <p className="mb-4 text-xl font-semibold text-gray-800">
                Subject Detail
              </p>
              {classSubjects.map((subject, index) => {
                return (
                  <div
                    key={index}
                    className="flex flex-col px-4 py-2 m-2 hover:bg-gray-100 rounded-lg"
                  >
                    <div className="flex flex-row items-center mt-2">
                      <MdClass className="w-8 h-8 mb-2 mr-4 text-indigo-700" />
                      <div className="flex flex-col items-start justify-center">
                        <span className="mb-1 font-semibold text-gray-500 text-md">
                          {subject.name}
                        </span>
                        <span className="text-gray-500">{subject.teacher}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            {localStorage.getItem("UserType") === "School" ? (
              <div className="mb-4">
                <div className="flex flex-row justify-between mx-4 my-4">
                  <button
                    className=" w-[47%] justify-center flex items-center px-4 py-2 font-medium border-indigo-500 border-[1px] text-indigo-600 duration-300 ease-in-out bg-gray-50 rounded-md hover:bg-gray-500 hover:text-white"
                    onClick={() => {
                      setOpenSidebar(-1);
                    }}
                  >
                    <FiEdit2 className="mr-2" />
                    Edit
                  </button>
                  <button
                    className="w-[47%] flex items-center px-4 py-2 font-medium text-white duration-300 ease-in-out bg-indigo-600 rounded-md hover:bg-indigo-800"
                    onClick={() => {
                      setOpen(true);
                    }}
                  >
                    <IoMdAddCircleOutline className="mr-2" />
                    Add Subject
                  </button>
                </div>
                <div className="flex items-center justify-center w-full">
                  <button
                    className="flex items-center px-4 py-2 mx-4 font-medium text-white duration-300 ease-in-out bg-indigo-600 rounded-md hover:bg-indigo-800"
                    onClick={() => {
                      setSubjects(classSubjects);
                      setOpenAddStudent(true);
                      setOpenSidebar(-1);
                    }}
                  >
                    <IoMdAddCircleOutline className="mr-2" />
                    Add Student
                  </button>
                </div>
              </div>
            ) : undefined}
          </div>
        </>
      )}
    </div>
  );
}
