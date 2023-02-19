import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import { Link } from "react-router-dom";
import ClassroomCard from "../UI/Cards/ClassroomCard";
import { IoMdAddCircleOutline } from "react-icons/io";
import { FiFilter } from "react-icons/fi";
import { AiOutlineSearch } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { getAllSchoolData } from "./helpers/dataFetcher";
import AddSubject from "./AddSubject";
import AddStudent from "../UI/SideBars/AddStudent";
import { useNavigate } from "react-router-dom";

import ClassroomSideBar from "../UI/SideBars/classroomSidebar";
const tabs = [
  "All Classes",
  "Senior Secondary",
  "Secondary",
  "Primary",
  "Middle",
  "Pre Primary",
];
export default function Classroom() {
  const [openSidebar, setOpenSidebar] = useState(-1);
  const [selectedClass, setSelectedClass] = useState(-1);
  const [isOpen, setOpen] = useState(false);
  const [openAddStudent, setOpenAddStudent] = useState(false);
  const [subjects, setSubjects] = useState([]);

  const [tabState, setTabState] = useState(0);
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const classrooms = useSelector((state) => state.classroom.allClasses);
  useEffect(() => {
    if (!classrooms || classrooms.length === 0) getAllSchoolData(dispatch, navigate);
  }, []);

  return (
    <Layout>
      {isOpen ? <AddSubject setOpen={setOpen} classroom={classrooms[openSidebar]}  /> : undefined}
      {openAddStudent ? <AddStudent subjects={subjects} classroom={classrooms[selectedClass]}  setOpenAddProfile={setOpenAddStudent} /> : undefined}
      {openSidebar !== -1 ? (
        <ClassroomSideBar
        subjects={subjects}
        setSubjects={setSubjects}
          setOpen={setOpen}
          setOpenSidebar={setOpenSidebar}
          data={classrooms[openSidebar]}
          setOpenAddStudent={setOpenAddStudent}
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
                className="py-2 pl-10 text-sm text-gray-900 bg-white rounded-md focus:outline-none w-[280px] sm:w-[320px]"
                placeholder="Search a class"
                autoComplete="off"
              />
            </div>
            <button className="flex items-center px-2 py-1 font-medium text-gray-800 bg-gray-200 rounded-md sm:px-4">
              <FiFilter className="sm:mr-2" />
              <span className="hidden sm:flex">
                Fliter
                </span>
            </button>
          </div>
          <Link
            to="/school/addclass"
            className="flex items-center justify-between px-4 py-1 mx-8 mt-4 font-medium text-white bg-indigo-600 rounded-md md:m-0"
          >
            <IoMdAddCircleOutline className="mr-2" />
            Add Class
          </Link>
        </div>

        <p className="my-4 mt-8 text-xl font-semibold">All CLassroom</p>
        <div className="flex-row hidden w-full mb-4 border-b-2 md:flex">
          {tabs.map((tab, index) => {
            return (
              <span
                key={index}
                className={`mx-4 font-semibold text-gray-400 ${
                  tabState === index
                    ? "text-indigo-600 border-b-2 border-indigo-600"
                    : undefined
                }`}
                onClick={() => setTabState(index)}
              >
                {tab}
              </span>
            );
          })}
        </div>
        <div className="mb-10 grid gap-4 min-[590px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {classrooms.map((classData, index) => {
            return (
              <ClassroomCard
                key={index}
                classData={classData}
                index={index}
                setSelectedClass={setSelectedClass}
                setOpenSidebar={setOpenSidebar}
              />
            );
          })}
        </div>
      </div>
    </Layout>
  );
}
