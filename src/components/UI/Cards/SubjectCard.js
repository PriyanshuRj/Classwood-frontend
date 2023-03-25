import React from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { AiOutlineUpload , AiOutlinePlayCircle} from "react-icons/ai";
import {TfiBook} from 'react-icons/tfi';
import { HiOutlineDocumentDownload } from 'react-icons/hi'
export default function SubjectCard() {
  return (
    <div className="flex flex-col p-4 duration-200 ease-in-out bg-white border rounded-xl hover:drop-shadow-md">
      <div className="flex flex-row items-center justify-between">
        <span className="text-lg font-semibold ">Physics</span>
        <BiDotsVerticalRounded className="w-6 h-6" />
      </div>

      
      <div className="flex flex-col mt-4">
      <div className="flex flex-row justify-between font-semibold">
        <span className="flex">
        <TfiBook className="w-6 h-6 mr-4 text-indigo-700" />

        CLASS LECTURES
        </span>
        <span>
          22
        </span>
      </div>
      <div className="flex flex-row justify-between mt-2 font-semibold">
        <span className="flex">
        <AiOutlinePlayCircle className="w-6 h-6 mr-4 text-red-700" />

        VIDEO LECTURES
        </span>
        <span>
          02
        </span>
      </div>
      <span className="flex items-center py-2 pt-4 mt-4 font-semibold border-t-2 border-dotted cursor-pointer ">
        {" "}
        <HiOutlineDocumentDownload className="w-6 h-6 mr-4 text-gray-600 text-indigo-600" /> Download Syllabus
      </span>
      </div>
    </div>
  );
}
