import React, { useState, useEffect } from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { GoPrimitiveDot } from "react-icons/go";
import axios from "axios";
import { API_URL } from "../../../helpers/URL";
import { useDispatch } from "react-redux";
import { formatDate } from "../../../helpers/helperFunctions";
import { setWarningToast, setSuccessToast } from "../../../store/genralUser";
export default function ProfileCard(props) {
  const [today, setToday] = useState(0);
  useEffect(() => {
    const date = new Date();
    setToday(date.getDate());
  }, []);
  const dispatch = useDispatch();

  async function markAttendance(val) {
    const token = localStorage.getItem("token");
    try {
      const date = new Date();
      const res = await axios.post(
        API_URL + "staff/attendance/",
        {
          date: formatDate(date),
          present: val,
          student: props.studentId,
          classroom: localStorage.getItem("classId"),
          school: props.school,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (res.status === 201)
        dispatch(setSuccessToast("Attendance Marked Succesfully"));
      if (
        res.status === 200 &&
        res.data.non_field_errors[0] ===
          "The fields student, date must make a unique set."
      )
        dispatch(setWarningToast("Attendance marked for the day"));
    } catch (e) {
      console.warn("Error ::: ", e);
    }
  }
  return (
    <div
      className="border-[1px] bg-gray-50 border-gray-400 rounded-lg flex flex-col p-4 w-full"
      onClick={() => {
        props.setDataOfStaff(props.allData);
        props.setOpenProfile(0);
      }}
    >
      <div className="flex flex-row justify-between border-b-[1px] border-gray-200 pb-2 border-dotted">
        <div className="flex flex-col">
          <img
            className="object-cover w-10 h-10 mb-2 rounded-md"
            src={props.allData.profile_pic}
          />

          <span className="font-semibold text-black">{props.name}</span>
          <span className="text-gray-400"> id: {props.id}</span>
        </div>
        <div className="flex flex-col items-end justify-between">
          <BiDotsVerticalRounded className="w-8 h-8" />
          {JSON.parse(props.attendance)[today - 1] === 1 ? (
            <span className="flex items-center text-green-500">
              <GoPrimitiveDot className="w-4 h-4 mr-2" /> Present
            </span>
          ) : JSON.parse(props.attendance)[today - 1] === 2 ? (
            <span className="flex items-center text-red-500">
              <GoPrimitiveDot className="w-4 h-4 mr-2" /> Absent
            </span>
          ) : (
            <span className="text-red-500">Attendance Due</span>
          )}
        </div>
      </div>
      <div className="flex flex-row justify-between mt-2 text-gray-700">
        <div className="flex flex-col">
          <span>Class</span>
          <span>{props.StclassName}</span>
        </div>
        <div className="flex flex-col items-end">
          <span>Grade</span>
          <span>{props.grade}</span>
        </div>
      </div>
      {props.classTeacherOff.includes(props.StclassName) ? (
        <div className="flex flex-col">
          <span className="mt-4 mb-4 font-medium text-md">Mark Attendence</span>
          <div className="flex flex-row justify-between">
            <button
              onClick={() => markAttendance(true)}
              className="flex items-center px-4 py-1 mx-4 text-sm font-medium text-white duration-300 ease-in-out bg-green-600 rounded-md hover:bg-green-800"
            >
              Present
            </button>
            <button className=""></button>
            <button
              onClick={() => markAttendance(false)}
              className="flex items-center px-4 py-1 mx-4 font-medium text-white duration-300 ease-in-out bg-red-600 rounded-md hover:bg-red-800"
            >
              Abesnt
            </button>
          </div>
        </div>
      ) : undefined}
    </div>
  );
}
