import React, {useState, useEffect} from "react";
import { RxCross1 } from "react-icons/rx";
import { useSelector } from "react-redux";
import axios from "axios";
import { API_URL } from "../../../helpers/URL";
import SelectionDropdown from "../SelectionDropdown";
import ClassDropDown from "../../School/helpers/ClassDropDown";
import SubjectDropDown from "../../School/helpers/SubjectDropDown";
const inputList = [
    {
      id: 1,
      name: 'Wade Cooper',
      avatar:
        'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      id: 2,
      name: 'Arlene Mccoy',
      avatar:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      id: 3,
      name: 'Devon Webb',
      avatar:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80',
    },
    {
      id: 4,
      name: 'Tom Cook',
      avatar:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      id: 5,
      name: 'Tanya Fox',
      avatar:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      id: 6,
      name: 'Hellen Schmidt',
      avatar:
        'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      id: 7,
      name: 'Caroline Schultz',
      avatar:
        'https://images.unsplash.com/photo-1568409938619-12e139227838?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      id: 8,
      name: 'Mason Heaney',
      avatar:
        'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      id: 9,
      name: 'Claudie Smitham',
      avatar:
        'https://images.unsplash.com/photo-1584486520270-19eca1efcce5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      id: 10,
      name: 'Emil Schaefer',
      avatar:
        'https://images.unsplash.com/photo-1561505457-3bcad021f8ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  ]
export default function UploadSyllabusSidebar({setOpenUpload}) {
  const classrooms = useSelector((state) => state.classroom.allClasses);
  const [classSubjects, setClassSubjects] = useState([]);
  const [setectedSubject, setSelectedSubject] = useState({
    name: "No Subject Selected",
  });
  const [showStudents, setShowStudents] = useState(false);

  const [selectedClass, setSelectedClass] = useState(classrooms[0]);
  const [subjectImage, setSubjectImage] = useState(null);
  const [schoolClass, setClass] = useState(inputList[0])
  const [section, setSection] = useState(inputList[0])
  const [subject, setSubject] = useState(inputList[0]);
  useEffect(() => {
    fetchSubjects();
  }, [selectedClass]);
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
    <div className="fixed top-0 right-0 h-full pt-8 overflow-y-scroll bg-white w-[32rem] flex flex-col h-full">
      <div onClick={()=>setOpenUpload(false)} className="absolute p-2 bg-gray-200 rounded-full cursor-pointer top-8 left-8">
        <RxCross1 />
      </div>
      <div className="mt-10 text-lg font-semibold text-black">

      <span className="mt-16 ml-8 text-lg font-semibold text-black">Create New Syllabus</span>
      </div>
      <div className="flex flex-col mx-8 mt-8 ">
     <div className="mb-8">

        <ClassDropDown
          //   id={index + 1}
          inputList={classrooms}
          labelTitle="Class*"
          DivWidth="full"
          selected={selectedClass}
          setSelected={setSelectedClass}
          />
          </div>
       
        <SubjectDropDown
          //   id={index + 1}
          inputList={classSubjects}
          labelTitle="Subjects*"
          DivWidth="full"
          selected={setectedSubject}
          setSelected={setSelectedSubject}
        />
        <div className="flex items-center justify-center w-full mt-8">
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
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
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="text-xl font-semibold"> Subject Image</span>
              </p>

              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span>
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </div>
            <input id="dropzone-file" type="file" className="hidden" onChange={(e)=> setSubjectImage(e.target.files[0])} />
          </label>
        </div>
          <button className="self-end w-full py-2 mt-8 font-semibold text-white bg-indigo-500 rounded-md text-md ">Submit</button>
      </div>
    </div>
  );
}
