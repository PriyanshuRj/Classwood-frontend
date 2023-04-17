import React, { useState, useEffect } from "react";
import { GoPrimitiveDot, GoLocation } from "react-icons/go";
import { RxCross1 } from "react-icons/rx";
import { BsBriefcase } from "react-icons/bs";
import { BiRupee } from "react-icons/bi";


import { MdClass } from "react-icons/md";
import { Rings } from "react-loader-spinner";
import axios from "axios";
import { API_URL } from "../../../helpers/URL";
import { useSelector } from "react-redux";

export default function FeesSidebar({

  setOpenSidebar,
  data,

}) {
  const [loading, setLoading] = useState(false);
  console.log(data)
  return (
    <div className="fixed top-0 right-0 z-50 flex flex-col justify-between h-full pt-8 overflow-y-scroll bg-white w-[28rem] shadow-md">
      {loading ? (
        <div className="flex items-center justify-center w-full h-screen">
          <Rings
            height="220"
            width="220"
            // radius="9"
            color="rgb(30 64 175)"
            ariaLabel="loading"
          />{" "}
        </div>
      ) : (
        <>
          <div>
            <div
              onClick={() => setOpenSidebar(false)}
              className="cursor-pointer absolute p-2 bg-gray-200 rounded-full top-8 left-8"
            >
              <RxCross1 />
            </div>

            <div className="flex flex-col items-center justify-center w-full mt-8">
              <span className="text-2xl md:text-5xl mb-10 mt-8 font-semibold">
                {data.className}
              </span>
              <span className="text-2xl md:text-6xl  font-semibold text-[#0D9488] flex">
                <BiRupee className="mr-1" /> {data.amount}
              </span>
              <span className="text-gray-600 mt-2 mb-8">
                Total Fees
              </span>
            </div>
            <div className="flex flex-col ml-4">
              <p className="font-medium text-lg text-black">Fees Struncture Details Per Student</p>
              {data.subFeesees.map((fee, index)=>{
                return <div key={index} className="flex flex-col mt-4">
                  <span className="mb-2 text-xl text-gray-700">
                    {fee.fee_type}
                  </span>
                  <span className="flex items-center text-lg">
                  <BiRupee className="mr-1" /> {fee.amount}
                  </span>
                  </div>
              })}
            </div>
          
          </div>
        
        </>
      )}
    </div>
  );
}
