import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoMdAddCircleOutline } from "react-icons/io";
import {
  addConcession,
  updateConcessionTitle,
  updateConcessionValue,
} from "../../../store/School/feesSlice";
export default function FeesConcession({ setPageState }) {
  const dispatch = useDispatch();

  function addNewFeefiled() {
    dispatch(addConcession());
  }
  const fees = useSelector((state) => state.fees.concession);

  return (
    <>
      <div className="px-4 md:px-10 flex flex-col justify-between w-full ">
        <div className="flex flex-col flex-1 ">
          <div className="flex flex-col justify-between my-4 md:flex-row">
            <p className="mt-8 text-2xl font-semibold">Create Fee Structure</p>
          </div>
          <div className="flex flex-row justify-between my-8 items-center">
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
              <span className="flex items-center justify-center w-6 h-6 text-gray-200 bg-gray-700 border-2 border-gray-700 rounded-full text-md">
                2
              </span>
              <span className="ml-2 font-semibold text-gray-700 text-md">
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
          </div>

          {fees.slice(1).map((filed, index) => {
            return (
              <div key={index} className="flex justify-between mx-4 px-4 mt-4">
                <div className="flex flex-col w-[40%]">
                  <label className="font-semibold mt-2">Concession Title</label>

                  <input
                    type="text"
                    placeholder="Fees Title"
                    value={filed.title}
                    onChange={(e) =>
                      dispatch(
                        updateConcessionTitle({
                          index: index + 1,
                          value: e.target.value,
                        })
                      )
                    }
                    className="flex px-3 py-2 font-medium border-2 border-slate-200  rounded-lg md:px-4 md:py-3 placeholder:font-normal"
                  />
                </div>

                <div className="flex flex-col w-[40%]">
                  <label className="font-semibold mt-2">Concession Value</label>

                  <input
                    type="text"
                    placeholder=" Fees Value"
                    value={filed.value}
                    onChange={(e) =>
                      dispatch(
                        updateConcessionValue({
                          index: index + 1,
                          value: e.target.value,
                        })
                      )
                    }
                    className="flex px-3 py-2 font-medium border-2 border-slate-200  rounded-lg md:px-4 md:py-3 placeholder:font-normal"
                  />
                </div>
              </div>
            );
          })}
          <div className="flex">
            <button
              className="ml-8 w-auto mt-8 flex items-center px-4 py-2 font-medium text-indigo-700 duration-300 ease-in-out rounded-md hover:bg-indigo-100 hover:text-indigo-800"
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
          onClick={() => setPageState(2)}
          className="mb-8 text-center flex cursor-pointer items-center justify-center px-4 py-2 mx-8 mt-8 font-medium text-white bg-indigo-600 rounded-md"
        >
          Next Page
        </div>
      </div>
    </>
  );
}
