import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { API_URL } from "../../helpers/URL";
import { useSelector, useDispatch } from "react-redux";
import { setNotice } from "../../store/genralUser";
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
export default function NoticePannel() {
  const dispatch = useDispatch();
  const notices = useSelector((state) => state.user.notices);
  async function fetchNotice() {
    const token = localStorage.getItem("token");

    let res = await axios.get(API_URL + "list/notice/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("these are notices : ", res.data)
    dispatch(setNotice(res.data));
  }
  useEffect(() => {
    fetchNotice();
  }, []);
  return (
    <div>
      <div className="md:rounded-[30px] bg-white text-black p-4 md:p-6 w-full  py-10 h-max">
        {notices.map((notice, index) => {
          const noticeDate = new Date(notice.date_posted);
          console.log("notices : ");
          return (
            <Link to={localStorage.getItem("UserType") ==="Staff" ? "/staff/notice/" + index : "/student/notice"}>
              <div className="flex justify-start p-4 ">
                <span
                  className="text-sm text-right bg-[#61C26B] rounded-full self-start w-16 h-16 mr-4 flex justify-center items-center text-white"
                  style={{ width: "85px" }}
                >
                  {noticeDate.getDate()}
                  <br /> {monthNames[noticeDate.getMonth()]}
                </span>
                <div className="flex flex-col">
                  <span className="font-sans font-medium uppercase text-md sm:text-xl text-[#020410]">
                    {notice.title}
                  </span>
                  <p className="py-4 text-xs  sm:text-sm text-[#8A8A8A]">
                    {notice.description}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}

        <a href="/">
          <div className="mt-4 rounded-[20px] bg-gray-200 bg-opacity-25 p-4 hover:bg-opacity-75 duration-300 ease-in-out">
            <span className="font-sans font-medium uppercase">See All</span>
          </div>
        </a>
      </div>
    </div>
  );
}
