import React from "react";
import {FiSettings, FiBell, FiUser} from 'react-icons/fi';
import {BiNotification} from 'react-icons/bi';
import { useSelector } from "react-redux";
export default function DashHeader() {
  const userData = useSelector((state) => state.user.userProfileData);
  console.log("This is user Data", userData)
  return (
    <div className="flex items-center justify-between w-full p-10 py-6 bg-white  border-b-[0.5px] border-[#D9D9D9]">
      <p className="text-2xl font-semibold sm:text-4xl">Hello {userData.school_name}!</p>
      <div className="flex flex-row items-center justify-center">
        {/* <div className="p-2 min-[480px]:p-4  md:p-4 ml-2 sm:ml-4 bg-[#F6F8FE] rounded-full">
          < FiSettings className="h-4 w-4 min-[480px]:h-6 min-[480px]:w-6 sm:w-4 sm:h-4 md:w-7 md:h-7 text-[#5F6368]" />
        </div>
        <div className="p-2 min-[480px]:p-4  md:p-4 ml-2 bg-[#F6F8FE] rounded-full">
        < FiBell className="h-4 w-4 min-[480px]:h-6 min-[480px]:w-6 sm:w-4 sm:h-4 md:w-7 md:h-7 text-[#5F6368]" />
        </div> */}
        < BiNotification className=" h-8 w-8 min-[480px]:h-6 min-[480px]:w-6 sm:w-4 sm:h-4 md:w-10 md:h-10 text-[#5F6368]" />
        
        <div className="ml-4 p-2 min-[480px]:p-4  md:p-4 ml-2 bg-[#D9D9D9] rounded-full">
        <FiUser className="h-4 w-4 min-[480px]:h-6 min-[480px]:w-6 sm:w-4 sm:h-4 md:w-7 md:h-7 text-[#5F6368]" />       
        </div>
      </div>
    </div>
  );
}
