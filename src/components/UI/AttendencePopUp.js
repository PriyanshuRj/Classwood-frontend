import React, {Fragment, useState} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../../helpers/URL';
import { Menu, Transition } from "@headlessui/react";
import { useDispatch } from 'react-redux';
import VirticalDotsIcon from "../../assets/icons/VerticalDots";
import { setSuccessToast, setWarningToast } from '../../store/genralUser';
function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

export default function AttendencePopup({day,year,month,j,type, user, todaysAttendence, classroom_id}) {
  // console.log(todaysAttendence)
  const [currentAttendenceState, setCurrentAttendenceState] = useState(0);
  const dispatch = useDispatch();
    const menuList = [
        {
          title: "Mark Present",
          function: markPresent,
        },
        {
          title: "Mark Absent",
          function: makrAbsent,
        },
       
      ];
    async function makrAbsent() {
        try{
            month +=1;
            if (month < 10) 
            month = '0' + month;
            if (day < 10) 
            day = '0' + day;
            const token = localStorage.getItem("token");
            console.log(user, localStorage.getItem("classId"), localStorage.getItem("session"))
            const res = await axios.post(API_URL + (type == "student" ?  "staff/studentAttendance/" : "list/staffAttendance/"),{
              date: year + "-" + month + "-" + day,
              present: "false",
              student: user,
              staff: user,
              classroom: classroom_id,
              session: localStorage.getItem("session")
            }, {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              })
              if(res.status==201){
                dispatch(setSuccessToast("Attendence Marked Successfully"));
                setCurrentAttendenceState(1);
              }
              if(res.status==200){
                dispatch(setWarningToast("Attendence Marked already"))
              }
            console.log(res);
        }
        catch(e){
            dispatch(setWarningToast("Error in marking Attendence"));
        }
    }
    async function markPresent(){
      try{
        month +=1;
        if (month < 10) 
        month = '0' + month;
        if (day < 10) 
        day = '0' + day;
        const token = localStorage.getItem("token");
        const res = await axios.post(API_URL + (type == "student" ?  "staff/studentAttendance/" : "list/staffAttendance/"),{
          date: year + "-" + month + "-" + day,
          present: "true",
          student: user,
          staff: user,

          classroom: classroom_id,
          session: localStorage.getItem("session")
        }, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          if(res.status==201){
            setCurrentAttendenceState(2)
            dispatch(setSuccessToast("Attendence Marked Successfully"));
          }
          if(res.status==200){
            dispatch(setWarningToast("Attendence Marked already"))
          }
        console.log(res);
    }
    catch(e){
        dispatch(setWarningToast("Error in marking Attendence"));
    }
    }
  return (
    <Menu as="div" className="relative inline-block text-left">
    <div>
      <Menu.Button className="inline-flex justify-center w-full text-sm font-semibold text-gray-900 ">
      <div className={`m-1 w-12 h-12 rounded-full flex justify-center items-center text-center ${todaysAttendence[0] && (todaysAttendence[0].present ==2 || currentAttendenceState==2) ? 'bg-[#c5e99d] border border-[#2ed32e] text-gray-700' :todaysAttendence[0] && (todaysAttendence[0].present ==1 ||  currentAttendenceState==1) ? 'bg-[#e99d9d] border border-[#d32e2e] text-gray-700' :  undefined} ${day === null ? 'opacity-0' : ''}`} key={j}>
                  {day}
                </div>
      </Menu.Button>
    </div>

    <Transition
      as={Fragment}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      <Menu.Items className="absolute -left-8 z-10 w-32 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div className="py-1">
            {menuList.map((listItem, index)=>{
                return (localStorage.getItem("UserType")==="Staff" && listItem.deleteType) ? undefined : <Menu.Item key={index}>
                {({ active }) => (
                  listItem.title!=="View Class Student" && listItem.title!=="View Attendence" ? <span
                    className={classNames(
                      active
                        ? "bg-gray-100 text-gray-900"
                        : "text-gray-700",
                        listItem.deleteType ? "text-red-400 border-t-[1px]" :"",
                      "block px-4 py-2 text-sm cursor-pointer"
                    )}
                    onClick={() => {
                        listItem.function()
                    }}
                  >
                    {listItem.title}
                  </span> : <Link
                  to={localStorage.getItem("UserType")==="School" ? "/school/students" : "/staff/students"}
                    className={classNames(
                      active
                        ? "bg-gray-100 text-gray-900"
                        : "text-gray-700",
                      "block px-4 py-2 text-sm cursor-pointer"
                    )}
                    onClick={() => {
                        listItem.function()
                    }}
                  >
                    {listItem.title}
                  </Link>
                )}
              </Menu.Item>
            })}
         

          
          
        </div>
      </Menu.Items>
    </Transition>
  </Menu>
  )
}
