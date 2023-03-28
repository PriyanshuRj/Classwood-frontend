import React, { useState } from "react";
import SubjectDropDown from "../helpers/SubjectDropDown";
import {
  updateTimetableSell,
  updateTimeFrame,
} from "../../../store/School/timetableSlice";
import { useSelector, useDispatch } from "react-redux";
export default function SingleRow({
  markedSubjects,
  allSubjects,
  rowIndex,
  rowTime,
}) {
  const dispatch = useDispatch();
  const setSelected = (columnIndex, value) => {
    console.log("called");

    dispatch(
      updateTimetableSell({
        columnIndex: columnIndex,
        rowIndex: rowIndex,
        value: value,
      })
    );
  };
  const chageTime = (startEnd, timeType, value) => {
    dispatch(
      updateTimeFrame({
        rowIndex: rowIndex,
        value: value,
        startEnd: startEnd,
        timeType: timeType,
      })
    );
  };
  return (
    <div className="grid grid-cols-7 gap-2 border-b-2 border-dashed divide-x">

    {/* Time Table Time Frame */}
      <div className="flex flex-col justify-center items-center w-full my-2">
        <div className="flex justify-between items-center flex-col xl:flex-row">
          <span className="mr-2 text-sm">Start : </span>
          <div
            key={rowIndex}
            className="text-sm px-2 flex border rounded-md items-center justigy-center mb-2"
          >
            <div className="flex">
              <input
                type="number"
                name="hour"
                className="w-5 bg-transparent text-sm appearance-none outline-none mr-1"
                value={rowTime.start.hour}
                onChange={(e) => {
                  if(e.target.value < 25)  chageTime("start", "hour", e.target.value)}}
              />

              <span className="text-xl mx-3"> : </span>
              <input
                type="number"
                name="minutes"
                className="w-5 bg-transparent text-sm appearance-none outline-none mr-1"
                value={rowTime.start.minute}
                onChange={(e) => {
                  if(e.target.value < 60)  chageTime("start", "minute", e.target.value)}}
              />
             
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center flex-col xl:flex-row">
          <span className="mr-2 text-sm">End : </span>
          <div
            key={rowIndex}
            className="text-sm px-2 flex border rounded-md items-center justigy-center"
          >
            <div className="flex">
              <input
                type="number"
                name="hour"
                value={rowTime.end.hour}

                onChange={(e) => {
                  
                  if(e.target.value < 25) chageTime("end", "hour", e.target.value)}}

                className="w-5 bg-transparent text-sm appearance-none outline-none mr-1"
              />

              <span className="text-xl mx-3"> : </span>
              <input
                type="number"
                name="minutes"
                value={rowTime.end.minute}

                onChange={(e) => {
                  if(e.target.value < 60) chageTime("end", "minute", e.target.value)}}
                className="w-5 bg-transparent text-sm appearance-none outline-none mr-1"
              />
             
            </div>
          </div>
        </div>
      </div>

      {markedSubjects.map((markedSubject, index) => {
        return (
          <div
            key={index + markedSubject.name}
            className="w-full px-2 py-2 text-center "
          >
            <SubjectDropDown
              //   id={index}
              inputList={allSubjects}
              labelTitle=""
              DivWidth="full"
              type="timetable"
              index={index}
              selected={markedSubject}
              setSelected={setSelected}
            />
          </div>
        );
      })}
    </div>
  );
}
