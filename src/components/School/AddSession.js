import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

import { API_URL } from "../../helpers/URL";
import TeacherDropdown from "./helpers/TeacherDropDown";
import { setSuccessToast, setWarningToast } from "../../store/genralUser";
import Calendar from "../Common/Calander";
export default function AddSession({ setOpen }) {
  
  const dispatch = useDispatch();

  const [selectedDate, selectDate] = useState("");
  const [day, setDate] = useState("");

  const addNewSession = async () => {
    setOpen(false);
    console.log(day.getFullYear() + "-" + day.getMonth() + "-"  + day.getDate())
    try {
      if (selectedDate.length === 0)
        dispatch(setWarningToast("Please give the subject a Name"));
 
      else {
        const sessionRes = await axios.post(API_URL + "list/session/",{
            is_active : true,
            start_date : day.getFullYear() + "-" + day.getMonth() + "-"  + day.getDate()
            },{
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            });
        console.log("res : ", sessionRes);
        if (sessionRes.status === 201)
          dispatch(setSuccessToast("Session Added Successfully"));
          if(sessionRes.status===200) dispatch(setWarningToast("Maximum Number of session already exists"));
      }
    } catch (e) {
      console.warn("Error  ::::::::", e.msg);
    }
  };
  return (
    <div className="fixed left-0 right-0 bottom-0 flex items-center justify-center w-full h-full bg-gray-400 z-[100] bg-opacity-40">
      <div className="z-50 p-4 md:inset-0 ">
        <div className="relative w-full h-full max-w-2xl md:h-auto">
          <div className="relative bg-white rounded-lg shadow ">
            <div className="flex items-start justify-between p-4 border-b rounded-t ">
              <h3 className="text-xl font-semibold text-gray-900 ">
                Add New Session
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
            <div className="p-6 space-y-6">
              <div className="flex flex-col mt-10">
              <div className="flex flex-col w-full px-8 my-4 ">
          <label className="mb-4 text-xl font-semibold text-gray-800">
            Session Start Time
          </label>
         
        <Calendar seletctedDate={selectedDate} selectDate={selectDate} setDate={setDate} />
        </div>
               
              </div>
            </div>
            <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b ">
              <button
                onClick={() => addNewSession()}
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center   "
              >
                Upload
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
