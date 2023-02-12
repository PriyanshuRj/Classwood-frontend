import React from "react";
import { GoPrimitiveDot, GoLocation } from "react-icons/go";
import { RxCross1 } from "react-icons/rx";
import { BsBriefcase } from "react-icons/bs";
import { MdOutlineSchool } from "react-icons/md";
import { AiOutlinePhone, AiOutlineCalendar,AiOutlineBank ,AiOutlineStar} from "react-icons/ai";
import {HiOutlineCake} from "react-icons/hi";
import {FiEdit2} from "react-icons/fi";
export default function ProfileSideBar({setOpenProfile, data}) {
  console.log("STaff Data", data)
  return (
    <div className="fixed top-0 right-0 z-50 h-full pt-8 overflow-y-scroll bg-white w-96">
      <div onClick={()=>setOpenProfile(-1)} className="absolute p-2 bg-gray-200 rounded-full top-8 left-8">
        <RxCross1 />
      </div>

      <div className="flex flex-col items-center justify-center w-full">
        <img
          className="object-cover w-16 h-16 mb-2 rounded-full"
          src={data.profile_pic ? data.profile_pic : "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"}
        />
        <span className="font-semibold text-md ">J{data.first_name + " " + data.last_name}</span>
        <span className="text-gray-400"> id: 1111</span>
        <span className="flex items-center text-green-500">
          <GoPrimitiveDot className="w-4 h-4 mr-2" /> Present
        </span>
      </div>
      <div className="flex flex-row justify-around mt-4 border-b-[1px] border-gray-200 pb-4 mx-4">
        <div className="flex flex-col w-40 p-4 bg-indigo-100 rounded-lg">
          <BsBriefcase className="w-6 h-6 mb-2 text-indigo-800" />
          <span className="mb-2 font-semibold text-md">Role</span>
          <span>{data.is_class_teacher ? "Class Teacher" : "Not A Class Teacher"}</span>
        </div>
        <div className="flex flex-col w-40 p-4 bg-indigo-100 rounded-lg">
          <MdOutlineSchool className="w-6 h-6 mb-2 text-indigo-800" />
          <span className="mb-2 font-semibold text-md">Class Assigned</span>
          <span>12th A</span>
        </div>
      </div>
      <div className="flex flex-col mx-4 mt-4">
        <p className="mb-4 text-xl font-semibold text-gray-800">Personal Details</p>
        <div className="flex flex-row items-center mt-2">
          <AiOutlinePhone className="w-8 h-8 mb-2 mr-4 text-indigo-700" />
          <div className="flex flex-col items-start justify-center">
            <span className="mb-1 font-semibold text-gray-800 text-md">Phone Number</span>
            <span>{data.mobile_number}</span>
          </div>
        </div>
        <div className="flex flex-row items-center mt-4">
          <BsBriefcase className="w-8 h-8 mb-2 mr-4 text-indigo-700" />
          <div className="flex flex-col items-start justify-center ">
            <span className="mb-1 font-semibold text-gray-800 text-md">Email Address</span>
            <span>{data.contact_email}</span>
          </div>
        </div>
        <div className="flex flex-row items-center mt-4">
          <HiOutlineCake className="w-8 h-8 mb-2 mr-4 text-indigo-700" />
          <div className="flex flex-col items-start justify-center">
            <span className="mb-1 font-semibold text-gray-800 text-md">Date of Birth</span>
            <span>{data.date_of_birth}</span>
          </div>
        </div>
        <div className="flex flex-row items-center mt-4">
          <GoLocation className="w-8 h-8 mb-2 mr-4 text-indigo-700" />
          <div className="flex flex-col items-start justify-center">
            <span className="mb-1 font-semibold text-gray-800 text-md">Address</span>
            <span> P jagarta Ready Nagar, Gatachini , Hydrabad, Telangana 2001021</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col mx-4 mt-4">
        <p className="mb-4 text-xl font-semibold text-gray-800">Professional Details</p>
        <div className="flex flex-row items-center mt-2">
          <AiOutlineCalendar className="w-8 h-8 mb-2 mr-4 text-indigo-700" />
          <div className="flex flex-col items-start justify-center">
            <span className="mb-1 font-semibold text-gray-800 text-md">Date of Joining</span>
            <span> {data.date_of_joining}</span>
          </div>
        </div>
        <div className="flex flex-row items-center mt-4">
          <AiOutlineStar className="w-8 h-8 mb-2 mr-4 text-indigo-700" />
          <div className="flex flex-col items-start justify-center ">
            <span className="mb-1 font-semibold text-gray-800 text-md">Holiday Left</span>
            <span>4</span>
          </div>
        </div>
        <div className="flex flex-row items-center mt-4">
          <AiOutlineBank className="w-8 h-8 mb-2 mr-4 text-indigo-700" />
          <div className="flex flex-col items-start justify-center">
            <span className="mb-1 font-semibold text-gray-800 text-md">Bank Account</span>
            <span>7654323567878676</span>
          </div>
        </div>
      
      </div>
      <div className="mx-4 my-4">

      <button className="flex items-center px-4 py-1 font-medium text-gray-800 bg-gray-100 rounded-md">
              <FiEdit2 className="mr-2" />
              Edit Staff
            </button>
      </div>
    </div>
  );
}
