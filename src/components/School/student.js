import React from "react";
import Layout from "./Layout";
import ProfileCard from "../UI/Cards/ProfileCard";
import { IoMdAddCircleOutline } from "react-icons/io";
import { FiFilter } from "react-icons/fi";
import { AiOutlineSearch } from "react-icons/ai";
export default function Student() {
  return (
    <Layout>
      <div className="px-0 md:px-10">
        <div className="flex justify-between my-4">
          <div className="flex flex-row ">
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
              />
            </div>
            <button className="flex items-center px-2 py-1 font-medium text-gray-800 bg-gray-200 rounded-md sm:px-4">
              <FiFilter className="sm:mr-2" />
              <span className="hidden sm:flex">
                Fliter
                </span>
            </button>
          </div>
          <button className="flex items-center px-4 py-1 font-medium text-white bg-indigo-600 rounded-md">
            <IoMdAddCircleOutline className="mr-2" />
            Add New Student
          </button>
        </div>

        <p className="my-4 mt-8 text-xl font-semibold">
          CLass 12 Student
        </p>
        <div className="grid gap-4 min-[590px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <ProfileCard name={"student 1"} id={12345} Stclass={"112"} grade={"A"} />
          <ProfileCard name={"student 1"} id={12345} Stclass={"112"} grade={"A"} />
          <ProfileCard name={"student 1"} id={12345} Stclass={"112"} grade={"A"} />
          <ProfileCard name={"student 1"} id={12345} Stclass={"112"} grade={"A"} />
          <ProfileCard name={"student 1"} id={12345} Stclass={"112"} grade={"A"} />
          <ProfileCard name={"student 1"} id={12345} Stclass={"112"} grade={"A"} />
          <ProfileCard name={"student 1"} id={12345} Stclass={"112"} grade={"A"} />
          <ProfileCard name={"student 1"} id={12345} Stclass={"112"} grade={"A"} />
          <ProfileCard name={"student 1"} id={12345} Stclass={"112"} grade={"A"} />
          <ProfileCard name={"student 1"} id={12345} Stclass={"112"} grade={"A"} />
          <ProfileCard name={"student 1"} id={12345} Stclass={"112"} grade={"A"} />
          <ProfileCard name={"student 1"} id={12345} Stclass={"112"} grade={"A"} />
          <ProfileCard name={"student 1"} id={12345} Stclass={"112"} grade={"A"} />
          <ProfileCard name={"student 1"} id={12345} Stclass={"112"} grade={"A"} />
          <ProfileCard name={"student 1"} id={12345} Stclass={"112"} grade={"A"} />
          <ProfileCard name={"student 1"} id={12345} Stclass={"112"} grade={"A"} />
        </div>
      </div>
    </Layout>
  );
}
