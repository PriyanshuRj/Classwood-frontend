import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {IoMdAddCircleOutline} from 'react-icons/io';
import axios from "axios";
import ClassDropDown from "../helpers/ClassDropDown";
import SubjectDropDown from "../helpers/SubjectDropDown";
import { API_URL } from "../../../helpers/URL";
import { getAllSchoolData } from "../helpers/dataFetcher";
import { useNavigate } from "react-router-dom";
import { Rings } from "react-loader-spinner";
import SingleRow from "./SingleRow";
import { addTimetableRow, refreshTimetableRow } from "../../../store/School/timetableSlice";
export default function AddTimetable() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const timetableRows = useSelector((state) => state.timetable.timeTableRows);
  const timetableRowsTime = useSelector((state) => state.timetable.startAndEndTime);
  const classrooms = useSelector((state) => state.classroom.allClasses);
  const [selectedClass, setSelectedClass] = useState({
    class_name: "No Class",

    section_name: "No Section",
  });

  const [classSubjects, setClassSubjects] = useState([]);

  const [loading, setLoading] = useState(false);

  async function uploadTimetable() {
    try{
      const token = localStorage.getItem("token");
      console.log("Time Table Tows", timetableRows, "time Rows", timetableRowsTime)
      const res = await axios.post(API_URL + "staff/timeTable/", {
        timetable : [timetableRows,timetableRowsTime],
        classroom : selectedClass
      },{
        headers : {
          Authorization: `Bearer ${token}`,
        }
      })
      console.log(res)
    } catch( e ){
      console.warn(e)
    }
  }
  async function fetchSubjects() {
    setLoading(true);
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
    dispatch(refreshTimetableRow())
 

    setLoading(false);
  }

  useEffect(() => {
    if (classrooms.length === 0)
      getAllSchoolData(dispatch, navigate, setLoading);
  }, []);

  useEffect(() => {
    if (classrooms.length > 0) setSelectedClass(classrooms[0]);
  }, [classrooms]);

  useEffect(() => {
    fetchSubjects();
  }, [selectedClass]);
  const addRow = ()=>{
    dispatch(addTimetableRow());
 
  }
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
            <p className="mt-8 text-2xl font-semibold">TimeTable</p>
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
            <span className="ml-4 text-2xl font-semibold">
              {selectedClass
                ? selectedClass.class_name + " " + selectedClass.section_name
                : undefined}
            </span>
            <div className="grid grid-cols-7 gap-4 mt-6">
              <div className="text-gray-500 text-md"> </div>
              <div className="text-center ">Monday</div>
              <div className="text-center ">Tuesday</div>
              <div className="text-center ">Wednesday</div>
              <div className="text-center ">Thusday</div>
              <div className="text-center ">Friday</div>
              <div className="text-center ">Satarday</div>
            </div>
            
              {timetableRows.map((subjectRow, index) =>{
                return <SingleRow
                key={index}
                allSubjects={classSubjects}
                rowIndex={index}
                markedSubjects={subjectRow}
                rowTime={timetableRowsTime[index]}
              />
              })}
            
          </div>
          <div className="flex">

          <div
        onClick={()=>addRow()}
        className="flex cursor-pointer items-center justify-between px-4 py-2 mx-8 font-medium text-white bg-indigo-600 rounded-md"
        >
            <IoMdAddCircleOutline className="mr-2" />
            Add Row
            </div>
          </div>
          <div
        onClick={()=>uploadTimetable()}
        className="text-center flex cursor-pointer items-center justify-center px-4 py-2 mx-8 mt-8 font-medium text-white bg-indigo-600 rounded-md"
        >
            Submit Timetable
            </div>
        </div>
      )}
    </>
  );
}
