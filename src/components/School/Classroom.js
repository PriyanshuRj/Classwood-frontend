import React, {useState} from 'react'
import Layout from "./Layout";
import { Link } from 'react-router-dom';
import ClassroomCard from '../UI/Cards/ClassroomCard';
import { IoMdAddCircleOutline } from "react-icons/io";
import { FiFilter } from "react-icons/fi";
import { AiOutlineSearch } from "react-icons/ai";
const tabs = [
    "All Classes","Senior Secondary", "Secondary","Primary","Middle", "Pre Primary"];
export default function Classroom() {
    const [tabState, setTabState] = useState(0);
  return (
      <Layout>

<div className="px-0 md:px-10">
        <div className="flex justify-between my-4">
          <div className="flex flex-row ">
            <div class="relative text-gray-600 focus-within:text-gray-400 mr-4">
              <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                <AiOutlineSearch />
              </span>
              <input
                type="search"
                name="q"
                class="py-2 text-sm rounded-md pl-10 focus:outline-none bg-white text-gray-900"
                placeholder="Search a staff member"
                autocomplete="off"
              />
            </div>
            <button className="flex items-center px-4 py-1 font-medium text-gray-800 bg-gray-200 rounded-md">
              <FiFilter className="mr-2" />
              Fliter
            </button>
          </div>
          <Link to="/school/addclass" className="flex items-center px-4 py-1 font-medium text-white bg-indigo-600 rounded-md">
            <IoMdAddCircleOutline className="mr-2" />
             Add Class
          </Link>
        </div>

        <p className="my-4 mt-8 text-xl font-semibold">
          All CLassroom
        </p>
        <div className='flex flex-row w-full mb-4 border-b-2'>
            {tabs.map((tab,index)=>{
                return <span key={tab} className={`mx-4 font-semibold text-gray-400 ${tabState===index? 'text-indigo-600 border-b-2 border-indigo-600' : undefined}`} onClick={()=> setTabState(index)}>
                {tab}
            </span>
            })}
           
        </div>
        <div className="grid gap-4 min-[590px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <ClassroomCard />
        <ClassroomCard />
        <ClassroomCard />
        <ClassroomCard />
        <ClassroomCard />
        <ClassroomCard />
        <ClassroomCard />
        </div>
      </div>
    
    
      </Layout>
  )
}
