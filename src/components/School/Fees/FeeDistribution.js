import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import ClassDropDown from "../helpers/ClassDropDown";
import { API_URL } from "../../../helpers/URL";
import { IoMdAddCircleOutline } from "react-icons/io";
import { getAllSchoolData } from "../helpers/dataFetcher";
import { useNavigate } from "react-router-dom";
import { Rings } from "react-loader-spinner";
import {
  addFees,
  updateTitle,
  updateValue,
} from "../../../store/School/feesSlice";
import {setFeesStudents} from "../../../store/School/feesSlice";

import { setWarningToast } from "../../../store/genralUser";
export default function FeesDistribution({
  setPageState,
  feesValue,
  selectedClass,
  setSelectedClass,
  setFeesValue,
  submitFees
}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function addNewFeefiled() {
    dispatch(addFees());
  }
  const concessions = useSelector((state) => state.fees.concession);

  const session = useSelector((state) => state.user.session);
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
        classroom: selectedClass.id,
        session : localStorage.getItem("session")
      },
    });
    
    dispatch(setFeesStudents(res.data.map(student => ({...student, concession: concessions[0]}))));

    setLoading(false);
  }
  const classrooms = useSelector((state) => state.classroom.allClasses);
  const fees = useSelector((state) => state.fees.allFees);
  console.log(fees);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (classrooms.length === 0)
      getAllSchoolData(dispatch, navigate, setLoading,session);
  }, []);

  useEffect(() => {
    if (classrooms.length > 0) setSelectedClass(classrooms[0]);
  }, [classrooms]);

  function onNextClick() {
    if (feesValue.length === 0)
      dispatch(setWarningToast("Please Fill Tution Fees"));
    else setPageState(1);
  }

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
            {/* <div className="flex flex-row justify-between my-8 items-center">
              <div className="flex flex-row items-center justify-center">
                <span className="flex items-center justify-center w-6 h-6 text-gray-200 bg-gray-700 border-2 border-gray-700 rounded-full text-md">
                  1
                </span>
                <span className="ml-2 font-semibold text-gray-700 text-md">
                  {" "}
                  Fees Structure
                </span>
              </div>
              <div className="flex-1 border h-0 mx-4"></div>
              <div className="flex flex-row items-center justify-center">
                <span className="flex items-center justify-center w-6 h-6 text-gray-500 bg-white border-2 border-gray-500 rounded-full text-md">
                  2
                </span>
                <span className="ml-2 font-semibold text-gray-500 text-md">
                  {" "}
                  Fee Concession
                </span>
              </div>
              <div className="flex-1 border h-0 mx-4"></div>
              <div className="flex flex-row items-center justify-center">
                <span className="flex items-center justify-center w-6 h-6 text-gray-500 bg-white border-2 border-gray-500 rounded-full text-md">
                  3
                </span>
                <span className="ml-2 font-semibold text-gray-500 text-md">
                  {" "}
                  Student List
                </span>
              </div>
            </div> */}
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
            <div className="mx-4 px-4 flex flex-col  mt-4">
              <label className="font-semibold mt-2">Tution Fees*</label>
              <input
                type="text"
                placeholder="Tution Fees"
                value={feesValue}
                onChange={(e) => setFeesValue(e.target.value)}
                className="flex px-3 py-2 font-medium border-2 border-slate-200  rounded-lg md:px-4 md:py-3 placeholder:font-normal"
              />
            </div>
            {fees.length > 0 &&
              fees.map((filed, index) => {
                return (
                  <div
                    key={index}
                    className="flex justify-between mx-4 px-4 mt-4"
                  >
                    <div className="flex flex-col w-[40%]">
                      <label className="font-semibold mt-2">Fees Title</label>

                      <input
                        type="text"
                        placeholder="Fees Title"
                        value={filed.title}
                        onChange={(e) =>
                          dispatch(
                            updateTitle({ index: index, value: e.target.value })
                          )
                        }
                        className="flex px-3 py-2 font-medium border-2 border-slate-200  rounded-lg md:px-4 md:py-3 placeholder:font-normal"
                      />
                    </div>

                    <div className="flex flex-col w-[40%]">
                      <label className="font-semibold mt-2">Fees Value</label>

                      <input
                        type="text"
                        placeholder=" Fees Value"
                        value={filed.value}
                        onChange={(e) =>
                          dispatch(
                            updateValue({ index: index, value: e.target.value })
                          )
                        }
                        className="flex px-3 py-2 font-medium border-2 border-slate-200  rounded-lg md:px-4 md:py-3 placeholder:font-normal"
                      />
                    </div>
                  </div>
                );
              })}
              <div className="flex ">

            <button
              className="ml-8 mt-8 flex items-center px-4 py-2 font-medium text-indigo-700 duration-300 ease-in-out rounded-md hover:bg-indigo-100 hover:text-indigo-800"
              onClick={() => {
                addNewFeefiled();
              }}
            >
              <IoMdAddCircleOutline className="mr-2" />
              Add Section
            </button>
              </div>
          </div>
          <div
            onClick={() => submitFees()}
            className="mb-8 text-center flex cursor-pointer items-center justify-center px-4 py-2 mx-8 mt-8 font-medium text-white bg-indigo-600 rounded-md"
          >
            Add Fees
            {/* Next Page */}
          </div>
        </div>
      )}
    </>
  );
}
