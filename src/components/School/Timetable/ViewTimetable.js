import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import ClassDropDown from "../helpers/ClassDropDown";
import SubjectDropDown from "../helpers/SubjectDropDown";
import { API_URL } from "../../../helpers/URL";
import { Rings } from "react-loader-spinner";
import { getAllSchoolData } from "../helpers/dataFetcher";
import { useNavigate } from "react-router-dom";
export default function ViewTimetible({setTimetableState}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const classrooms = useSelector((state) => state.classroom.allClasses);
  const [selectedClass, setSelectedClass] = useState({class_name:"No Class",

section_name : "No Section"});

  const [classSubjects, setClassSubjects] = useState([]);

  const [loading, setLoading] = useState(false);


  useEffect(() => {
    if (classrooms.length === 0)
      getAllSchoolData(dispatch, navigate, setLoading);
  }, []);
  useEffect(() => {
    if(classrooms.length>0)
    setSelectedClass(classrooms[0]);
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
          /> </div> ) : classrooms.length === 0 ? (
        <div className="flex items-center justify-center w-full h-screen">
          <span>Please Create a classroom first</span>
        </div>
      ) : (
        <div className="px-4 md:px-10">
          <div className="flex flex-col items-center justify-between my-4 md:flex-row">
            <p className="mt-8 text-2xl font-semibold">TimeTable</p>
            <span
            onClick={()=> setTimetableState(1)}
            className="flex items-center justify-between px-4 py-2 mx-8 mt-4 font-medium text-white bg-indigo-600 rounded-md cursor-pointer md:m-0"
          >
            Edit Timetable
          </span>
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
          <div className="flex flex-col mx-4 my-8 ">
            <span>
              {selectedClass
                ? selectedClass.class_name + " " + selectedClass.section_name
                : undefined}
            </span>
            <div className="grid grid-cols-7 gap-4 mt-6">
              <div className="text-gray-500 text-md">  </div>
              <div className="text-center ">Monday</div>
              <div className="text-center ">Tuesday</div>
              <div className="text-center ">Wednesday</div>
              <div className="text-center ">Thusday</div>
              <div className="text-center ">Friday</div>
              <div className="text-center ">Satarday</div>
            </div>
            <div className="grid grid-cols-7 gap-4 border-b-2 border-dashed divide-x">
            <div className="py-2 text-gray-500 text-md"> 9 AM </div>
              
              <div className="py-2 text-center ">
                <div className="mx-2 my-2 rounded-lg bg-gray-50 shadow-xl border-l-4 py-2 px-2 border-[#4338CA] flex flex-col justify-start items-start">
                    <span className="text-md text-font-semibold">
                      Physics
                    </span>
                    <span className="text-sm text-gray-500">
                      Aman Jagotra
                    </span>

                </div>
              </div>
              <div className="py-2 text-center "><div className="mx-2 my-2 rounded-lg bg-gray-50 shadow-xl border-l-4 py-2 px-2 border-[#4338CA] flex flex-col justify-start items-start">
                    <span className="text-md text-font-semibold">
                      Physics
                    </span>
                    <span className="text-sm text-gray-500">
                      Aman Jagotra
                    </span>

                </div></div>
              <div className="py-2 text-center ">
              <div className="mx-2 my-2 rounded-lg bg-gray-50 shadow-xl border-l-4 py-2 px-2 border-[#4338CA] flex flex-col justify-start items-start">
                    <span className="text-md text-font-semibold">
                      Physics
                    </span>
                    <span className="text-sm text-gray-500">
                      Aman Jagotra
                    </span>

                </div>
              </div>
              <div className="py-2 text-center ">
              <div className="mx-2 my-2 rounded-lg bg-gray-50 shadow-xl border-l-4 py-2 px-2 border-[#4338CA] flex flex-col justify-start items-start">
                    <span className="text-md text-font-semibold">
                      Physics
                    </span>
                    <span className="text-sm text-gray-500">
                      Aman Jagotra
                    </span>

                </div>
              </div>
              <div className="py-2 text-center ">
              <div className="mx-2 my-2 rounded-lg bg-gray-50 shadow-xl border-l-4 py-2 px-2 border-[#4338CA] flex flex-col justify-start items-start">
                    <span className="text-md text-font-semibold">
                      Physics
                    </span>
                    <span className="text-sm text-gray-500">
                      Aman Jagotra
                    </span>

                </div>
              </div>
              <div className="py-2 text-center ">
              <div className="mx-2 my-2 rounded-lg bg-gray-50 shadow-xl border-l-4 py-2 px-2 border-[#4338CA] flex flex-col justify-start items-start">
                    <span className="text-md text-font-semibold">
                      Physics
                    </span>
                    <span className="text-sm text-gray-500">
                      Aman Jagotra
                    </span>

                </div>
              </div>
            </div>
            <div className="grid grid-cols-7 gap-4 border-b-2 border-dashed divide-x">
            <div className="py-2 text-gray-500 text-md"> 9 AM </div>
              
              <div className="py-2 text-center ">
                <div className="mx-2 my-2 rounded-lg bg-gray-50 shadow-xl border-l-4 py-2 px-2 border-[#4338CA] flex flex-col justify-start items-start">
                    <span className="text-md text-font-semibold">
                      Physics
                    </span>
                    <span className="text-sm text-gray-500">
                      Aman Jagotra
                    </span>

                </div>
              </div>
              <div className="py-2 text-center "><div className="mx-2 my-2 rounded-lg bg-gray-50 shadow-xl border-l-4 py-2 px-2 border-[#4338CA] flex flex-col justify-start items-start">
                    <span className="text-md text-font-semibold">
                      Physics
                    </span>
                    <span className="text-sm text-gray-500">
                      Aman Jagotra
                    </span>

                </div></div>
              <div className="py-2 text-center ">
              <div className="mx-2 my-2 rounded-lg bg-gray-50 shadow-xl border-l-4 py-2 px-2 border-[#4338CA] flex flex-col justify-start items-start">
                    <span className="text-md text-font-semibold">
                      Physics
                    </span>
                    <span className="text-sm text-gray-500">
                      Aman Jagotra
                    </span>

                </div>
              </div>
              <div className="py-2 text-center ">
              <div className="mx-2 my-2 rounded-lg bg-gray-50 shadow-xl border-l-4 py-2 px-2 border-[#4338CA] flex flex-col justify-start items-start">
                    <span className="text-md text-font-semibold">
                      Physics
                    </span>
                    <span className="text-sm text-gray-500">
                      Aman Jagotra
                    </span>

                </div>
              </div>
              <div className="py-2 text-center ">
              <div className="mx-2 my-2 rounded-lg bg-gray-50 shadow-xl border-l-4 py-2 px-2 border-[#4338CA] flex flex-col justify-start items-start">
                    <span className="text-md text-font-semibold">
                      Physics
                    </span>
                    <span className="text-sm text-gray-500">
                      Aman Jagotra
                    </span>

                </div>
              </div>
              <div className="py-2 text-center ">
              <div className="mx-2 my-2 rounded-lg bg-gray-50 shadow-xl border-l-4 py-2 px-2 border-[#4338CA] flex flex-col justify-start items-start">
                    <span className="text-md text-font-semibold">
                      Physics
                    </span>
                    <span className="text-sm text-gray-500">
                      Aman Jagotra
                    </span>

                </div>
              </div>
            </div>
            <div className="grid grid-cols-7 gap-4 border-b-2 border-dashed divide-x">
            <div className="py-2 text-gray-500 text-md"> 9 AM </div>
              
              <div className="py-2 text-center ">
                <div className="mx-2 my-2 rounded-lg bg-gray-50 shadow-xl border-l-4 py-2 px-2 border-[#4338CA] flex flex-col justify-start items-start">
                    <span className="text-md text-font-semibold">
                      Physics
                    </span>
                    <span className="text-sm text-gray-500">
                      Aman Jagotra
                    </span>

                </div>
              </div>
              <div className="py-2 text-center "><div className="mx-2 my-2 rounded-lg bg-gray-50 shadow-xl border-l-4 py-2 px-2 border-[#4338CA] flex flex-col justify-start items-start">
                    <span className="text-md text-font-semibold">
                      Physics
                    </span>
                    <span className="text-sm text-gray-500">
                      Aman Jagotra
                    </span>

                </div></div>
              <div className="py-2 text-center ">
              <div className="mx-2 my-2 rounded-lg bg-gray-50 shadow-xl border-l-4 py-2 px-2 border-[#4338CA] flex flex-col justify-start items-start">
                    <span className="text-md text-font-semibold">
                      Physics
                    </span>
                    <span className="text-sm text-gray-500">
                      Aman Jagotra
                    </span>

                </div>
              </div>
              <div className="py-2 text-center ">
              <div className="mx-2 my-2 rounded-lg bg-gray-50 shadow-xl border-l-4 py-2 px-2 border-[#4338CA] flex flex-col justify-start items-start">
                    <span className="text-md text-font-semibold">
                      Physics
                    </span>
                    <span className="text-sm text-gray-500">
                      Aman Jagotra
                    </span>

                </div>
              </div>
              <div className="py-2 text-center ">
              <div className="mx-2 my-2 rounded-lg bg-gray-50 shadow-xl border-l-4 py-2 px-2 border-[#4338CA] flex flex-col justify-start items-start">
                    <span className="text-md text-font-semibold">
                      Physics
                    </span>
                    <span className="text-sm text-gray-500">
                      Aman Jagotra
                    </span>

                </div>
              </div>
              <div className="py-2 text-center ">
              <div className="mx-2 my-2 rounded-lg bg-gray-50 shadow-xl border-l-4 py-2 px-2 border-[#4338CA] flex flex-col justify-start items-start">
                    <span className="text-md text-font-semibold">
                      Physics
                    </span>
                    <span className="text-sm text-gray-500">
                      Aman Jagotra
                    </span>

                </div>
              </div>
            </div>
            <div className="grid grid-cols-7 gap-4 border-b-2 border-dashed divide-x">
            <div className="py-2 text-gray-500 text-md"> 9 AM </div>
              
              <div className="py-2 text-center ">
                <div className="mx-2 my-2 rounded-lg bg-gray-50 shadow-xl border-l-4 py-2 px-2 border-[#4338CA] flex flex-col justify-start items-start">
                    <span className="text-md text-font-semibold">
                      Physics
                    </span>
                    <span className="text-sm text-gray-500">
                      Aman Jagotra
                    </span>

                </div>
              </div>
              <div className="py-2 text-center "><div className="mx-2 my-2 rounded-lg bg-gray-50 shadow-xl border-l-4 py-2 px-2 border-[#4338CA] flex flex-col justify-start items-start">
                    <span className="text-md text-font-semibold">
                      Physics
                    </span>
                    <span className="text-sm text-gray-500">
                      Aman Jagotra
                    </span>

                </div></div>
              <div className="py-2 text-center ">
              <div className="mx-2 my-2 rounded-lg bg-gray-50 shadow-xl border-l-4 py-2 px-2 border-[#4338CA] flex flex-col justify-start items-start">
                    <span className="text-md text-font-semibold">
                      Physics
                    </span>
                    <span className="text-sm text-gray-500">
                      Aman Jagotra
                    </span>

                </div>
              </div>
              <div className="py-2 text-center ">
              <div className="mx-2 my-2 rounded-lg bg-gray-50 shadow-xl border-l-4 py-2 px-2 border-[#4338CA] flex flex-col justify-start items-start">
                    <span className="text-md text-font-semibold">
                      Physics
                    </span>
                    <span className="text-sm text-gray-500">
                      Aman Jagotra
                    </span>

                </div>
              </div>
              <div className="py-2 text-center ">
              <div className="mx-2 my-2 rounded-lg bg-gray-50 shadow-xl border-l-4 py-2 px-2 border-[#4338CA] flex flex-col justify-start items-start">
                    <span className="text-md text-font-semibold">
                      Physics
                    </span>
                    <span className="text-sm text-gray-500">
                      Aman Jagotra
                    </span>

                </div>
              </div>
              <div className="py-2 text-center ">
              <div className="mx-2 my-2 rounded-lg bg-gray-50 shadow-xl border-l-4 py-2 px-2 border-[#4338CA] flex flex-col justify-start items-start">
                    <span className="text-md text-font-semibold">
                      Physics
                    </span>
                    <span className="text-sm text-gray-500">
                      Aman Jagotra
                    </span>

                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
