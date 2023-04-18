import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { API_URL } from "../../../helpers/URL";
import { getAllSchoolData } from "../helpers/dataFetcher";
import { useNavigate } from "react-router-dom";
import { Rings } from "react-loader-spinner";

import {setFeesStudents} from "../../../store/School/feesSlice";

import StudentSingleEntry from "./StudentSingleEntry";
export default function StudentConcession({ setPageState, feesValue, addFees, classroom }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const concessions = useSelector((state) => state.fees.concession);
  const feesStudents = useSelector((state) => state.fees.feesStudents);
  useEffect(() => {
    getStudents();
  }, []);
  async function getStudents() {
    setLoading(true);
    const token = localStorage.getItem("token");

    let res = await axios.get(API_URL + "staff/student/", {
      headers: {
        Authorization: `Bearer ${token}`,
        
      },
      params: {
        classroom: classroom.id,
        session : localStorage.getItem("session")
      },
    });
    
    dispatch(setFeesStudents(res.data.map(student => ({...student, concession: concessions[0]}))));

    setLoading(false);
  }
  const session = useSelector((state) => state.user.session);

  const classrooms = useSelector((state) => state.classroom.allClasses);
  const [loading, setLoading] = useState(false);
  const [students, setStudents] = useState([]);
  useEffect(() => {
    if (classrooms.length === 0)
      getAllSchoolData(dispatch, navigate, setLoading, session);
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex items-center justify-center w-full h-screen">
          <Rings
            height="220"
            width="220"
            // radius="9"
            color="rgb(30 64 175)"
            ariaLabel="loading"
          />{" "}
        </div>
      ) : classrooms.length === 0 ? (
        <div className="flex items-center justify-center w-full h-screen">
          <span>Please Create a classroom first</span>
        </div>
      ) : (
        <div className="px-4 md:px-10 flex flex-col justify-between w-full ">
          <div className="flex flex-col flex-1 ">
            <div className="flex flex-col justify-between my-4 md:flex-row">
              <p className="mt-8 text-2xl font-semibold">
                Create Fee Structure
              </p>
            </div>
            <div className="flex flex-row justify-between my-8  items-center">
              <div className="flex flex-row items-center justify-center">
                <span className="flex items-center justify-center w-6 h-6 text-gray-200 bg-indigo-700 border-2 border-indigo-700 rounded-full text-md">
                  1
                </span>
                <span className="ml-2 font-semibold text-indigo-700 text-md">
                  {" "}
                  Fee Structure
                </span>
              </div>
              <div className="flex-1 border h-0 mx-4 border-indigo-700"></div>

              <div className="flex flex-row items-center justify-center">
                <span className="flex items-center justify-center w-6 h-6 text-gray-200 bg-indigo-700 border-2 border-indigo-700 rounded-full text-md">
                  2
                </span>
                <span className="ml-2 font-semibold text-indigo-700 text-md">
                  {" "}
                  Fee Concession
                </span>
              </div>
              <div className="flex-1 border h-0 mx-4 border-indigo-700"></div>

              <div className="flex flex-row items-center justify-center">
                <span className="flex items-center justify-center w-6 h-6 text-white bg-gray-700 border-2 border-gray-700 rounded-full text-md">
                  3
                </span>
                <span className="ml-2 font-semibold text-gray-700 text-md">
                  {" "}
                  Student List
                </span>
              </div>
            </div>
            {feesStudents.length===0 ? <div className="flex h-96 w-full justify-center items-center"> <span>No Student In This Class</span>
              </div> : <div className="border-2 rounded-md">
              <div className="grid w-full grid-cols-5 p-2 text-md font-semibold text-gray-500 bg-slate-50 pl-6">
                <span className="text-center">Student Name</span>
                <span className="text-center">Roll No.</span>
                <span className="text-center">FEE AMOUNT</span>
                <span className="text-center">DISCOUNT</span>
                <span className="text-center">DISCOUNT %</span>
              </div>
              {feesStudents.map((student, index) => {
                return (
                  <StudentSingleEntry key={index} index={index} feesValue={feesValue} student={student} />
                );
              })}
            </div>}
          </div>
          <div
            onClick={() => addFees()}
            className="mb-8 text-center flex cursor-pointer items-center justify-center px-4 py-2 mx-8 mt-8 font-medium text-white bg-indigo-600 rounded-md"
          >
            Submit Fees
          </div>
        </div>
      )}
    </>
  );
}
