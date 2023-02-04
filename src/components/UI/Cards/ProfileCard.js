import React from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { GoPrimitiveDot } from "react-icons/go";
export default function ProfileCard() {
  return (
    <div className="border-[1px] border-gray-400 rounded-lg flex flex-col p-4 w-full">
      <div className="flex flex-row justify-between border-b-[1px] border-gray-200 pb-2 border-dotted">
        <div className="flex flex-col">
          <img
            className="object-cover w-10 h-10 rounded-md"
            src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          />

          <span className="font-semibold text-black">student 1</span>
          <span className="text-gray-400"> id: 12345</span>
        </div>
        <div className="flex flex-col items-end justify-between">
          <BiDotsVerticalRounded className="w-8 h-8" />
          <span className="flex items-center text-green-500">
            <GoPrimitiveDot className="w-4 h-4 mr-2" /> Present
          </span>
        </div>
      </div>
      <div className="flex flex-row justify-between mt-2 text-gray-700">
        <div className="flex flex-col">
          <span>Class</span>
          <span>12th</span>
        </div>
        <div className="flex flex-col items-end">
          <span>Grade</span>
          <span>A</span>
        </div>
      </div>
    </div>
  );
}
