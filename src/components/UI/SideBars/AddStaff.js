import React, { useState, useEffect } from "react";
import { GoLocation } from "react-icons/go";
import { RxCross1 } from "react-icons/rx";
import {
  BsFillPersonFill,
  BsFillCalendar2DateFill,
  BsBriefcase,
} from "react-icons/bs";
import { AiOutlinePhone } from "react-icons/ai";
import { HiOutlineCake } from "react-icons/hi";
import SelectionDropdown from "../SelectionDropdown";
import { API_URL } from "../../../helpers/URL";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { addAllStaff } from "../../../store/staffSlice";
const inputList = [
  {
    id: 1,
    name: "Male",
  },
  {
    id: 2,
    name: "Female",
  },
];
export default function AddStaff({ setOpenAddProfile, staffData }) {
  const [profileImage, setProfileImage] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState(inputList[0]);
  const [mobileNO, setMobileNo] = useState("");
  const [dateOfJoining, setDateOfJoining] = useState("");
  const [address, setAddress] = useState("");
  const [dob, setDOB] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    if (staffData) {
      console.log(staffData);
      setFirstName(staffData.first_name);
      setLastName(staffData.last_name);
      setEmail(staffData.contact_email);
      setDateOfJoining(staffData.date_of_joining);
      setDOB(staffData.date_of_birth);
      setMobileNo(staffData.mobile_number);
      setAddress(staffData.address);
      setGender(
        staffData.gender === "2"
          ? {
              id: 2,
              name: "Female",
            }
          : {
              id: 1,
              name: "Male",
            }
      );
    }
  }, []);
  async function getStaff() {
    const token = localStorage.getItem("token");

    const res = await axios.get(API_URL + "list/staff/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch(addAllStaff(res.data));
  }
  const submit = async () => {
    if (!staffData) {
      console.log("new user");
      if (
        firstName.length === 0 ||
        lastName.length === 0 ||
        dateOfJoining.length === 0
      ) {
        alert("Fill complete Details", firstName, lastName, dateOfJoining);
        console.log(
          "Fill complete Details",
          firstName,
          lastName,
          dateOfJoining
        );
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
        alert("Invalid email address");
      } else {
        try {
          const token = localStorage.getItem("token");
          console.log(token);

          const res = await axios.post(
            API_URL + "list/staff/",
            {
              profile_pic: profileImage,
              first_name: firstName,
              last_name: lastName,
              gender: gender === "Male" ? "1" : "2",
              mobile_number: mobileNO.toString(10),
              contact_email: email,
              date_of_joining: dateOfJoining,
              date_of_birth: dob,
              address : address
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          console.log(res);
          if (res.status === 201) {
            alert("Reacher added");
            console.log("response returned", res);
          }
        } catch (e) {
          console.warn("Error :::::::", e);
        }
      }
    } else {
      console.log("Data here");
      if (
        firstName.length === 0 ||
        lastName.length === 0 ||
        dateOfJoining.length === 0
      ) {
        alert("Fill complete Details", firstName, lastName, dateOfJoining);
        console.log(
          "Fill complete Details",
          firstName,
          lastName,
          dateOfJoining
        );
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
        alert("Invalid email address");
      } else {
        try {
          const token = localStorage.getItem("token");
          console.log(token);

          const res = await axios.put(
            API_URL + "list/staff/" + staffData.user.id + "/",
            {
              // profile_pic: profileImage,
              first_name: firstName,
              last_name: lastName,
              gender: gender === "Male" ? "1" : "2",
              mobile_number: mobileNO.toString(10),
              contact_email: email,
              date_of_joining: dateOfJoining,
              school: staffData.school,
              date_of_birth: dob,
              address : address
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          console.log("Updated staff", res);
          if (res.status === 201) {
            alert("Reacher added");
            console.log("response returned", res);
          }
        } catch (e) {
          console.warn("Error :::::::", e);
        }
      }
    }
    getStaff();
  };

  return (
    <div className="z-20 fixed top-0 right-0 h-full pt-8 overflow-y-scroll bg-white w-[30rem]">
      <div
        onClick={() => setOpenAddProfile(false)}
        className="absolute p-2 bg-gray-200 rounded-full top-8 left-8"
      >
        <RxCross1 />
      </div>

      <div className="flex flex-col items-center justify-center w-full">
        <p className="mt-8 mb-8 text-2xl font-semibold">
          {!staffData ? "Add New Staff" : "Edit Staff"}
        </p>
      </div>

      <div className="flex flex-col mx-4 mt-4">
        <p className="mb-4 text-xl font-semibold text-gray-800">
          Personal Details
        </p>
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
                  <span className="text-xl font-semibold"> Subject Image</span>
                </p>

                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Click to upload</span>
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                </p>
              </div>
              <input
                id="dropzone-file"
                type="file"
                className="hidden"
                onChange={(e) => setProfileImage(e.target.files[0])}
              />
            </label>
          </div>
        </div>
        <div className="flex flex-row items-center mt-2 mb-4">
          <BsFillPersonFill className="w-8 h-8 mb-2 mr-4 text-indigo-700" />
          <div className="flex flex-col items-start justify-center">
            <span className="mb-1 font-semibold text-gray-800 text-md">
              First Name
            </span>
            <input
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
              type="text"
              placeholder="First Name"
              className="flex px-3 py-2 font-medium border-2 border-black rounded-lg placeholder:font-normal w-[350px]"
            />
          </div>
        </div>
        <div className="flex flex-row items-center mt-2 mb-4">
          <BsFillPersonFill className="w-8 h-8 mb-2 mr-4 text-indigo-700" />
          <div className="flex flex-col items-start justify-center">
            <span className="mb-1 font-semibold text-gray-800 text-md">
              Last Name
            </span>
            <input
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
              type="text"
              placeholder="Last Name"
              className="flex px-3 py-2 font-medium border-2 border-black rounded-lg placeholder:font-normal w-[350px]"
            />
          </div>
        </div>
        <div className="flex flex-row items-center mt-2 mb-4">
          <AiOutlinePhone className="w-8 h-8 mb-2 mr-4 text-indigo-700" />
          <div className="flex flex-col items-start justify-center">
            <span className="mb-1 font-semibold text-gray-800 text-md">
              Phone Number
            </span>
            <input
              onChange={(e) => setMobileNo(e.target.value)}
              value={mobileNO}
              type="number"
              placeholder="Phone No"
              className="flex px-3 py-2 font-medium border-2 border-black rounded-lg placeholder:font-normal w-[350px]"
            />
          </div>
        </div>
        <div className="flex flex-row items-center mt-2 mb-4">
          <BsFillPersonFill className="w-8 h-8 mb-2 mr-4 text-indigo-700" />
          <div className="flex flex-col items-start justify-center w-[350px] ">
            <span className="mb-1 font-semibold text-gray-800 text-md">
              Gender
            </span>
            <SelectionDropdown
              inputList={inputList}
              labelTitle=""
              DivWidth="full"
              selected={gender}
              setSelected={setGender}
            />
          </div>
        </div>
        <div className="flex flex-row items-center mt-4">
          <BsBriefcase className="w-8 h-8 mb-2 mr-4 text-indigo-700" />
          <div className="flex flex-col items-start justify-center ">
            <span className="mb-1 font-semibold text-gray-800 text-md">
              Email Address
            </span>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="text"
              placeholder="Email"
              className="flex px-3 py-2 font-medium w-[350px] border-2 border-black rounded-lg placeholder:font-normal"
            />
          </div>
        </div>
        <div className="flex flex-row items-center mt-4">
          <HiOutlineCake className="w-8 h-8 mb-2 mr-4 text-indigo-700" />
          <div className="flex flex-col items-start justify-center">
            <span className="mb-1 font-semibold text-gray-800 text-md">
              Date of Birth
            </span>
            <input
              value={dob}
              onChange={(e) => setDOB(e.target.value)}
              type="date"
              placeholder="Phone No"
              className="flex w-full px-3 py-2 font-medium border-2 border-black rounded-lg placeholder:font-normal w-[350px] mb-4"
            />
          </div>
        </div>
        <div className="flex flex-row items-center mt-4">
          <GoLocation className="w-8 h-8 mb-2 mr-4 text-indigo-700" />
          <div className="flex flex-col items-start justify-center">
            <span className="mb-1 font-semibold text-gray-800 text-md">
              Address
            </span>
            <textarea
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Address"
              className="flex w-full px-3 py-2 font-medium border-2 border-black rounded-lg placeholder:font-normal w-[350px]"
            />
          </div>
        </div>

        <div className="flex flex-row items-center mt-4">
          <BsFillCalendar2DateFill className="w-8 h-8 mb-2 mr-4 text-indigo-700" />
          <div className="flex flex-col items-start justify-center">
            <span className="mb-1 font-semibold text-gray-800 text-md">
              Date of Joining
            </span>
            <input
              onChange={(e) => setDateOfJoining(e.target.value)}
              type="date"
              value={dateOfJoining}
              placeholder="Phone No"
              className="flex w-full px-3 py-2 font-medium border-2 border-black rounded-lg placeholder:font-normal w-[350px] mb-4"
            />
          </div>
        </div>
      </div>
      <div className="flex w-full px-8 mb-16">
        <button
          onClick={() => submit()}
          className="w-full py-2 mx-8 my-4 font-semibold text-white duration-200 ease-in-out bg-indigo-500 rounded-lg text-md hover:bg-indigo-800"
        >
          Save
        </button>
      </div>
    </div>
  );
}
