import React, {useState, useEffect} from 'react'
import AttendanceCard from './AttendanceCard';
import AttendenceRow from './AttendenceRow';
import Layout from "../Layout";
import { useNavigate } from 'react-router-dom';
import { Rings } from 'react-loader-spinner';
import { AiOutlineSearch } from 'react-icons/ai';
import { FiFilter } from 'react-icons/fi';
import AttendenceCardSection from '../../Common/AttendenceCardSection';
import AttendenceRowSection from '../../Common/AttendenceRowSection';
import { getAllSchoolData } from '../helpers/dataFetcher';
import { useSelector, useDispatch} from 'react-redux';
import GridButton from '../../../assets/icons/GridButton';
import ListButton from '../../../assets/icons/ListButton';
const classes = ["12", "11", "10", "9", "8", "7", "6","5", "4", "3", "2", "1", "Others"]
const tabs = [
  "All Classes",
  "Senior Secondary",
  "Secondary",
  "Primary",
  "Middle",
  "Pre Primary",
];
const sections = ["12", "11", "10", "9","8", "7", "6","5","4","3","2","1","LKG", "UKG","Nursery", "Pre Nursery"]


export default function Attendance() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [tabState, setTabState] = useState(0);

  const [viewState, setViewState] = useState("grid");

  const [searchQuery, setSearchQueary] = useState("");
  const classrooms = useSelector((state) => state.classroom.allClasses);

  useEffect(() => {
    if (!classrooms || classrooms.length === 0)
      getAllSchoolData(dispatch, navigate,setLoading);
  }, []);

  function filterTabs(classData) {
    if(tabState===0) return true;
    else if(tabState===1) {
      if(classData.class_name==="12" || classData.class_name==="11") return true;
    }
    else if(tabState===2) {
      if(classData.class_name==="10" || classData.class_name==="9") return true;
    }
    else if(tabState===3) {
      if(classData.class_name>="6" && classData.class_name<="8") return true;
    }
    else if(tabState===4) {
      if(classData.class_name>="6" && classData.class_name<="8") return true;
    }
    else if(tabState===4) {
      if(classData.class_name>="5" && classData.class_name<="1") return true;
    }
  }

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
         
        </div>
        <div className="mt-6 flex-row hidden w-full mb-4 border-b-2 md:flex">
          {tabs.map((tab, index) => {
            return (
              <span
                key={index}
                className={`mx-4 cursor-pointer font-semibold  ${
                  tabState === index
                    ? "text-indigo-600 border-b-2 border-indigo-600"
                    : "text-gray-400"
                }`}
                onClick={() => setTabState(index)}
              >
                {tab}
              </span>
            );
          })}
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
                className="border py-2 pl-10 text-sm text-gray-900 bg-white rounded-md focus:outline-none w-[280px] sm:w-[320px]"
                placeholder="Search a class"
                autoComplete="off"
              />
            </div>
            {/* <button className="flex items-center px-2 py-1 font-medium text-gray-800 bg-gray-200 rounded-md sm:px-4">
              <FiFilter className="sm:mr-2" />
              <span className="hidden sm:flex">Fliter</span>
            </button> */}
          </div>
          <div className="flex flex-row p-1 rounded-md bg-slate-100 ">
            <span
              className={`px-2 pl-4 py-2 flex items-center ${
                viewState === "grid" ? "bg-white pr-4 font-semibold cursor-pointer" : "cursor-pointer"
              } rounded-md`}
              onClick={() => setViewState("grid")}
            >
                <div  className="mr-2">

<GridButton />
</div>
              Grid
            </span>
            <span
              className={`px-2 pr-4 py-2 flex items-center ${
                viewState === "list" ? "bg-white pl-4 font-semibold" : "cursor-pointer"
              } rounded-md`}
              onClick={() => setViewState("list")}
            >
                <div className="mr-2" >

<ListButton />
</div>
              List
            </span>
          </div>
        </div>

{viewState==="grid" ?  (
  <div>
{sections.map((classCumilativeName, index) => {
              return (
                <AttendenceCardSection
                  key={index}
                  classCumilativeName={classCumilativeName}
                  sectionData={classrooms.filter(filterTabs).filter(fliterClassroom)}
                  index={index}
                  
                />
              );
            })}
</div>
  ) : (<>
 {sections.map((classCumilativeName, index) => {
              return (
                <AttendenceRowSection
                  key={index}
                  classCumilativeName={classCumilativeName}
                  sectionData={classrooms.filter(filterTabs).filter(fliterClassroom)}
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
