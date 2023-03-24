import React, {useState} from 'react'
import Layout from "../Layout";
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import ClassDropDown from "../helpers/ClassDropDown";
import SubjectDropDown from "../helpers/SubjectDropDown";
import { API_URL } from '../../../helpers/URL';
export default function Timetible() {
  const dispatch = useDispatch();
  const classStudents  = useSelector((state) => state.user.testStudents);
  const classrooms = useSelector((state) => state.classroom.allClasses);
  const [selectedClass, setSelectedClass] = useState(classrooms[0]);
  const [CSVFile, setCSVFile] = useState(null);

  const [classSubjects, setClassSubjects] = useState([]);
  const [showStudents, setShowStudents] = useState(false);
  const [setectedSubject, setSelectedSubject] = useState({
    name: "No Subject Selected",
  });
  async function fetchSubjects() {
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
  }
  return (
    <Layout>

<div className="px-4 md:px-10">
        <div className="flex flex-col justify-between my-4 md:flex-row">
          <p className="text-2xl font-semibold mt-8">TimeTable</p>
          
        </div>
        <div className="flex flex-row px-4">
        <div className="w-full mx-4">


        <ClassDropDown
          //   id={index + 1}
          inputList={classrooms}
          labelTitle="Class*"
          DivWidth="full"
          selected={selectedClass}
          setSelected={setSelectedClass}
          />
          </div>
          
      </div>
      <div className='flex mx-4 my-8 '>
        <span>
          {selectedClass.class_name + " "+ selectedClass.section_name}
        </span>
      </div>
        </div>
    </Layout>
  )
}
