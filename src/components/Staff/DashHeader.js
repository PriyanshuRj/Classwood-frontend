import React from "react";
import {FiSettings, FiBell, FiUser} from 'react-icons/fi';
export default function DashHeader() {
  return (
    <div className="flex items-center justify-between w-full p-10 py-6 bg-white  border-b-[0.5px] border-[#D9D9D9]">
      <p className="text-2xl font-semibold sm:text-4xl">Hello Student !</p>
      <div className="flex flex-row items-center justify-center">
       
        <div className="p-2 min-[480px]:p-4  md:p-4 ml-2 sm:ml-4 bg-[#F6F8FE] rounded-full">
          < FiSettings className="h-4 w-4 min-[480px]:h-6 min-[480px]:w-6 sm:w-4 sm:h-4 md:w-7 md:h-7 text-[#5F6368]" />
 
        </div>
        <div className="p-2 min-[480px]:p-4  md:p-4 ml-2 bg-[#F6F8FE] rounded-full">
        < FiBell className="h-4 w-4 min-[480px]:h-6 min-[480px]:w-6 sm:w-4 sm:h-4 md:w-7 md:h-7 text-[#5F6368]" />
      
        </div>
        <div className="p-2 min-[480px]:p-4  md:p-4 ml-2 bg-[#D9D9D9] rounded-full">
        < FiUser className="h-4 w-4 min-[480px]:h-6 min-[480px]:w-6 sm:w-4 sm:h-4 md:w-7 md:h-7 text-[#5F6368]" />

       
        </div>
      </div>
    </div>
  );
}
