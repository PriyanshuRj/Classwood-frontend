import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { Rings } from "react-loader-spinner";
import { API_URL } from "../../../helpers/URL";
import TimeDropDown from "./TimeDropDown";
import { minuteList, hourList } from "../../../helpers/inputLists";
import { setSuccessToast, setWarningToast } from "../../../store/genralUser"
import SubjectDropDown from "../helpers/SubjectDropDown";
export default function EditSingleModal({ setOpen, selectedClass, period }) {
  
  const dispatch = useDispatch();
  const [subjectImage, setSubjectImage] = useState(null);
  const [setectedSubject, setSelectedSubject] = useState({name: "No Subject Selected"});
  const [classSubjects, setClassSubjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [startTime, setStartTime] = useState({
    hour : "0",
    minute : "0"
  });
  const [endTime, setEndTime] = useState({
    hour : "0",
    minute : "0"
  });
  useEffect(()=>{
    if(period){
        const start = period.start_time.split(":");
        const end = period.end_time.split(":");
        setStartTime({hour:start[0], minute : start[1]});
        setEndTime({hour:end[0], minute : end[1]});

    }
  },[])
  function setTime(value,type,HorM){
 
    if(type=="end"){

        if(HorM==="hour")
        setEndTime({hour : value, minute : endTime.minute});
        else setEndTime({hour : endTime.hour, minute : value});
    }
    else {
     
        if(HorM==="hour")
        setStartTime({hour : value, minute : startTime.minute});
        else setStartTime({hour : startTime.hour, minute : value});
    }
  }
  const updateTimeTable = async () => {
    setOpen(false);
    
    const token = localStorage.getItem("token");
    try {
      if(period){
        const res = await axios.patch(API_URL + "staff/timeTable/" + period.id,{
            start_time : startTime,
            end_time : endTime,
            subject : setectedSubject.id
        },{
            headers: {
                Authorization: `Bearer ${token}`,
              },
              params: {
                session : localStorage.getItem("session")
              },
        });
        console.log("Res", res);
      }
      else{

      }
    } catch (e) {
      console.warn("Error  ::::::::", e.msg);
    }
  };
  
  
  useEffect(() => {
    fetchSubjects();
  }, []);

  async function fetchSubjects() {
    setLoading(true);
    const token = localStorage.getItem("token");
    const classroomSubjects = await axios.get(API_URL + "staff/subject/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        classroom: selectedClass.id,
        session : localStorage.getItem("session")
      },
    });
    setClassSubjects(classroomSubjects.data);
    setLoading(false);
  }
  return (

    <div className="fixed left-0 right-0 top-0 flex items-center justify-center w-full h-full bg-gray-400 z-[100] bg-opacity-40">
      <div className="z-50 p-4 md:inset-0 ">
        <div className="relative w-full h-full max-w-2xl md:h-auto">
          <div className="relative bg-white rounded-lg shadow ">
            <div className="flex items-start justify-between p-4 border-b rounded-t ">
              <h3 className="text-xl font-semibold text-gray-900 ">
                Edit TimeTable
              </h3>
              <button
                onClick={() => setOpen(false)}
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center  "
                data-modal-hide="defaultModal"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            {loading ? <div>
                <Rings
            height="220"
            width="220"
            // radius="9"
            color="rgb(30 64 175)"
            ariaLabel="loading"
          />{" "}
            </div> : 
            <>
          
            <div className="p-6 space-y-6">
              <div className="flex flex-col mt-10">
                <div className="flex flex-col w-full">
                  
                  <div className="mb-5 flex flex-col w-full px-8">
                    
                    <SubjectDropDown
          //   id={index + 1}
                        inputList={classSubjects}
                        labelTitle="Subjects*"
                        DivWidth="full"
                        selected={setectedSubject}
                        setSelected={setSelectedSubject}
                        />
                  </div >
                  <div className="mx-8">
                  <div className="flex flex-row gap-4 px-4">
    <TimeDropDown
              //   id={index}
              inputList={hourList}
              labelTitle=""
              DivWidth="full"
              selected={startTime.hour}
              setSelected={setTime}
              type="start"
              HorM={"hour"}
            />
            <TimeDropDown
              //   id={index}
              inputList={minuteList}
              labelTitle=""
              DivWidth="full"
              type="start"
              selected={startTime.minute}
              setSelected={setTime}
              HorM={"minute"}

            />
    </div>
    <div className="flex flex-row gap-4 px-4">
    <TimeDropDown
              //   id={index}
              inputList={hourList}
              labelTitle=""
              DivWidth="full"
              selected={endTime.hour}
              setSelected={setTime}
              type="end"
              HorM={"hour"}
            />
            <TimeDropDown
              //   id={index}
              inputList={minuteList}
              labelTitle=""
              DivWidth="full"
              type="end"
              selected={endTime.minute}
              setSelected={setTime}
              HorM={"minute"}

            />
    </div>
                 
                
                  </div>
                </div>
             
              </div>
            </div>
            <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b ">
              <button
                onClick={() => updateTimeTable()}
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center   "
              >
                Update
              </button>
            </div>
            </>}
          </div>
        </div>
      </div>
    </div>
   
  );
}
