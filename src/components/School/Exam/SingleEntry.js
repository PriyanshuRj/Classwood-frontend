import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  updatePercentage,
  updateSubjectMarks,
  updateTotalMarks,
  updateMakrsheet,
} from "../../../store/genralUser";
export default function SingleEntry({ student, index }) {
  const dispatch = useDispatch();
  useEffect(() => {
    if (student.totalMarks && student.marks) {
      dispatch(
        updatePercentage({
          value: (
            (parseInt(student.marks) / parseInt(student.totalMarks)) *
            100
          ).toFixed(2),
          id: index,
        })
      );
    }
  }, [student.totalMarks, student.marks]);
  return (
    <div className="grid grid-cols-6 gap-4 mb-2">
      <span className=" h-[50px] bg-[#F8FAFC] border-[1px] rounded-lg flex items-center justify-end px-2 text-gray-500">
        {student.roll_no}
      </span>
      <span className=" h-[50px] bg-[#F8FAFC] border-[1px] rounded-lg flex items-center justify-end px-2 text-gray-500">
        {student.first_name + " " + student.last_name}
      </span>
      <input
        type="number"
        onChange={(e) =>
          dispatch(updateTotalMarks({ value: e.target.value, id: index }))
        }
        value={student.totalMarks}
        className=" h-[50px] bg-[#F8FAFC] border-[1px] rounded-lg flex items-center justify-end px-2 text-gray-500"
        placeholder="Total Marks"
      />
      <input
        type="number"
        onChange={(e) =>
          dispatch(updateSubjectMarks({ value: e.target.value, id: index }))
        }
        value={student.marks}
        className=" h-[50px] bg-[#F8FAFC] border-[1px] rounded-lg flex items-center justify-end px-2 text-gray-800"
        placeholder="Obtained Marks"
      />
      {student.percentage ? (
        <span className=" h-[50px] bg-[#F8FAFC] border-[1px] rounded-lg flex items-center justify-end px-2 text-gray-800">
          {student.percentage}
        </span>
      ) : (
        <span className=" h-[50px] bg-[#F8FAFC] border-[1px] rounded-lg flex items-center justify-end px-2 text-gray-400">
          Percentage
        </span>
      )}

      <div className="flex items-center justify-center">
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-full h-[50px] border-[1px] rounded-lg cursor-pointer bg-gray-50  hover:bg-gray-100"
        >
          <div className="flex flex-row items-center justify-around w-full h-full itmes-center">
            <svg
              aria-hidden="true"
              className="w-6 h-6 text-gray-400"
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
            <p className="text-gray-500 ">
              <span className="">Result PDF</span>
            </p>
          </div>
          <input
            id="dropzone-file"
            type="file"
            className="hidden"
            onChange={(e) =>
              dispatch(updateMakrsheet({ id: index, value: e.target.files[0] }))
            }
          />
        </label>
      </div>
    </div>
  );
}
