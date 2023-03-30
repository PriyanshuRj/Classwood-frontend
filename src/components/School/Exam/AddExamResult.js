import React, { useState, useEffect } from "react";
import { CgAdd } from "react-icons/cg";
import ClassDropDown from "../helpers/ClassDropDown";
import SubjectDropDown from "../helpers/SubjectDropDown";
import axios from "axios";
import { API_URL } from "../../../helpers/URL";
import SingleEntry from "./SingleEntry";
import { useDispatch, useSelector } from 'react-redux';
import { Rings } from "react-loader-spinner";
import {setSuccessToast, setTestStudent, setWarningToast} from "../../../store/genralUser";

export default function AddExamResult() {
  const dispatch = useDispatch();
  const classStudents  = useSelector((state) => state.user.testStudents);
  const classrooms = useSelector((state) => state.classroom.allClasses);
  const [selectedClass, setSelectedClass] = useState(classrooms[0]);
  const [CSVFile, setCSVFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [examName, setExamName] = useState("");
  const [examDate, setExamDate] = useState("");
  const [maxMarks, setMaxMarks] = useState("");
  const [classSubjects, setClassSubjects] = useState([]);
  const [showStudents, setShowStudents] = useState(false);
  const [setectedSubject, setSelectedSubject] = useState({
    name: "No Subject Selected",
  });

  async function fetchSubjects() {
    setLoading(true);
    const token = localStorage.getItem("token");
    const classroomSubjects = await axios.get(API_URL + "staff/subject/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        classroom: selectedClass.id,
      },
    });
    setClassSubjects(classroomSubjects.data);
    setSelectedSubject({ name: "No Subject Selected" });
    setShowStudents(false);
    setLoading(false);
  }

  async function getStudents() {
    setLoading(true);
    const token = localStorage.getItem("token");
    let res = await axios.get(API_URL + "staff/student/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        classroom: selectedClass.id,
      },
    });
    dispatch(setTestStudent(res.data.map(student => ({...student, marks: "", totalMarks : "", percentage :"", marksheet : null}))));
    setLoading(false);
  }
  function onAddStudentClick() {
    setShowStudents(true);
    getStudents();
  }
  async function addResults(exam){
    if(showStudents){
      console.log(classStudents);
      const token = localStorage.getItem("token");
      
      
      classStudents.map(async (student,index)=>{
        const formData = new FormData();
        formData.append("student",student.user.id);
        formData.append("score", parseInt(student.marks));
        formData.append("exam",exam.id);
        // formData.append("marksheet", student.marksheet);
        const res = await axios.post(API_URL + "staff/result/",formData,
        {headers: {
          Authorization: `Bearer ${token}`,
        }})
        console.log(res);
      }
      )
    }
    else {
      const token = localStorage.getItem("token");

      const formData = new FormData();
      formData.append("csv_file",CSVFile);
      formData.append("exam",exam.id);
      // formData.append("classroom",selectedClass.id);
      // formData.append("subject",setectedSubject.id);
      const res = await axios.post(API_URL + "staff/result/",formData,
      {headers: {
        Authorization: `Bearer ${token}`,
      }});
      console.log(res);
      if(res.status===200) dispatch(setWarningToast("Error in Adding Results"));
      if(res.status===201) dispatch(setSuccessToast("Successfully added results"));
    }
  } 
  const addExam = async  ()=>{
    const token = localStorage.getItem('token');
    try{
      if(examDate === "" || maxMarks=== ""  || setectedSubject.name === "No Subject Selected"){
        dispatch(setWarningToast("Please fill complete Details"));
      }
      const res = await axios.post(API_URL + "staff/exam/",{
        max_marks : parseInt(maxMarks),
        date_of_exam : examDate,
        classroom : selectedClass.id,
        subject : setectedSubject.id,
        tag : examName
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if(res.status==200) dispatch(setWarningToast("Error in Adding Exam"));
      if(res.status==201){
        addResults(res.data.data);
      }
      console.log(res);
    } catch( e ){
      console.log(e);
    }
  }
  useEffect(() => {
    fetchSubjects();
  }, [selectedClass]);

  return (
    <>
    
    {loading ? 
    <div className="flex items-center justify-center w-full h-screen">

    <Rings
            height="220"
            width="220"
            // radius="9"
            color="rgb(30 64 175)"
            
            ariaLabel="loading"
          /> </div>
    : <div className="flex flex-col w-full mt-8">
      
      <p className="pl-8 mb-8 text-2xl font-medium">Add Results For a Exam</p>

      <div className="flex flex-row px-4">
        <div className="w-full mx-4">


        <ClassDropDown
          //   id={index + 1}
          inputList={classrooms}
          labelTitle=""
          DivWidth="full"
          selected={selectedClass}
          setSelected={setSelectedClass}
          />
          </div>
          <div className="w-full mx-4">

        <SubjectDropDown
          //   id={index + 1}
          inputList={classSubjects}
          labelTitle=""
          DivWidth="full"
          selected={setectedSubject}
          setSelected={setSelectedSubject}
          />
          </div>
      </div>
      <div className="flex flex-col md:px-8 ">
      <div className="flex flex-col  mt-4 ">
          <label className="mt-2 font-semibold">Exam Name*</label>
          <input
            type="text"
            placeholder="Exame Name"
            value={examName}
            onChange={(e) => setExamName(e.target.value)}
            className="flex px-3 py-2 font-medium border-2 rounded-lg border-slate-200 md:px-4 md:py-3 placeholder:font-normal"
          />
        </div>
        <div className="flex flex-col  mt-4">
          <label className="mt-2 font-semibold">Exame Date*</label>
          <input
            type="date"
            // value={email}
            onChange={(e) => setExamDate(e.target.value)}
            className="flex px-3 py-2 font-medium border-2 rounded-lg border-slate-200 md:px-4 md:py-3 placeholder:font-normal"
          />
        </div>
        <div className="flex flex-col  mt-4 ">
          <label className="mt-2 font-semibold">Total Marks*</label>
          <input
            type="number"
            placeholder="Total Marks"
            value={maxMarks}
            onChange={(e) => setMaxMarks(e.target.value)}
            className="flex px-3 py-2 font-medium border-2 rounded-lg border-slate-200 md:px-4 md:py-3 placeholder:font-normal"
          />
        </div>
      </div>
      
      {showStudents?
      <div className="px-8 mt-16">
        
      <div className="grid grid-cols-5 gap-4 mb-2">
        <span className="flex items-center justify-start px-2 font-semibold text-gray-800">
          Roll Number
        </span>
        <span className="flex items-center justify-start px-2 font-semibold text-gray-800">
          Student Name
        </span>
        {/* <span className="flex items-center justify-start px-2 font-semibold text-gray-800">
          Total Marks
        </span> */}
        <span className="flex items-center justify-start px-2 font-semibold text-gray-800">
          Obtained Marks
        </span>
        <span className="flex items-center justify-start px-2 font-semibold text-gray-800">
          Percentage{" "}
        </span>
        <span className="flex items-center justify-start px-2 font-semibold text-gray-800">
          Upload Marksheet
        </span>
      </div>
      {classStudents.map((student,index)=>{
      
      return <SingleEntry totalMarks={maxMarks} student={student} key={index} index={index} />
      })}
    </div>
      :
      <div className="flex items-center justify-center mx-8 my-16">
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50   hover:bg-gray-100   "
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              aria-hidden="true"
              className="w-10 h-10 mb-3 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              ></path>
            </svg>
            <p className="mb-2 text-sm text-gray-500 ">
              <span className="text-xl font-semibold">Result CSV</span>
            </p>

            <p className="mb-2 text-sm text-gray-500 ">
              <span className="font-semibold">Click to upload</span>
            </p>
            <p className="text-xs text-gray-500 ">
              Only CSV format allowed
            </p>
          </div>
          <input
            id="dropzone-file"
            type="file"
            className="hidden"
            onChange={(e) => setCSVFile(e.target.files[0])}
          />
        </label>
      </div> 
      }
      {
showStudents ? 
<span onClick={()=>{
  setShowStudents(false);
        }} className="flex flex-row items-center px-4 py-2 mt-2 ml-4 text-indigo-700 duration-200 ease-in-out rounded cursor-pointer select-none hover:bg-gray-200 hover:text-indigo-500 w-max">
          {" "}
          <CgAdd className="mr-2" /> Use CSV
        </span> : 
      <span onClick={()=>{
onAddStudentClick();
      }} className="flex flex-row items-center px-4 py-2 mt-2 ml-4 text-indigo-700 duration-200 ease-in-out rounded cursor-pointer select-none hover:bg-gray-200 hover:text-indigo-500 w-max">
        {" "}
        <CgAdd className="mr-2 " /> Add Individual Marks
      </span>
      }
      <button
        onClick={() => addExam()}
        className="flex items-center justify-center py-4 mx-8 mt-4 text-white duration-300 bg-indigo-600 rounded-lg justify-self-end hover:bg-blue-700 hover:text-gray-200 easy-in-out"
      >
        Upload
      </button>
    </div>}
    </>
  );
}
