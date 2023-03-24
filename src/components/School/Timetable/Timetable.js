import React, { useState, useEffect } from "react";
import Layout from "../Layout";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import ClassDropDown from "../helpers/ClassDropDown";
import SubjectDropDown from "../helpers/SubjectDropDown";
import { API_URL } from "../../../helpers/URL";
import { getAllSchoolData } from "../helpers/dataFetcher";
import { useNavigate } from "react-router-dom";
export default function Timetible() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const classStudents = useSelector((state) => state.user.testStudents);
  const classrooms = useSelector((state) => state.classroom.allClasses);
  const [selectedClass, setSelectedClass] = useState({class_name:"No Class",

section_name : "No Section"});
  const [CSVFile, setCSVFile] = useState(null);

  const [classSubjects, setClassSubjects] = useState([]);
  const [showStudents, setShowStudents] = useState(false);

  const [loading, setLoading] = useState(false);
  const [setectedSubject, setSelectedSubject] = useState({
    name: "No Subject Selected",
  });
  async function fetchSubjects() {
    const token = localStorage.getItem("token");
    const classroomSubjects = await axios.get(API_URL + "staff/subject/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        classroom: selectedClass.id,
      },
    });
    setClassSubjects(classroomSubjects.data);
    setSelectedSubject({ name: "No Subject Selected" });
    setShowStudents(false);
  }
  useEffect(() => {
    if (classrooms.length === 0)
      getAllSchoolData(dispatch, navigate, setLoading);
  }, []);
  useEffect(() => {
    if(classrooms.length>0)
    setSelectedClass(classrooms[0]);
  }, [classrooms]);
  return (
    <Layout>
      {classrooms.length === 0 ? (
        <div className="flex h-screen w-full justify-center items-center">
          <span>Please Create a classroom first</span>
        </div>
      ) : (
        <div className="px-4 md:px-10">
          <div className="flex flex-col justify-between my-4 md:flex-row">
            <p className="text-2xl font-semibold mt-8">TimeTable</p>
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
          <div className=" mx-4 my-8 flex flex-col">
            <span>
              {selectedClass
                ? selectedClass.class_name + " " + selectedClass.section_name
                : undefined}
            </span>
            <div className="grid gap-4 grid-cols-7 mt-6">
              <div className="text-gray-500 text-md">  </div>
              <div className=" text-center">Monday</div>
              <div className=" text-center">Tuesday</div>
              <div className=" text-center">Wednesday</div>
              <div className=" text-center">Thusday</div>
              <div className=" text-center">Friday</div>
              <div className=" text-center">Satarday</div>
            </div>
            <div className="grid gap-4 grid-cols-7  divide-x border-dashed border-b-2">
            <div className="text-gray-500 text-md py-2"> 9 AM </div>
              
              <div className="  text-center py-2">
                <div className="mx-2 my-2 rounded-lg bg-gray-50 shadow-xl border-l-4 py-2 px-2 border-[#4338CA] flex flex-col justify-start items-start">
                    <span className="text-md text-font-semibold">
                      Physics
                    </span>
                    <span className="text-sm text-gray-500">
                      Aman Jagotra
                    </span>

                </div>
              </div>
              <div className="  text-center py-2"><div className="mx-2 my-2 rounded-lg bg-gray-50 shadow-xl border-l-4 py-2 px-2 border-[#4338CA] flex flex-col justify-start items-start">
                    <span className="text-md text-font-semibold">
                      Physics
                    </span>
                    <span className="text-sm text-gray-500">
                      Aman Jagotra
                    </span>

                </div></div>
              <div className="  text-center py-2">
              <div className="mx-2 my-2 rounded-lg bg-gray-50 shadow-xl border-l-4 py-2 px-2 border-[#4338CA] flex flex-col justify-start items-start">
                    <span className="text-md text-font-semibold">
                      Physics
                    </span>
                    <span className="text-sm text-gray-500">
                      Aman Jagotra
                    </span>

                </div>
              </div>
              <div className="  text-center py-2">
              <div className="mx-2 my-2 rounded-lg bg-gray-50 shadow-xl border-l-4 py-2 px-2 border-[#4338CA] flex flex-col justify-start items-start">
                    <span className="text-md text-font-semibold">
                      Physics
                    </span>
                    <span className="text-sm text-gray-500">
                      Aman Jagotra
                    </span>

                </div>
              </div>
              <div className="  text-center py-2">
              <div className="mx-2 my-2 rounded-lg bg-gray-50 shadow-xl border-l-4 py-2 px-2 border-[#4338CA] flex flex-col justify-start items-start">
                    <span className="text-md text-font-semibold">
                      Physics
                    </span>
                    <span className="text-sm text-gray-500">
                      Aman Jagotra
                    </span>

                </div>
              </div>
              <div className="  text-center py-2">
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
            <div className="grid gap-4 grid-cols-7  divide-x border-dashed border-b-2">
            <div className="text-gray-500 text-md py-2"> 9 AM </div>
              
              <div className="  text-center py-2">
                <div className="mx-2 my-2 rounded-lg bg-gray-50 shadow-xl border-l-4 py-2 px-2 border-[#4338CA] flex flex-col justify-start items-start">
                    <span className="text-md text-font-semibold">
                      Physics
                    </span>
                    <span className="text-sm text-gray-500">
                      Aman Jagotra
                    </span>

                </div>
              </div>
              <div className="  text-center py-2"><div className="mx-2 my-2 rounded-lg bg-gray-50 shadow-xl border-l-4 py-2 px-2 border-[#4338CA] flex flex-col justify-start items-start">
                    <span className="text-md text-font-semibold">
                      Physics
                    </span>
                    <span className="text-sm text-gray-500">
                      Aman Jagotra
                    </span>

                </div></div>
              <div className="  text-center py-2">
              <div className="mx-2 my-2 rounded-lg bg-gray-50 shadow-xl border-l-4 py-2 px-2 border-[#4338CA] flex flex-col justify-start items-start">
                    <span className="text-md text-font-semibold">
                      Physics
                    </span>
                    <span className="text-sm text-gray-500">
                      Aman Jagotra
                    </span>

                </div>
              </div>
              <div className="  text-center py-2">
              <div className="mx-2 my-2 rounded-lg bg-gray-50 shadow-xl border-l-4 py-2 px-2 border-[#4338CA] flex flex-col justify-start items-start">
                    <span className="text-md text-font-semibold">
                      Physics
                    </span>
                    <span className="text-sm text-gray-500">
                      Aman Jagotra
                    </span>

                </div>
              </div>
              <div className="  text-center py-2">
              <div className="mx-2 my-2 rounded-lg bg-gray-50 shadow-xl border-l-4 py-2 px-2 border-[#4338CA] flex flex-col justify-start items-start">
                    <span className="text-md text-font-semibold">
                      Physics
                    </span>
                    <span className="text-sm text-gray-500">
                      Aman Jagotra
                    </span>

                </div>
              </div>
              <div className="  text-center py-2">
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
            <div className="grid gap-4 grid-cols-7  divide-x border-dashed border-b-2">
            <div className="text-gray-500 text-md py-2"> 9 AM </div>
              
              <div className="  text-center py-2">
                <div className="mx-2 my-2 rounded-lg bg-gray-50 shadow-xl border-l-4 py-2 px-2 border-[#4338CA] flex flex-col justify-start items-start">
                    <span className="text-md text-font-semibold">
                      Physics
                    </span>
                    <span className="text-sm text-gray-500">
                      Aman Jagotra
                    </span>

                </div>
              </div>
              <div className="  text-center py-2"><div className="mx-2 my-2 rounded-lg bg-gray-50 shadow-xl border-l-4 py-2 px-2 border-[#4338CA] flex flex-col justify-start items-start">
                    <span className="text-md text-font-semibold">
                      Physics
                    </span>
                    <span className="text-sm text-gray-500">
                      Aman Jagotra
                    </span>

                </div></div>
              <div className="  text-center py-2">
              <div className="mx-2 my-2 rounded-lg bg-gray-50 shadow-xl border-l-4 py-2 px-2 border-[#4338CA] flex flex-col justify-start items-start">
                    <span className="text-md text-font-semibold">
                      Physics
                    </span>
                    <span className="text-sm text-gray-500">
                      Aman Jagotra
                    </span>

                </div>
              </div>
              <div className="  text-center py-2">
              <div className="mx-2 my-2 rounded-lg bg-gray-50 shadow-xl border-l-4 py-2 px-2 border-[#4338CA] flex flex-col justify-start items-start">
                    <span className="text-md text-font-semibold">
                      Physics
                    </span>
                    <span className="text-sm text-gray-500">
                      Aman Jagotra
                    </span>

                </div>
              </div>
              <div className="  text-center py-2">
              <div className="mx-2 my-2 rounded-lg bg-gray-50 shadow-xl border-l-4 py-2 px-2 border-[#4338CA] flex flex-col justify-start items-start">
                    <span className="text-md text-font-semibold">
                      Physics
                    </span>
                    <span className="text-sm text-gray-500">
                      Aman Jagotra
                    </span>

                </div>
              </div>
              <div className="  text-center py-2">
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
            <div className="grid gap-4 grid-cols-7  divide-x border-dashed border-b-2">
            <div className="text-gray-500 text-md py-2"> 9 AM </div>
              
              <div className="  text-center py-2">
                <div className="mx-2 my-2 rounded-lg bg-gray-50 shadow-xl border-l-4 py-2 px-2 border-[#4338CA] flex flex-col justify-start items-start">
                    <span className="text-md text-font-semibold">
                      Physics
                    </span>
                    <span className="text-sm text-gray-500">
                      Aman Jagotra
                    </span>

                </div>
              </div>
              <div className="  text-center py-2"><div className="mx-2 my-2 rounded-lg bg-gray-50 shadow-xl border-l-4 py-2 px-2 border-[#4338CA] flex flex-col justify-start items-start">
                    <span className="text-md text-font-semibold">
                      Physics
                    </span>
                    <span className="text-sm text-gray-500">
                      Aman Jagotra
                    </span>

                </div></div>
              <div className="  text-center py-2">
              <div className="mx-2 my-2 rounded-lg bg-gray-50 shadow-xl border-l-4 py-2 px-2 border-[#4338CA] flex flex-col justify-start items-start">
                    <span className="text-md text-font-semibold">
                      Physics
                    </span>
                    <span className="text-sm text-gray-500">
                      Aman Jagotra
                    </span>

                </div>
              </div>
              <div className="  text-center py-2">
              <div className="mx-2 my-2 rounded-lg bg-gray-50 shadow-xl border-l-4 py-2 px-2 border-[#4338CA] flex flex-col justify-start items-start">
                    <span className="text-md text-font-semibold">
                      Physics
                    </span>
                    <span className="text-sm text-gray-500">
                      Aman Jagotra
                    </span>

                </div>
              </div>
              <div className="  text-center py-2">
              <div className="mx-2 my-2 rounded-lg bg-gray-50 shadow-xl border-l-4 py-2 px-2 border-[#4338CA] flex flex-col justify-start items-start">
                    <span className="text-md text-font-semibold">
                      Physics
                    </span>
                    <span className="text-sm text-gray-500">
                      Aman Jagotra
                    </span>

                </div>
              </div>
              <div className="  text-center py-2">
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
    </Layout>
  );
}
