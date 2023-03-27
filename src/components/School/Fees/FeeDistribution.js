import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import ClassDropDown from "../helpers/ClassDropDown";
import { API_URL } from "../../../helpers/URL";
import {IoMdAddCircleOutline} from 'react-icons/io';
import { getAllSchoolData } from "../helpers/dataFetcher";
import { useNavigate } from "react-router-dom";
import { Rings } from "react-loader-spinner";
export default function FeesDistribution() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const divisionStats = ["Annual","Monthly", "Quartely", "Custom"]
  const classrooms = useSelector((state) => state.classroom.allClasses);
  const [divisionState, setDevisionState] = useState(0);
  const [selectedClass, setSelectedClass] = useState({
    class_name: "No Class",

    section_name: "No Section",
  });


  const [loading, setLoading] = useState(false);

  async function uploadFees() {
    try{
      const token = localStorage.getItem("token");
      const res = await axios.post(API_URL + "list/fees", {
   
      },{
        headers : {
          Authorization: `Bearer ${token}`,
        }
      })
    } catch( e ){
      console.warn(e)
    }
  }


  useEffect(() => {
    if (classrooms.length === 0)
      getAllSchoolData(dispatch, navigate, setLoading);
  }, []);

  useEffect(() => {
    if (classrooms.length > 0) setSelectedClass(classrooms[0]);
  }, [classrooms]);



  return (
    <>
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
      ) : classrooms.length === 0 ? (
        <div className="flex items-center justify-center w-full h-screen">
          <span>Please Create a classroom first</span>
        </div>
      ) : (
        <div className="px-4 md:px-10">
          <div className="flex flex-col justify-between my-4 md:flex-row">
            <p className="mt-8 text-2xl font-semibold">Create Fee Structure</p>
          </div>
          <div className="flex flex-row justify-between my-8 ">
        <div className="flex flex-row items-center justify-center">
          <span className="flex items-center justify-center w-6 h-6 text-gray-200 bg-gray-700 border-2 border-gray-700 rounded-full text-md">
            1
          </span>
          <span className="ml-2 font-semibold text-gray-700 text-md">
            {" "}
            Fees Structure
          </span>
        </div>
        <div className="flex flex-row items-center justify-center">
          <span className="flex items-center justify-center w-6 h-6 text-gray-500 bg-white border-2 border-gray-500 rounded-full text-md">
            2
          </span>
          <span className="ml-2 font-semibold text-gray-500 text-md">
            {" "}
            Fee Concession
          </span>
        </div>
        <div className="flex flex-row items-center justify-center">
          <span className="flex items-center justify-center w-6 h-6 text-gray-500 bg-white border-2 border-gray-500 rounded-full text-md">
            3
          </span>
          <span className="ml-2 font-semibold text-gray-500 text-md">
            {" "}
            Student List
          </span>
        </div>
      </div>
          <div className="flex flex-row px-4">
            <div className="w-full mx-4">
              <ClassDropDown
                //   id={index + 1}
                inputList={classrooms}
                labelTitle="Class*"
                DivWidth="full"
                selected={selectedClass}
                setSelected={setSelectedClass}
              />
            </div>
          </div>
          <div className="mx-4 px-4 flex flex-col  mt-4">
                      <label className="font-semibold mt-2">Tution Fees*</label>
                      <input
                        type="text"
                        placeholder="Tution Fees"
                        // value={schoolName}
                        // onChange={(e) => setSchoolName(e.target.value)}
                        className="flex px-3 py-2 font-medium border-2 border-slate-200  rounded-lg md:px-4 md:py-3 placeholder:font-normal"
                      />
                    </div>
                    <button
                    className="ml-8 mt-8 flex items-center px-4 py-2 font-medium text-white duration-300 ease-in-out bg-indigo-600 rounded-md hover:bg-indigo-800"
                    onClick={() => {
                      // setOpen(true);
                    }}
                  >
                    <IoMdAddCircleOutline className="mr-2" />
                    Add Section
                  </button>

                  <div className="flex flex-col">
                      <span className="text-gray-500 font-semibold mt-4 mx-8">Time Period*</span>
                      <div className="flex flex-row justify-between py-4 mx-8">
                        {divisionStats.map((division, index)=>{
                          return <span onClick={()=> setDevisionState(index)} key={index} className={` ${divisionState===index ? " bg-slate-700 text-white "  : "bg-slate-200 text-gray-700 " }  w-[20%] text-center rounded-md px-4 py-2 text-md font-semibold `}>
                          {division}
                        </span>
                        })}
                        
                      </div>
                  </div>
      
         <div className="border-2 rounded-md mx-8">
          <div className="grid w-full grid-cols-5 p-2 text-sm font-semibold text-gray-500 bg-slate-50">
            <span>Fee Fields</span>
            <span>Q1</span>
            <span>Q2</span>
            <span>Q3</span>
            <span>Q4</span>
          </div>
          </div>
          <div
        onClick={()=>console.log("hello")}
        className="text-center flex cursor-pointer items-center justify-center px-4 py-2 mx-8 mt-8 font-medium text-white bg-indigo-600 rounded-md"
        >
            Next Page
            </div>
        </div>
      )}
    </>
  );
}
