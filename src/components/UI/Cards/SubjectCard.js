import React from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { AiOutlineUpload } from "react-icons/ai";
export default function SubjectCard() {
  return (
    <div className="flex flex-col p-4 duration-200 ease-in-out bg-white rounded-xl hover:drop-shadow-md">
      <div className="flex flex-row items-center justify-between">
        <span className="text-lg font-semibold ">Physics</span>
        <BiDotsVerticalRounded className="w-6 h-6" />
      </div>

      <span className="flex items-center p-4 py-2 mt-4 font-semibold text-indigo-500 rounded-md cursor-pointer bg-gray-50">
        {" "}
        <AiOutlineUpload className="w-6 h-6 mr-4" /> Download Syllabus{" "}
      </span>
    </div>
  );
}
