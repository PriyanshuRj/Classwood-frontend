import React, {useState, useEffect} from 'react'
import {TfiBlackboard} from 'react-icons/tfi';
import { BiDotsVerticalRounded } from "react-icons/bi";
import axios from 'axios'
import { setClassStudents } from "../../../store/genralUser";
import { useDispatch, useSelector } from 'react-redux';
import { API_URL } from '../../../helpers/URL';
export default function ClassroomCard({classData, setOpenSidebar, index, setSelectedClass, setSubjects, subjects}) {
  const [students, setStudents] = useState([]);
  const dispatch = useDispatch();
  async function getStudents (){
    const token = localStorage.getItem("token");
    
    let res = await axios.get(API_URL + "staff/student/",{
      
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        classroom: classData.id,
      },
    
  })
  
  setStudents(res.data)
  }
  async function fetchSubjects() {
    const token = localStorage.getItem("token");
    const classroomSubjects = await axios.get(API_URL + "staff/subject/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        classroom: classData.id,
      },
    });
    setSubjects(classroomSubjects.data);
  }
  useEffect(()=>{

    getStudents()
    fetchSubjects()
  },[classData])
  return (
    <div className='flex flex-col p-4 bg-white rounded-xl' onClick={()=> {
      localStorage.setItem("classId", classData.id)
      localStorage.setItem("className",classData.class_name + " " + classData.section_name)
      dispatch(setClassStudents(students))
      setSelectedClass(index)
      setOpenSidebar(index)}}>
        <div className='flex flex-row items-center justify-between'>
            <span className='p-2 bg-indigo-200 rounded-lg'>
                <TfiBlackboard className='w-4 h-4 text-indigo-600' />
            </span>
            <BiDotsVerticalRounded className="w-6 h-6" />
        </div>
        <span className='mt-4 text-lg font-semibold' >{classData.class_name + " " + classData.section_name}</span>
        <div className='flex flex-row items-center justify-between mt-6 text-sm'>

        <span className='font-semibold text-gray-500'> TOTAL SUBJECT </span>
        <span className='font-semibold text-gray-500'>{subjects.length}</span>
        </div>
        <div className='flex flex-row items-center justify-between mt-1 text-sm'>

        <span className='font-semibold text-gray-500'> TEACHER ASSIGNED </span>
        <span className='font-semibold text-gray-500'>{subjects.length}</span>
        </div>

        <div className='flex flex-row items-center justify-between mt-5 text-sm'>

<span className='font-semibold text-gray-500'> STUDENTS </span>
<span className='font-semibold text-gray-500'>{students.length}</span>
</div>


    </div>
  )
}
