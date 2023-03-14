import React from "react";
import { Link } from "react-router-dom";
import {
  FiHome,
  FiBookOpen,
  FiFileText,
  FiEdit3,
  FiSend,
  FiCreditCard,
  FiBriefcase,
} from "react-icons/fi";
import { BiChalkboard } from "react-icons/bi";
import { HiOutlineUserGroup } from "react-icons/hi";
import SideBar from "../UI/Dashboard/SideBar";
export default function SchoolSidebar() {
  return (
    <SideBar>
      <div className="w-full pb-10 mt-12 text-gray-200 gap-y-2">
        <div className="flex w-full">
          <Link
            className="flex items-center justify-start w-full p-4 mx-4 text-center duration-300 ease-in-out rounded-xl hover:bg-gray-700 "
            to="/school/dashboard"
          >
            <FiHome className="w-6 h-6 " />
            <span className="ml-4 text-lg font-medium select-none">Dashboard</span>
          </Link>
        </div>
        <div className="flex w-full">
          <Link
            className="flex items-center justify-start w-full p-4 mx-4 text-center duration-300 ease-in-out rounded-xl hover:bg-gray-700 "
            to="/school/addnoice"
          >
            <FiFileText className="w-6 h-6 " />
            <span className="ml-4 text-lg font-medium select-none">Create Notice</span>
          </Link>
        </div>
        <div className="flex w-full">
          <Link
            className="flex items-center justify-start w-full p-4 mx-4 text-center duration-300 ease-in-out rounded-xl hover:bg-gray-700"
            to="/school/classroom"
          >
            <BiChalkboard className="w-6 h-6 " />
            <span className="ml-4 text-lg font-medium select-none">Classroom</span>
          </Link>
        </div>
        <div className="flex w-full">
          <Link
            className="flex items-center justify-start w-full p-4 mx-4 text-center duration-300 ease-in-out rounded-xl hover:bg-gray-700 "
            to="/school/subject"
          >
            <FiBookOpen className="w-6 h-6 " />
            <span className="ml-4 text-lg font-medium select-none">All Cources</span>
          </Link>
        </div>
        <div className="flex w-full">
          <Link
            className="flex items-center justify-start w-full p-4 mx-4 text-center duration-300 ease-in-out rounded-xl hover:bg-gray-700 "
            to="/school/test"
          >
            <FiEdit3 className="w-6 h-6 " />
            <span className="ml-4 text-lg font-medium select-none">Text/Exam</span>
          </Link>
        </div>
        <div className="flex w-full">
          <Link
            className="flex items-center justify-start w-full p-4 mx-4 text-center duration-300 ease-in-out rounded-xl hover:bg-gray-700 "
            to="/"
          >
            <FiSend className="w-6 h-6 " />
            <span className="ml-4 text-lg font-medium select-none">Message</span>
          </Link>
        </div>
        <div className="flex w-full">
          <Link
            className="flex items-center justify-start w-full p-4 mx-4 text-center duration-300 ease-in-out rounded-xl hover:bg-gray-700 "
            onClick={() => {
              localStorage.removeItem("classId");
              localStorage.removeItem("className");
            }}
            to="/school/students"
          >
            <HiOutlineUserGroup className="w-6 h-6 " />
            <span className="ml-4 text-lg font-medium select-none">Student Management</span>
          </Link>
        </div>
        <div className="flex w-full">
          <Link
            className="flex items-center justify-start w-full p-4 mx-4 text-center duration-300 ease-in-out rounded-xl hover:bg-gray-700 "
            to="/school/staff"
          >
            <HiOutlineUserGroup className="w-6 h-6 " />
            <span className="ml-4 text-lg font-medium select-none">Staff Management</span>
          </Link>
        </div>
        <div className="flex w-full">
          <Link
            className="flex items-center justify-start w-full p-4 mx-4 text-center duration-300 ease-in-out rounded-xl hover:bg-gray-700 "
            to="/school/fees"
          >
            <FiCreditCard className="w-6 h-6 " />
            <span className="ml-4 text-lg font-medium select-none">Fee Management</span>
          </Link>
        </div>
        <div className="flex w-full">
          <Link
            className="flex items-center justify-start w-full p-4 mx-4 text-center duration-300 ease-in-out rounded-xl hover:bg-gray-700 "
            to="{% url 'dashboard' %}"
          >
            <FiBriefcase className="w-6 h-6 " />
            <span className="ml-4 text-lg font-medium select-none">Administration</span>
          </Link>
        </div>
      </div>
    </SideBar>
  );
}
