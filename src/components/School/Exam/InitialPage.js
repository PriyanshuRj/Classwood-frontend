import React from 'react'
import examImage from "../../../assets/graduation-hat.png";
import testImage from "../../../assets/test.png";
export default function InitialPage({setPageState}) {
  return (
    <div className="flex flex-col items-center justify-center w-full mt-16 ">
        <p className="text-4xl font-bold ">Want to add student marks ?</p>
        <p className="mt-4 font-gray-500">
          Select between exam and test, so that you can add marks for a call
        </p>
        <div className="flex flex-row items-center justify-center mt-20">
          <div className="p-4 rounded-xl [background:linear-gradient(154deg,_rgba(223,_218,_255,_0.015),_rgba(188,_158,_255,_98.3))] mr-16 cursor-pointer" onClick={()=> setPageState("Exam")}>
            <p className="text-[#745FFF] font-semibold text-4xl pt-4">Exam</p>
            <img
              src={examImage}
              alt="exam"
              className="relative -mt-14 top-14"
            />
          </div>
          <div className="p-4 rounded-xl [background:linear-gradient(154deg,_rgba(232,_197,_159,_0.065),_rgba(229,_192,_154,_0.97))] cursor-pointer" onClick={()=> setPageState("Test")}>
            <p className="text-[#F1A551] font-semibold text-4xl pt-4">Test</p>
            <img
              src={testImage}
              alt="exam"
              className="relative -mt-20 top-20"
            />
          </div>
        </div>
      </div>
  )
}
