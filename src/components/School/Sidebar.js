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
import {BiChalkboard} from 'react-icons/bi';
import {HiOutlineUserGroup} from "react-icons/hi";
import SideBar from "../UI/Dashboard/SideBar";
export default function SchoolSidebar() {
  return (
    <SideBar>

    <div className="w-full pb-10 mt-12 text-gray-200 border-b-2 gap-y-2">
      <div className="flex w-full">
        <Link
          className="flex items-center justify-start w-full p-4 text-center duration-300 ease-in-out mx-4 rounded hover:bg-[opacity-70] hover:bg-gray-500 "
          to="/school/dashboard"
          >
          <FiHome className="w-6 h-6 " />

          <span className="ml-4 text-lg font-medium">Dashboard</span>
        </Link>
      </div>
      <div className="flex w-full">
        <Link
          className="flex items-center justify-start w-full p-4 text-center duration-300 ease-in-out mx-4 rounded hover:bg-[opacity-70] hover:bg-gray-500 "
          to="/school/addnoice"
        >
          <FiFileText className="w-6 h-6 " />

          <span className="ml-4 text-lg font-medium">Create Notice</span>
        </Link>
      </div>
      <div className="flex w-full">
        <Link
          className="flex items-center justify-start w-full p-4 text-center duration-300 ease-in-out mx-4 rounded hover:bg-[opacity-70] hover:bg-gray-500"
          to="/school/classroom"
        >
          <BiChalkboard className="w-6 h-6 " />

          <span className="ml-4 text-lg font-medium">Classroom</span>
        </Link>
      </div>
      <div className="flex w-full">
        <Link
          className="flex items-center justify-start w-full p-4 text-center duration-300 ease-in-out mx-4 rounded hover:bg-[opacity-70] hover:bg-gray-500 "
          to="/school/subject"
        >
          <FiBookOpen className="w-6 h-6 " />

          <span className="ml-4 text-lg font-medium">All Cources</span>
        </Link>
      </div>
      <div className="flex w-full">
        <Link
          className="flex items-center justify-start w-full p-4 text-center duration-300 ease-in-out mx-4 rounded hover:bg-[opacity-70] hover:bg-gray-500 "
          to="/school/test"
          >
          <FiEdit3 className="w-6 h-6 " />

          <span className="ml-4 text-lg font-medium">Text/Exam</span>
        </Link>
      </div>
      <div className="flex w-full">
        <Link
          className="flex items-center justify-start w-full p-4 text-center duration-300 ease-in-out mx-4 rounded hover:bg-[opacity-70] hover:bg-gray-500 "
          to="/"
          >
          <FiSend className="w-6 h-6 " />

          <span className="ml-4 text-lg font-medium">Message</span>
        </Link>
      </div>
      <div className="flex w-full">
        <Link
          className="flex items-center justify-start w-full p-4 text-center duration-300 ease-in-out mx-4 rounded hover:bg-[opacity-70] hover:bg-gray-500 "
          to="/school/students"
          >
          <HiOutlineUserGroup className="w-6 h-6 " />

          <span className="ml-4 text-lg font-medium">Student Management</span>
        </Link>
      </div>
      <div className="flex w-full">
        <Link
          className="flex items-center justify-start w-full p-4 text-center duration-300 ease-in-out mx-4 rounded hover:bg-[opacity-70] hover:bg-gray-500 "
          to="/school/staff"
          >
          <HiOutlineUserGroup className="w-6 h-6 " />

          <span className="ml-4 text-lg font-medium">Staff Management</span>
        </Link>
      </div>
      <div className="flex w-full">
        <Link
          className="flex items-center justify-start w-full p-4 text-center duration-300 ease-in-out mx-4 rounded hover:bg-[opacity-70] hover:bg-gray-500 "
          to="/school/fees"
          >
          <FiCreditCard className="w-6 h-6 " />

          <span className="ml-4 text-lg font-medium">Fee Management</span>
        </Link>
      </div>
      <div className="flex w-full">
        <Link
          className="flex items-center justify-start w-full p-4 text-center duration-300 ease-in-out mx-4 rounded hover:bg-[opacity-70] hover:bg-gray-500 "
          to="{% url 'dashboard' %}"
          >
          <FiBriefcase className="w-6 h-6 " />

          <span className="ml-4 text-lg font-medium">Administration</span>
        </Link>
      </div>
    </div>
          </SideBar>
  );
}
