import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { API_URL } from "../../helpers/URL";
import { useSelector, useDispatch } from "react-redux";
import { setEvents } from "../../store/genralUser";
import {GrNext} from "react-icons/gr";
import {IoMdAddCircleOutline} from 'react-icons/io';
const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apl",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];
export default function EventPannel({setOpenAddEventModal}) {
  const dispatch = useDispatch();
  const events = useSelector((state) => state.user.events);
  async function fetchNotice() {
    const token = localStorage.getItem("token");

    let res = await axios.get(API_URL + "list/event/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch(setEvents(res.data));
  }
  useEffect(() => {
    fetchNotice();
  }, []);
  return (
    <div className="mt-10 md:shadow-lg md:rounded-xl p-4">
      <div className="pb-2 flex justify-between items-center border-b mx-2">

<h1 className=" text-2xl font-semibold text-left">
  Event board
</h1>
<span
onClick={()=> setOpenAddEventModal(true)}
className={`flex flex-row text-indigo-600 items-center font-semibold cursor-pointer ${localStorage.getItem("UserType") ==="School" ? undefined : ' hidden '}`}> <IoMdAddCircleOutline className="mr-2 w-6 h-6" /> Add New </span>
</div>
      <div className=" bg-white text-black pt-4 md:pt-6 w-full h-max">
        {events.map((notice, index) => {
          const noticeDate = new Date(notice.date);
          return (
            <Link key={index} to={localStorage.getItem("UserType") ==="Staff" ? "/staff/event/" + index : localStorage.getItem("UserType") ==="School" ? "/school/event/" + index :  "/student/event/" + index}>
              <div className="flex justify-start pt-4 ">
              <div
                    className="text-sm text-[#76A5FF] bg-[#F0F7FD] rounded-md self-start  px-4 py-2 mr-6 flex justify-center items-center flex-col font-semibold">
                    <span>{noticeDate.getDate()}
                      </span>
                      <span>{monthNames[noticeDate.getMonth()]}
                      </span>
                  </div>
              
                <div className="flex flex-col">
                  <span className="font-sans font-medium uppercase text-md sm:text-xl text-[#020410]">
                    {notice.title}
                  </span>
                  <p className="pt-4 text-xs  sm:text-sm text-[#8A8A8A]">
                    {notice.description}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}

<a href="/">
                <div className="mt-4  border-t bg-opacity-25 pt-4 flex justify-between items-center">
                  <span className="font-sans font-medium uppercase">
                    View More
                  </span>
                  <GrNext />
                </div>
              </a>
      </div>
    </div>
  );
}
