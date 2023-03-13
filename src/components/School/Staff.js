import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import ProfileCard from "../UI/Cards/ProfileCard";
import { IoMdAddCircleOutline } from "react-icons/io";
import { FiFilter } from "react-icons/fi";
import { AiOutlineSearch } from "react-icons/ai";
import AddStaff from "../UI/SideBars/AddStaffSidebar";
import ProfileSideBar from "../UI/SideBars/ProfileSideBar";
import { useNavigate } from "react-router-dom";
import { getAllSchoolData } from "./helpers/dataFetcher";
import { useSelector, useDispatch } from "react-redux";

export default function Student() {
  const [openProfile, setOpenProfile] = useState(false);
  const [openAddProfile, setOpenAddProfile] = useState(false);
  const [staffData, setStaffData] = useState(null);
  const [searchQueary, setSearchQueary] = useState("");
  const staff = useSelector((state) => state.staff.allStaff);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!staff || staff.length === 0) getAllSchoolData(dispatch, navigate);
  }, []);
  function filterStaff(student) {
    return (student.first_name + " " + student.last_name)
      .toLowerCase()
      .includes(searchQueary.toLowerCase());
  }

  return (
    <Layout>
      {openProfile ? (
        <ProfileSideBar
          setOpenAddProfile={setOpenAddProfile}
          setProfileData={setStaffData}
          data={staffData}
          setOpenProfile={setOpenProfile}
        />
      ) : undefined}
      {openAddProfile ? (
        <AddStaff staffData={staffData} setOpenAddProfile={setOpenAddProfile} />
      ) : undefined}

      <div className="w-full px-0 md:px-10">
        <div className="flex flex-col items-center justify-between my-4 md:flex-row">
          <p className="ml-2 text-xl font-semibold">All Staff</p>

          <button
            onClick={() => {
              setStaffData(null);
              setOpenAddProfile(true);
            }}
            className="flex items-center px-4 py-1 mt-4 font-medium text-white bg-indigo-600 rounded-md md:mt-0"
          >
            <IoMdAddCircleOutline className="mr-2" />
            Add New Staff
          </button>
        </div>
        <div className="flex flex-row my-8">
          <div className="relative mr-4 text-gray-600 focus-within:text-gray-400">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <AiOutlineSearch />
            </span>
            <input
              type="search"
              name="q"
              className="py-2 pl-10 text-sm text-gray-900 bg-white rounded-md focus:outline-none"
              placeholder="Search a staff member"
              autoComplete="off"
              onChange={(e) => setSearchQueary(e.target.value)}
            />
          </div>
          <button className="flex items-center px-2 py-1 font-medium text-gray-800 bg-gray-200 rounded-md sm:px-4">
            <FiFilter className="sm:mr-2" />
            <span className="hidden sm:flex">Fliter</span>
          </button>
        </div>
        {staff.length == 0 ? (
          <div className="flex items-center justify-center w-full h-96">
            <span>No Staff Till Now Add Staff Members</span>
          </div>
        ) : (
          <div className="mb-8  grid gap-4 min-[590px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {staff.filter(filterStaff).map((e, i) => {
              return (
                <ProfileCard
                  key={i}
                  type="staff"
                  index={i}
                  name={e.first_name + " " + e.last_name}
                  allData={e}
                  setDataOfStaff={setStaffData}
                  id={12345}
                  incharge={e.incharge_of}
                  isIncharge={e.is_class_teacher}
                  setOpenProfile={setOpenProfile}
                  setOpenAddProfile={setOpenAddProfile}
                  
                />
              );
            })}
          </div>
        )}
      </div>
    </Layout>
  );
}
