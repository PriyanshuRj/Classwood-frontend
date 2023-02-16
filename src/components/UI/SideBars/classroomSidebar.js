import React, { useState, useEffect } from "react";
import { GoPrimitiveDot, GoLocation } from "react-icons/go";
import { RxCross1 } from "react-icons/rx";
import { BsBriefcase } from "react-icons/bs";
import { MdOutlineSchool } from "react-icons/md";

import { FaRegUser } from "react-icons/fa";
import { FiEdit2 } from "react-icons/fi";
import {MdSubject} from "react-icons/md";
import axios from "axios";
import { API_URL } from "../../../helpers/URL";
export default function ClassroomSideBar({ setOpen, setOpenSidebar, data, setOpenAddStudent, setSubjects, subjects }) {
  async function fetchSubjects() {
    const token = localStorage.getItem("token");
    console.log("data : ", data.id)
    const classroomSubjects = await axios.get(API_URL + "staff/subject/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        classroom: data.id,
      },
    });
    setSubjects(classroomSubjects.data);
  }
  useEffect(() => {
    fetchSubjects();
  }, [data]);
  return (
    <div className="fixed top-0 right-0 z-50 h-full pt-8 overflow-y-scroll bg-white w-96">
      
        
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
        <span className="mt-2 text-gray-400">Class Teacher: 1111</span>
        
      </div>
      <div className="flex flex-row justify-around mt-4 border-b-[1px] border-gray-200 pb-4 mx-4">
        <div className="flex flex-col w-40 p-4 bg-indigo-100 rounded-lg">
          <BsBriefcase className="w-6 h-6 mb-2 text-indigo-800" />
          <span className="mb-2 font-semibold text-md">Role</span>
          <span>
            {data.is_class_teacher ? "Class Teacher" : "Not A Class Teacher"}
          </span>
        </div>
        <div className="flex flex-col w-40 p-4 bg-indigo-100 rounded-lg">
          <MdOutlineSchool className="w-6 h-6 mb-2 text-indigo-800" />
          <span className="mb-2 font-semibold text-md">No. of Student</span>
          <span>{data.strength}</span>
        </div>
      </div>
      <div className="flex flex-col mx-4 mt-4">
        <p className="mb-4 text-xl font-semibold text-gray-800">Subjects</p>
        {subjects.map((subject, index) => {
          return (
            <div key={index} className="flex flex-col px-4 py-2 m-2 bg-gray-100 rounded-lg">
              <div className="flex flex-row items-center mt-2">
                <BsBriefcase className="w-8 h-8 mb-2 mr-4 text-indigo-700" />

                <div className="flex flex-col items-start justify-center">
                  <span className="mb-1 font-semibold text-gray-800 text-md">
                    Subject{" "}
                  </span>
                  <span>{subject.name}</span>
                </div>
              </div>
              <div  className="flex flex-row items-center mt-2">
                <FaRegUser className="w-8 h-8 mb-2 mr-4 text-indigo-700" />
                <div className="flex flex-col items-start justify-center">
                  <span className="mb-1 font-semibold text-gray-800 text-md">
                    Teacher{" "}
                  </span>
                  <span>{subject.teacher}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex flex-row justify-between mx-4 my-4">
        <button
          className="flex items-center px-4 py-1 font-medium text-gray-800 duration-300 ease-in-out bg-gray-100 rounded-md hover:bg-gray-500 hover:text-white"
          onClick={() => {
            setOpenSidebar(-1);
          }}
        >
          <FiEdit2 className="mr-2" />
          Edit Classroom
        </button>
        <button
          className="flex items-center px-4 py-1 font-medium text-white duration-300 ease-in-out bg-indigo-600 rounded-md hover:bg-indigo-800"
          onClick={() => {
            setOpen(true)
          }}
        >
          <MdSubject className="mr-2" />
          Add Subject
        </button>
      </div>
      <div className="flex items-center justify-center w-full">

      <button
          className="flex items-center px-4 py-1 mx-4 mb-8 font-medium text-white duration-300 ease-in-out bg-indigo-600 rounded-md hover:bg-indigo-800"
          onClick={() => {
            setOpenAddStudent(true)
            setOpenSidebar(-1)
          }}
          >
          <MdSubject className="mr-2" />
          Add Student
        </button>
          </div>
    </div>
  );
}
