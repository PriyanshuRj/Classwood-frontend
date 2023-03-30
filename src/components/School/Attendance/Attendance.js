import React, {useState, useEffect} from 'react'
import AttendanceCard from './AttendanceCard';
import AttendenceRow from './AttendenceRow';
import Layout from "../Layout";
import { useNavigate } from 'react-router-dom';
import { Rings } from 'react-loader-spinner';
import { AiOutlineSearch } from 'react-icons/ai';
import { FiFilter } from 'react-icons/fi';
import { getAllSchoolData } from '../helpers/dataFetcher';
import { useSelector, useDispatch} from 'react-redux';
export default function Attendance() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [viewState, setViewState] = useState("grid");

  const [searchQuery, setSearchQueary] = useState("");
  const classrooms = useSelector((state) => state.classroom.allClasses);

  useEffect(() => {
    if (!classrooms || classrooms.length === 0)
      getAllSchoolData(dispatch, navigate,setLoading);
  }, []);

  function fliterClassroom(classData) {
    return (classData.class_name + " " + classData.section_name)
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
  }
  return (
    <Layout>
{loading ?  
    <div className="flex items-center justify-center w-full h-screen">

    <Rings
            height="220"
            width="220"
            // radius="9"
            color="rgb(30 64 175)"
            
            ariaLabel="loading"
          /> </div> : <>
    <div className='p-4'>
    <div className="flex flex-col justify-between my-4 md:flex-row">
          <p className="text-2xl font-semibold ">All CLassroom</p>
          <button
           
            className="flex items-center justify-between px-4 py-1 mx-8 mt-4 font-medium text-white bg-indigo-600 rounded-md md:m-0"
          >
            {/* <IoMdAddCircleOutline className="mr-2" /> */}
            Add Class
          </button>
        </div>

        <div className="flex flex-row items-center justify-between w-full">
          <div className="flex flex-row my-8">
            <div className="relative mr-4 text-gray-600 focus-within:text-gray-400">
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <AiOutlineSearch />
              </span>
              <input
                type="search"
                name="q"
                onChange={(e) => setSearchQueary(e.target.value)}
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
          <div className="flex flex-row p-1 rounded-md bg-slate-100 ">
            <span
              className={`px-2 pl-4 py-2  ${
                viewState === "grid" ? "bg-white pr-4 font-semibold cursor-pointer" : "cursor-pointer"
              } rounded-md`}
              onClick={() => setViewState("grid")}
            >
              Grid
            </span>
            <span
              className={`px-2 pr-4 py-2 ${
                viewState === "list" ? "bg-white pl-4 font-semibold" : "cursor-pointer"
              } rounded-md`}
              onClick={() => setViewState("list")}
            >
              List
            </span>
          </div>
        </div>

{viewState==="grid" ?  (
  <div className="mb-10 grid gap-4 min-[590px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
  {classrooms.filter(fliterClassroom).map((classData, index) => {
    return (
      <AttendanceCard
        key={index}
        classData={classData}
        index={index}
      />
    );
  })}
</div>
  ) : (<>
  <div className="border-2 rounded-md">
          <div className="grid w-full grid-cols-5 p-2 text-sm font-semibold text-gray-500 bg-slate-100">
            <span>Class</span>
            <span>Total Students</span>
            <span>Students Present</span>
            <span>Students Absent</span>
            <span>Actions</span>
          </div>
          </div>
          {classrooms.filter(fliterClassroom).map((classData, index) => {
            return (
              <AttendenceRow
                key={index}
                classData={classData}
                index={index}
            
              />
            );
          })}
  
  </>)}
    
    </div>
    </> }
    </Layout>
  )
}
