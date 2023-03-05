import React, { useState, useEffect, Fragment } from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { GoPrimitiveDot } from "react-icons/go";
import axios from "axios";
import { API_URL } from "../../../helpers/URL";
import { useDispatch } from "react-redux";
import { formatDate } from "../../../helpers/helperFunctions";
import { setWarningToast, setSuccessToast } from "../../../store/genralUser";
import { Menu, Transition } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProfileCard(props) {
  const [today, setToday] = useState(0);
  const [attendanceState, setAttendanceState] = useState(0);
  useEffect(() => {
    const date = new Date();
    setToday(date.getDate());
  }, []);
  useEffect(() => {
    if (props.type === "student")
      setAttendanceState(JSON.parse(props.attendance)[today - 1]);
  }, [today]);
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
      console.log("res :: ", res);
      if (res.status === 201)
        dispatch(setSuccessToast("Attendance Marked Succesfully"));
      setAttendanceState(val ? 2 : 1);
      console.log("value of attendance", attendanceState);
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
    <div className="border-[1px] bg-gray-50 border-gray-400 rounded-lg flex flex-col p-4 w-full">
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
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex justify-center w-full text-sm font-semibold text-gray-900 ">
                <BiDotsVerticalRounded className="w-6 h-6" />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <span
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                        onClick={() => {
                          props.setDataOfStaff(props.allData);
                          props.setOpenProfile(0);
                        }}
                      >
                        View Profile
                      </span>
                    )}
                  </Menu.Item>

                  <Menu.Item>
                    {({ active }) => (
                      <span
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Edit Profile
                      </span>
                    )}
                  </Menu.Item>
                  <div className="border-t-[1px]">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          type="submit"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-red-500"
                              : "text-red-400",
                            "block w-full px-4 py-2 text-left text-sm text-medium"
                          )}
                        >
                          Delete Class
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
          {props.type === "student" ? (
            attendanceState === 2 ? (
              <span className="flex items-center text-green-500">
                <GoPrimitiveDot className="w-4 h-4 mr-2" /> Present
              </span>
            ) : attendanceState === 1 ? (
              <span className="flex items-center text-red-500">
                <GoPrimitiveDot className="w-4 h-4 mr-2" /> Absent
              </span>
            ) : (
              <span className="text-red-500">Attendance Due</span>
            )
          ) : undefined}
        </div>
      </div>
      {props.type==="student"? <div className="flex flex-row justify-between mt-2 text-gray-700">
      <div className="flex flex-col">
        <span>Class</span>
        <span>{props.StclassName}</span>
      </div>
      <div className="flex flex-col items-end">
        <span>Grade</span>
        <span>{props.grade}</span>
      </div>
    </div> : 

<div className="flex flex-row justify-between mt-2 text-gray-700">
        <div className="flex flex-col">
          <span className="text-sm">Role</span>
          <span className="font-semibold">{props.isIncharge ? "Class Teacher" : "Staff Member"}</span>
        </div>
        <div className="flex flex-col items-end">
          <span className="text-sm">Class Assigned</span>
          <span className="font-semibold" >{props.isIncharge ? props.incharge : "None"}</span>
        </div>
      </div>

      }
      {props.type === "student" &&
      localStorage.getItem("classId") &&
      (localStorage.getItem("UserType") === "School" ||
        props.classTeacherOff.includes(props.StclassName)) ? (
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
