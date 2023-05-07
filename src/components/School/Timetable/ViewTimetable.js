import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import ClassDropDown from "../helpers/ClassDropDown";
import { API_URL } from "../../../helpers/URL";
import { Rings } from "react-loader-spinner";
import { getAllSchoolData } from "../helpers/dataFetcher";
import { useNavigate } from "react-router-dom";
import ViewSubjectEntry from "./ViewSubjectEntry";

import { timeList } from "../../../helpers/inputLists";

export default function ViewTimetible({ setTimetableState }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const session = useSelector((state) => state.user.session);

  const classrooms = useSelector((state) => state.classroom.allClasses);
  const [selectedClass, setSelectedClass] = useState({
    class_name: "No Class",
    section_name: "No Section",
  });

  const [loading, setLoading] = useState(false);
  const [timetable, setTimetable] = useState([]);

  function compareTime(a, b, type1, type2) {
    const aTime = a.split(":");
    const bTime = b.split(":");
    if (parseInt(aTime[0]) > parseInt(bTime[0])) return true;
    else if (parseInt(aTime[0]) == parseInt(bTime[0])) {
      if (parseInt(aTime[1]) > parseInt(bTime[1])) return true;
      if (parseInt(aTime[1]) == parseInt(bTime[1])) {
        if (type1 === "start" && type2 === "start") {
          return true;
        }

        if (type1 === "end" && type2 === "end") {
          return true;
        }
      }
    }
    return false;
  }
  function sortTimeTable(a, b) {
    return compareTime(a.start_time, b.start_time) ? 1 : -1;
  }

  function filterTimetable(arr) {
    let finalPeriodArray = [{}, {}, {}, {}, {}, {}];
    for (let i in arr) {
      finalPeriodArray[parseInt(arr[i].day)] = arr[i];
    }
    return finalPeriodArray;
  }
  function removeExtraEntry(timetable){
    for (var i in timetable){
      if(i>0 && timetable[i].start_time===timetable[i-1].start_time ){
        timetable[i].period_start_time = "";
      }
      else {
        timetable[i].period_start_time = timetable[i].start_time;
      }
      console.log(i);
    }
    return timetable;
  }
  async function getTimeTable() {
    setLoading(true);
    var timetable = [];
    const token = localStorage.getItem("token");

    const res = await axios.get(API_URL + "staff/timeTable", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        classroom: selectedClass.id,
        session: localStorage.getItem("session"),
      },
    });
    const commonRes = await axios.get(API_URL + "staff/commontime", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        classroom: selectedClass.id,
        session: localStorage.getItem("session"),
      },
    });
    console.log(res.data, selectedClass, localStorage.getItem("session"));
   
    if (res.data.length) {
      const timearray = res.data.sort(sortTimeTable);

      for (var i = 0; i < timeList.length - 1; i++) {
        var starttime = timeList[i];
        var endtime = timeList[i + 1];
        var arr = [];
        for (let i in timearray) {
          if (
            compareTime(timearray[i].start_time, starttime, "start", "start") &&
            compareTime(endtime, timearray[i].start_time, "start", "end")
          )
            arr.push(timearray[i]);
          if (
            compareTime(timearray[i].end_time, starttime, "end", "start") &&
            compareTime(endtime, timearray[i].end_time, "end", "end")
          )
            arr.push(timearray[i]);
        }
        if (arr.length) {
          timetable.push({
            start_time: starttime,
            end_time: endtime,
            periods: filterTimetable(arr),
          });
        }
      }
      
      setTimetable(removeExtraEntry(timetable.concat(commonRes.data).sort(sortTimeTable)));
    }
    setLoading(false);
  }
  useEffect(() => {
    setTimetable([]);
    if(selectedClass.id)
    getTimeTable();
  }, [selectedClass]);
  useEffect(() => {
    if (classrooms.length === 0)
      getAllSchoolData(dispatch, navigate, setLoading, session);
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
          <div className="flex flex-col items-center justify-between my-4 md:flex-row">
            <p className="mt-8 text-2xl font-semibold">TimeTable</p>
            <span
              onClick={() => setTimetableState(1)}
              className="flex items-center justify-between px-4 py-2 mx-8 mt-4 font-medium text-white bg-indigo-600 rounded-md cursor-pointer md:m-0"
            >
              Add Timetable
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
            <span className="text-xl font-semibold">
              {selectedClass
                ? selectedClass.class_name + " " + selectedClass.section_name
                : undefined}
            </span>
            {timetable.length === 0 ? (
              <div className="flex h-[50vh] w-full justify-center items-center">
                <span>No Time Table For this class</span>
              </div>
            ) : (
              <div>
                <div className="grid grid-cols-7 gap-4 mt-6">
                  <div className="text-gray-500 text-md"> </div>
                  <div className="text-center ">Monday</div>
                  <div className="text-center ">Tuesday</div>
                  <div className="text-center ">Wednesday</div>
                  <div className="text-center ">Thusday</div>
                  <div className="text-center ">Friday</div>
                  <div className="text-center ">Satarday</div>
                </div>
                {timetable.map((timetableRow, index) => {
                  return (
                    <div
                      key={index}
                      className={`grid grid-cols-7 gap-4 ${!index || timetableRow.period_start_time===""? undefined : "border-t-2 border-dashed" }  divide-x`}
                    >
                      <div className="py-2 text-gray-500 text-md ">
                        {" "}
                        {timetableRow.period_start_time}
                      </div>
                      {timetableRow.periods ? (
                        timetableRow.periods.map((period, index) => {
                          return (
                            <ViewSubjectEntry
                              key={index}
                              period={period}
                              index={index}
                              getTimeTable={getTimeTable}
                              start={timetableRow.start_time}
                              end={timetableRow.end_time}
                              selectedClass={selectedClass}
                            />
                          );
                        })
                      ) : (
                        <div className="col-span-6">
                          <div className="py-2 text-center " index={index}>
                            <div className="mx-2 my-2 rounded-lg  bg-[#FEF3C7] shadow-xl border-l-4 py-4  px-3 border-[#F59E0B] flex flex-col justify-start items-start">
                              <span className="text-md text-font-semibold">
                                {timetableRow.subject}
                              </span>
                              <span className="text-sm text-gray-500">
                                {timetableRow.start_time} -{" "}
                                {timetableRow.end_time}
                              </span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
