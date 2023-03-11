import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import ClassroomCard from "../UI/Cards/ClassroomCard";
import { FiFilter } from "react-icons/fi";
import { AiOutlineSearch } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { getAllImportantData } from "./helper/getData";
import ClassroomSideBar from "../UI/SideBars/classroomSidebar";

export default function Classroom() {
  const [openSidebar, setOpenSidebar] = useState(-1);
  const [selectedClass, setSelectedClass] = useState(-1);
  const [subjects, setSubjects] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  function fliterClassroom(classData) {
    return (classData.class_name + " " + classData.section_name)
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
  }
  const dispatch = useDispatch();
  const classrooms = useSelector((state) => state.staffUser.AllClassroom);
  useEffect(() => {
    if (!classrooms.length) {
      getAllImportantData(dispatch);
    }
  }, []);

  return (
    <Layout>
      {openSidebar !== -1 ? (
        <ClassroomSideBar
          subjects={subjects}
          setSubjects={setSubjects}
          setOpenSidebar={setOpenSidebar}
          data={classrooms.filter(fliterClassroom)[openSidebar]}
        />
      ) : undefined}

      <div className="px-4 md:px-10">
        <div className="flex flex-col justify-between my-4 md:flex-row">
          <div className="flex flex-row ">
            <div className="relative mr-4 text-gray-600 focus-within:text-gray-400">
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <AiOutlineSearch />
              </span>
              <input
                type="search"
                name="q"
                onChange={(e) => setSearchQuery(e.target.value)}
                className="py-2 pl-10 text-sm text-gray-900 bg-white rounded-md focus:outline-none w-[280px] sm:w-[320px]"
                placeholder="Search a class"
                autoComplete="off"
              />
            </div>
            <button className="flex items-center px-2 py-1 font-medium text-gray-800 bg-gray-200 rounded-md sm:px-4">
              <FiFilter className="sm:mr-2" />
              <span className="hidden sm:flex">Fliter</span>
            </button>
          </div>
        </div>

        <p className="my-4 mt-8 text-xl font-semibold">All CLassroom</p>

        {classrooms.length == 0 ? (
          <div className="flex items-center justify-center w-full h-96">
            <span>No Classroom Assigned</span>
          </div>
        ) : (
          <div className="mb-10 grid gap-4 min-[590px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {classrooms.filter(fliterClassroom).map((classData, index) => {
              return (
                <ClassroomCard
                  key={index}
                  classData={classData}
                  index={index}
                  setSelectedClass={setSelectedClass}
                  setOpenSidebar={setOpenSidebar}
                  setSubjects={setSubjects}
                  subjects={subjects}
                />
              );
            })}
          </div>
        )}
      </div>
    </Layout>
  );
}
