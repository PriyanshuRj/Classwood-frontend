import React, {useState} from 'react'
import { useSelector } from 'react-redux';
import axios from 'axios';
import { API_URL } from '../../helpers/URL';
import TeacherDropdown from './helpers/TeacherDropDown'
export default function AddSubject({setOpen, classroom}) {
    const [subjectName, setSubjectName] = useState("");
    console.log("classroom : ", classroom)
    const staff = useSelector((state) => state.staff.allStaff);
    const [subjectTeacher, setSubjectTeacher] = useState(staff[0]);
    const addNewSubject = ()=>{
        setOpen(false);
    const token = localStorage.getItem("token");

        let resp = axios.post(API_URL + "staff/subject/",{
            name: subjectName,
            // subject_pic: null,
            school : staff[0].school,
            teacher : subjectTeacher.user.id,
            classroom : classroom.id
          },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              }
            }
          )
          console.log("res : ", resp)            
        
    }
  return (
    <div className='fixed left-0 right-0 flex items-center justify-center w-full h-full bg-gray-400 z-[100] bg-opacity-40'>
<div  className="z-50 p-4 md:inset-0 ">
    <div className="relative w-full h-full max-w-2xl md:h-auto">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Add New Subject
                </h3>
                <button onClick={()=> setOpen(false)} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">
                    <svg  className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    <span className="sr-only">Close modal</span>
                </button>
            </div>
            <div className="p-6 space-y-6">
                
            <div  className="flex flex-col mt-10">
            <div className="flex flex-row w-full">
              <div className="flex flex-col w-full px-8">
                <label className="mb-4 text-lg font-semibold text-gray-800">
                  Subject*
                </label>
                <input
                  value={subjectName}
                  type="text"
                  onChange={(e) => setSubjectName(e.target.value)}
                  placeholder="Subject"
                  className="flex px-3 py-4 font-medium border-2 border-gray-400 border-[1px] rounded-lg placeholder:font-normal w-full"
                />
              </div>
              <div className="flex flex-col w-full px-8">
                <label className="mb-4 text-lg font-semibold text-gray-800">
                  Teacher*
                </label>
                <TeacherDropdown
                //   id={index + 1}
                  inputList={staff}
                  labelTitle=""
                  DivWidth="full"
                  selected={subjectTeacher}
                  setSelected={setSubjectTeacher}
                />
              </div>
            </div>
          </div>
            </div>
            <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button onClick={()=> addNewSubject()} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Upload</button>
            </div>
        </div>
    </div>
</div>

    </div>
  )
}
