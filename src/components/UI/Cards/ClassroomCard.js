import React, { useState, useEffect, Fragment } from "react";
import { TfiBlackboard } from "react-icons/tfi";
import { BiDotsVerticalRounded } from "react-icons/bi";
import axios from "axios";
import { setClassStudents } from "../../../store/genralUser";
import { useDispatch, useSelector } from "react-redux";
import { API_URL } from "../../../helpers/URL";
import { Menu, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function ClassroomCard({
  classData,
  setOpenSidebar,
  index,
  setSelectedClass,
}) {
  const [students, setStudents] = useState([]);
  const [classSubjects, setClassSubject] = useState([]);
  const dispatch = useDispatch();

  async function getStudents() {
    const token = localStorage.getItem("token");

    let res = await axios.get(API_URL + "staff/student/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        classroom: classData.id,
      },
    });

    setStudents(res.data);
  }
  async function fetchSubjects() {
    const token = localStorage.getItem("token");
    const classroomSubjects = await axios.get(API_URL + "staff/subject/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        classroom: classData.id,
      },
    });
    console.log(classData, classroomSubjects.data);
    setClassSubject(classroomSubjects.data);
  }

  return (
    <div className="flex flex-col p-4 bg-white rounded-xl">
      <div className="flex flex-row items-center justify-between pb-2 border-b-[1px]">
        <div className="flex flex-row items-center justify-between">
          <span className="p-2 bg-indigo-200 rounded-lg">
            <TfiBlackboard className="w-4 h-4 text-indigo-600" />
          </span>
          <span className="ml-2 text-lg font-semibold ">
            {classData.class_name + " " + classData.section_name}
          </span>
        </div>
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm  ">
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
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                      onClick={() => {
                        localStorage.setItem("classId", classData.id);
                        localStorage.setItem(
                          "className",
                          classData.class_name + " " + classData.section_name
                        );
                        dispatch(setClassStudents(students));
                        setSelectedClass(index);
                        setOpenSidebar(index);
                      }}
                    >
                      View Class Details
                    </span>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to="/school/students"
                      onClick={() => {
                        localStorage.setItem("classId", classData.id);
                        localStorage.setItem(
                          "className",
                          classData.class_name + " " + classData.section_name
                        );
                        dispatch(setClassStudents(students));
                        setSelectedClass(index);
                      }}
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      View Studens Details
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <span
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      Edit Class
                    </span>
                  )}
                </Menu.Item>
                <div className="border-t-[1px]">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        type="submit"
                        className={classNames(
                          active ? "bg-gray-100 text-red-500" : "text-red-400",
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
      </div>
      <div className="flex flex-row items-center justify-between mt-6 text-sm">
        <span className="font-semibold text-gray-500"> TOTAL SUBJECT </span>
        <span className="font-semibold text-gray-500">
          {classData.no_of_subjects}
        </span>
      </div>
      <div className="flex flex-row items-center justify-between mt-1 text-sm">
        <span className="font-semibold text-gray-500"> TEACHER ASSIGNED </span>
        <span className="font-semibold text-gray-500">
          {classData.no_of_subjects}
        </span>
      </div>

      <div className="flex flex-row items-center justify-between mt-5 text-sm">
        <span className="font-semibold text-gray-500"> STUDENTS </span>
        <span className="font-semibold text-gray-500">
          {classData.strength}
        </span>
      </div>
    </div>
  );
}
