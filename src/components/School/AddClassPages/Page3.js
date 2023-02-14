import React, { useState } from "react";
import { GrNext } from "react-icons/gr";
import { CgAdd } from "react-icons/cg";
export default function Page3({ setPageState }) {
  const [CSVFile, setCSVFile] = useState(null);

  const addNewStudent = () => {};
  return (
    <div className="flex flex-col h-full mx-4">
      <span className="text-xl font-semibold py-4 border-b-[1px]">
        Create New Class
      </span>

      <div className="flex flex-row justify-between my-8 ">
        <div className="flex flex-row items-center justify-center">
          <span className="flex items-center justify-center w-6 h-6 text-gray-200 bg-indigo-600 border-2 border-indigo-600 rounded-full text-md">
            1
          </span>
          <span className="ml-2 font-semibold text-indigo-600 text-md">
            {" "}
            Class Detail
          </span>
        </div>
        <div className="flex flex-row items-center justify-center">
          <span className="flex items-center justify-center w-6 h-6 text-gray-200 bg-indigo-600 border-2 border-indigo-600 rounded-full text-md">
            2
          </span>
          <span className="ml-2 font-semibold text-indigo-600 text-md">
            {" "}
            Subject Detail
          </span>
        </div>
        <div className="flex flex-row items-center justify-center">
          <span className="flex items-center justify-center w-6 h-6 text-gray-200 bg-gray-700 border-2 border-gray-700 rounded-full text-md">
            3
          </span>
          <span className="ml-2 font-semibold text-gray-700 text-md">
            {" "}
            Student Detail
          </span>
        </div>
      </div>

      <div className="flex flex-col items-start justify-center w-full p-8 pt-2">
        <span className="mb-4 font-semibold text-gray-800 text-md">
          Profile Picture
        </span>
        <div className="flex items-center justify-center w-full">
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
                <span className="text-xl font-semibold">Student CSV</span>
              </p>

              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span>
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Only CSV format allowed
              </p>
            </div>
            <input
              id="dropzone-file"
              type="file"
              className="hidden"
              onChange={(e) => setCSVFile(e.target.files[0])}
            />
          </label>
        </div>
      </div>
      <span
        onClick={() => addNewStudent()}
        className="flex flex-row items-center px-4 py-2 mt-4 ml-4 text-indigo-700 duration-200 ease-in-out rounded cursor-pointer hover:bg-gray-200 hover:text-indigo-500 w-max"
      >
        {" "}
        <CgAdd className="mr-2" /> Add new Student
      </span>
      <button
        onClick={() => setPageState(4)}
        className="flex items-center justify-center py-4 mx-8 mt-16 text-gray-800 duration-300 bg-gray-200 rounded-lg justify-self-end hover:bg-gray-700 hover:text-gray-200 easy-in-out"
      >
        Save and Review <GrNext className="ml-2" />
      </button>
    </div>
  );
}
