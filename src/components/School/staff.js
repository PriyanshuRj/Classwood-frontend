import React, {useState, useEffect} from "react";
import Layout from "./Layout";
import ProfileCard from "../UI/Cards/ProfileCard";
import { IoMdAddCircleOutline } from "react-icons/io";
import { FiFilter } from "react-icons/fi";
import { AiOutlineSearch } from "react-icons/ai";
import AddStaff from "../UI/SideBars/AddStaff";
import ProfileSideBar from "../UI/SideBars/ProfileSideBar";

import {getAllSchoolData} from "./helpers/dataFetcher";
import { useSelector, useDispatch } from 'react-redux'


export default function Student() {
  const [openProfile, setOpenProfile] = useState(-1);
  const [openAddProfile, setOpenAddProfile] = useState(false);
  const [dataOfStaff, setDataOfStaff] = useState({});
  const [staffData, setStaffData] = useState(null);

  const staff = useSelector((state) => state.staff.allStaff)
  const dispatch = useDispatch()


  useEffect(()=>{
    if(!staff || staff.length===0)
    getAllSchoolData(dispatch)
   
  },[])
  return (
    <Layout>
      {openProfile !== -1 ? <ProfileSideBar setOpenAddProfile={setOpenAddProfile} setStaffData={setStaffData} data={dataOfStaff} setOpenProfile={setOpenProfile} /> : undefined}
      {openAddProfile ? <AddStaff staffData={staffData} setOpenAddProfile={setOpenAddProfile} /> : undefined}
      
      <div className="px-0 md:px-10">
        <div className="flex flex-col items-center justify-between my-4 md:flex-row">
          <div className="flex flex-row ">
            <div className="relative mr-4 text-gray-600 focus-within:text-gray-400">
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <AiOutlineSearch />
              </span>
              <input
                type="search"
                name="q"
                className="py-2 pl-10 text-sm text-gray-900 bg-white rounded-md focus:outline-none"
                placeholder="Search a staff member"
                autoComplete="off"
              />
            </div>
            <button className="flex items-center px-4 py-1 font-medium text-gray-800 bg-gray-200 rounded-md">
              <FiFilter className="mr-2" />
              Fliter
            </button>
          </div>
          <button 
          onClick={()=> {
            setStaffData(null)
            setOpenAddProfile(true)
            }
          }
          className="flex items-center px-4 py-1 mt-4 font-medium text-white bg-indigo-600 rounded-md md:mt-0">
            <IoMdAddCircleOutline className="mr-2" />
            Add New Staff
          </button>
        </div>

        <p className="my-4 mt-8 text-xl font-semibold">
          CLass 12 Student
        </p>
        <div className="grid gap-4 min-[590px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {staff.map((e,i)=>{
            console.log(e)
          return <ProfileCard key={i} name={e.first_name + " " + e.last_name} allData={e} setDataOfStaff={setDataOfStaff} id={12345} StclassName={"112"} grade={"A"} setOpenProfile={setOpenProfile} />
          
          })}
        </div>
      </div>
    </Layout>
  );
}
