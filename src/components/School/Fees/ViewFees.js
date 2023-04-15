import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { API_URL } from '../../../helpers/URL';
import {AiOutlineSearch} from "react-icons/ai";
import {FiFilter} from "react-icons/fi";
import ListButton from '../../../assets/icons/ListButton';
import GridButton from '../../../assets/icons/GridButton';
import { Rings } from 'react-loader-spinner';
import FeesCardSection from '../../Common/FeesCardSection';
import FeesRowSection from '../../Common/FeesRowSection';
const sections = ["12", "11", "10", "9","8", "7", "6","5","4","3","2","1","LKG", "UKG","Nursery", "Pre Nursery"]
export default function ViewFees({setPageState, setSelectedTest}) {
    function filterTest(testData) {
        return (testData.className + " " +  testData.amount + testData.fee_type)
          .toLowerCase()
          .includes(searchQuery.toLowerCase());
      }
  const [searchQuery, setSearchQuery] = useState("");
    
    const [pastExams, setPastExams] = useState([]);
    const [viewState, setViewState] = useState("grid");
      const [loading, setLoading] = useState(false);
    async function getPastExams() {
      setLoading(true);
        const token = localStorage.getItem("token");

        let res = await axios.get(API_URL + "list/fees/", {
          headers: {
            Authorization: `Bearer ${token}`,
            
          },
          params : {
            session : localStorage.getItem("session")
          }
        });
        setPastExams(res.data);
        setLoading(false);
    };
    useEffect(()=>{
        getPastExams();
        console.log(pastExams)
    },[])
  return (
    <>
    {loading ? (
        <div className="flex items-center justify-center w-full h-screen">
          <Rings
            height="220"
            width="220"
            // radius="9"
            color="rgb(30 64 175)"
            ariaLabel="loading"
          />{" "}
        </div>
      ) : (
    <div className="px-4 md:px-10">
            <div className="flex flex-col justify-between my-4 md:flex-row">
              <p className="my-4 mt-2 text-2xl font-semibold">All Past Exams</p>
            </div>
            <div className=" mb-8 flex flex-row items-center justify-between w-full">
              <div className="flex flex-row">
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
              <div className="flex flex-row p-1 rounded-md bg-slate-100 ">
                <span
                  className={`px-2 pl-4 py-2 flex items-center justify-center ${
                    viewState === "grid"
                      ? "bg-white pr-4 font-semibold cursor-pointer"
                      : "cursor-pointer"
                  } rounded-md`}
                  onClick={() => setViewState("grid")}
                >
                  <div className="mr-2">
                    <GridButton />
                  </div>
                  Grid
                </span>
                <span
                  className={`px-2 pr-4 py-2 flex items-center ${
                    viewState === "list"
                      ? "bg-white pl-4 font-semibold"
                      : "cursor-pointer"
                  } rounded-md`}
                  onClick={() => setViewState("list")}
                >
                   <div className="mr-2">
                    <ListButton />
                  </div>
                  List
                </span>
              </div>
            </div>
            {pastExams.filter(filterTest).length == 0 ? (
              <div className="flex items-center justify-center w-full h-96">
                <span>No Test Found </span>
              </div>
            ) : viewState === "grid" ? (
  
              <div>
            {sections.map((classCumilativeName, index) => {
              return (
                <FeesCardSection
                  key={index}
                  classCumilativeName={classCumilativeName}
                  sectionData={pastExams.filter(filterTest)}
                  index={index}
                  setPageState={setPageState}
                  setSelectedTest={setSelectedTest}
                />
              );
            })}
          </div>
            ) : (
              <div>
      
          {sections.map((classCumilativeName, index) => {
              return (
                <FeesRowSection
                key={index}
                classCumilativeName={classCumilativeName}
                sectionData={pastExams.filter(filterTest)}
                index={index}
                setPageState={setPageState}
                setSelectedTest={setSelectedTest}
                />
              );
            })}
        
        </div>
            )}
          </div> )}</>
  )
}
