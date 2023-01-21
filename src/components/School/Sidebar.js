import React from "react";
import { Link } from "react-router-dom";
import {
  FiHome,
  FiBookOpen,
  FiEdit3,
  FiSend,
  FiCreditCard,
  FiBriefcase,
} from "react-icons/fi";
export default function Sidebar() {
  return (
    <div className="w-full pb-10 mt-12 text-gray-800 border-b-2 gap-y-2">
      <div className="flex w-full">
        <Link
          className="flex items-center justify-start w-full p-4 text-center duration-300 ease-in-out rounded hover:bg-opacity-70 hover:bg-gray-100 hover:text-gray-800"
          to="/student/dashboard"
        >
          <FiHome className=" text-[#5F6368] w-6 h-6" />

          <span className="ml-4 text-xl font-medium">Dashboard</span>
        </Link>
      </div>
      <div className="flex w-full">
        <Link
          className="flex items-center justify-start w-full p-4 text-center duration-300 ease-in-out rounded hover:bg-opacity-70 hover:bg-gray-100 hover:text-gray-800"
          to="/student/subject"
        >
          <FiBookOpen className=" text-[#5F6368] w-6 h-6" />

          <span className="ml-4 text-xl font-medium">My Cource</span>
        </Link>
      </div>
      <div className="flex w-full">
        <Link
          className="flex items-center justify-start w-full p-4 text-center duration-300 ease-in-out rounded hover:bg-opacity-70 hover:bg-gray-100 hover:text-gray-800"
          to="/student/test"
        >
          <FiEdit3 className=" text-[#5F6368] w-6 h-6" />

          <span className="ml-4 text-xl font-medium">Text/Exam</span>
        </Link>
      </div>
      <div className="flex w-full">
        <Link
          className="flex items-center justify-start w-full p-4 text-center duration-300 ease-in-out rounded hover:bg-opacity-70 hover:bg-gray-100 hover:text-gray-800"
          to="/"
        >
          <FiSend className=" text-[#5F6368] w-6 h-6" />

          <span className="ml-4 text-xl font-medium">Message</span>
        </Link>
      </div>
      <div className="flex w-full">
        <Link
          className="flex items-center justify-start w-full p-4 text-center duration-300 ease-in-out rounded hover:bg-opacity-70 hover:bg-gray-100 hover:text-gray-800"
          to="/student/fees"
        >
          <FiCreditCard className=" text-[#5F6368] w-6 h-6" />

          <span className="ml-4 text-xl font-medium">Fee Payment</span>
        </Link>
      </div>
      <div className="flex w-full">
        <Link
          className="flex items-center justify-start w-full p-4 text-center duration-300 ease-in-out rounded hover:bg-opacity-70 hover:bg-gray-100 hover:text-gray-800"
          to="{% url 'dashboard' %}"
        >
          <FiBriefcase className=" text-[#5F6368] w-6 h-6" />

          <span className="ml-4 text-xl font-medium">Administration</span>
        </Link>
      </div>
    </div>
  );
}
