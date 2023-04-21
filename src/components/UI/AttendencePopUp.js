import React, {Fragment} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../../helpers/URL';
import { Menu, Transition } from "@headlessui/react";
import { useDispatch } from 'react-redux';
import VirticalDotsIcon from "../../assets/icons/VerticalDots";
import { setWarningToast } from '../../store/genralUser';
function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

export default function AttendencePopup({day,year,month,j,type, user}) {
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
            console.log(user)
            const token = localStorage.getItem("token");
            const res = await axios.post(API_URL + (type == "student" ?  "staff/studentAttendence/" : "list/staffAttendance/"),{
                present : false,
                student : user,
                staff : user,
                date: year + "-" + month + "-" + day,
                session : localStorage.getItem("session")
            }, {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              })
            console.log(res);
        }
        catch(e){
            dispatch(setWarningToast("Error in marking Attendence"));
        }
        console.log(day,year,month)
    }
    async function markPresent(){
        console.log(day)
    }
  return (
    <Menu as="div" className="relative inline-block text-left">
    <div>
      <Menu.Button className="inline-flex justify-center w-full text-sm font-semibold text-gray-900 ">
      <div onClick={()=> {
                    // setDate(new Date(year, month, day))
                    // selectDate(day)
                }
                    } className={`w-14 h-14 rounded-full flex justify-center items-center text-center ${day ? 'bg-[#EEF2FF] border border-[#818CF8] text-gray-700' : undefined} ${day === null ? 'opacity-0' : ''}`} key={j}>
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
