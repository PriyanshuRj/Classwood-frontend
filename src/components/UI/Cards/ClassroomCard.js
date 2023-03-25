import React, { useState, useEffect, Fragment } from "react";
import { TfiBlackboard } from "react-icons/tfi";
import { BiDotsVerticalRounded } from "react-icons/bi";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Menu, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import { removeClass } from "../../../store/School/classroomSlice";
import { API_URL } from "../../../helpers/URL";
import PopUpMenu from "../PopUpMenu";
import { setSuccessToast } from "../../../store/genralUser";

export default function ClassroomCard({
  classData,
  setOpenSidebar,
  index,
  setSelectedClass,
  setOpenEditClassroom,
  setSelectedClassroom
}) {
  console.log(classData)
  const dispatch = useDispatch();
  function viewClass() {
    localStorage.setItem("classId", classData.id);
    localStorage.setItem(
      "className",
      classData.class_name + " " + classData.section_name
    );
    setSelectedClass(index);
    setOpenSidebar(index);
  }
  function editClass() {
    setSelectedClassroom(index);
    setOpenEditClassroom(true);
  }
  async function deleteClass() {
    // props.setOpenProfile(0);
    console.log("Delete called");
    try {
      const token = localStorage.getItem("token");
      console.log(token);
      const res = await axios.delete(
        API_URL + "list/classroom/" + classData.id + "/",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("response", res);
      if (res.status === 204) {
        dispatch(removeClass(classData));
        dispatch(setSuccessToast("Deleted Classroom"));
      }
    } catch (error) {
      console.warn(error);
    }
  }
  function viewStudentDetails() {
    localStorage.setItem("classId", classData.id);
    localStorage.setItem(
      "className",
      classData.class_name + " " + classData.section_name
    );
    setSelectedClass(index);
  }
  const ClassroomPopUpData = [
    {
      title: "View Class Details",
      function: viewClass,
    },
    {
      title: "View Class Student",
      function: viewStudentDetails,
    },
    {
      title: "Edit Class",
      function: editClass,
    },
    {
      title: "Delete Class",
      function: deleteClass,
      deleteType: true,
    },
  ];
  const deleteFunction = {
    title: "Delete Function",
    function: deleteClass,
  };

  return (
    <div className="flex flex-col p-4 bg-white border rounded-xl">
      <div className="flex flex-row items-center justify-between pb-2 border-b-[1px]">
        <div className="flex flex-row items-center justify-between pb-2">
          <span className="p-2 bg-indigo-200 rounded-lg">
            <TfiBlackboard className="w-4 h-4 text-indigo-600" />
          </span>
          <span className="ml-2 text-lg font-semibold ">
            {classData.class_name + " " + classData.section_name}
          </span>
        </div>
        <PopUpMenu
          menuList={ClassroomPopUpData}
          deleteFunction={deleteFunction}
        />
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

      <div className="flex flex-row items-center justify-between mt-5 text-sm border-t-[1px] pt-2">
        <span className="font-semibold text-gray-500"> STUDENTS </span>
        <span className="font-semibold text-gray-500">
          {classData.strength}
        </span>
      </div>
    </div>
  );
}
