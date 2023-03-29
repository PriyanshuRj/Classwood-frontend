import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import SubjectCard from "../UI/Cards/SubjectCard";
import { BsGrid, BsListUl } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { FiFilter, FiMoreHorizontal } from "react-icons/fi";
import UploadSyllabusSidebar from "../UI/SideBars/UploadSyllabusSidebar";
import { AiOutlineSearch, AiOutlineUpload } from "react-icons/ai";
import { getAllSchoolData } from "./helpers/dataFetcher";
import { useNavigate } from "react-router-dom";
import { Rings } from "react-loader-spinner";
const tabs = [
  "All Classes",
  "Senior Secondary",
  "Secondary",
  "Primary",
  "Middle",
  "Pre Primary",
];
export default function AllSubjects() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [openUpload, setOpenUpload] = useState(false);
  const [tabState, setTabState] = useState(0);
  const [viewState, setViewState] = useState("grid");
  const [loading, setLoading] = useState(false);
  
  const allSyllabus = useSelector((state) => state.syllabus.allSyllabus);
  console.log("All Sylabus", allSyllabus)
  const allSujects = [{}, {}, {}, {}, {}, {}];

  useEffect(()=>{
    if(!allSyllabus.length) getAllSchoolData(dispatch, navigate, setLoading);
  },[])
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
      {openUpload !== false ? (
        <UploadSyllabusSidebar setOpenUpload={setOpenUpload} />
      ) : undefined}
      <div className="px-0 md:px-10">
        <div className="flex justify-between my-4">
        <p className="text-2xl font-semibold ">All CLassroom</p>
          
          <button
            className="flex items-center px-4 py-2 font-medium text-white bg-indigo-600 rounded-md"
            onClick={() => setOpenUpload(true)}
          >
            <AiOutlineUpload className="w-6 h-6 mr-2" />
            Upload Syllabus
          </button>
        </div>

       
      
        {/* <div className="flex flex-row w-full mb-4 border-b-2">
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
        </div> */}

        <div className="flex flex-row items-center mt-2 mb-4">
            <div className="relative mr-4 text-gray-600 focus-within:text-gray-400">
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <AiOutlineSearch />
              </span>
              <input
                type="search"
                name="q"
                className="py-3 pl-10 text-sm text-gray-900 bg-white rounded-md focus:outline-none"
                placeholder="Search a staff member"
                autoComplete="off"
              />
            </div>
            <div className="flex flex-row justify-between w-full">

            <button className="flex items-center px-2 py-1 font-medium text-gray-800 rounded-md border-[1px] bg-gray-50 sm:px-6 md:py-2 hover:bg-gray-600 hover:text-white ease-int-out duration-200">
              <FiFilter className="sm:mr-2" />
              <span className="hidden font-semibold text-md sm:flex">Fliter</span>
            </button>
            </div>
            <div className="flex flex-row p-1 rounded-md bg-slate-100">
            <span className={`px-2 pl-4 py-2 flex items-center justify-center ${viewState==='grid' ?'bg-white pr-4 font-semibold' : 'cursor-pointer'} rounded-md`} onClick={()=> setViewState('grid')}>
            <BsGrid className="mr-2" />
              Grid
            </span>
            <span className={`px-2 pr-4 py-2 flex items-center justify-center ${viewState==='list' ?'bg-white pl-4 font-semibold' : 'cursor-pointer'} rounded-md`} onClick={()=> setViewState('list')}>
            <BsListUl className="mr-2" />
              List
            </span>
            </div>
          </div>
          
        {viewState==='grid' ? <div className="grid gap-4 min-[590px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {allSyllabus.map((subject, index)=>{
          
          return <SubjectCard key={index} subject={subject}/>
          })}
         
        </div> 
: 
        <div className="border-2 rounded-md">

        <div className="grid w-full grid-cols-4 p-2 text-sm font-semibold text-gray-500 bg-slate-100">
          <span>SUBJECTS</span>
          <span>CLASS LECTURES</span>
          <span>VIDEO LECTURES</span>
          <span>ACTIONS</span>

        </div>
        {allSyllabus.map((subject, index)=>{
          return <div className="grid w-full grid-cols-4 p-2 py-4 font-semibold text-gray-800 bg-white border-b-2">
          <span>Physics</span>
          <span>12</span>
          <span>44</span>
          <FiMoreHorizontal className="flex justify-center w-6 h-6"/>

        </div>
        })}
        </div>}
      </div></> }
    </Layout>
  );
}
