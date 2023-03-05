import React, { useState } from "react";
import Layout from "./Layout";
import SubjectCard from "../UI/Cards/SubjectCard";
import { FiFilter } from "react-icons/fi";
import UploadSyllabusSidebar from "../UI/SideBars/UploadSyllabusSidebar";
import { AiOutlineSearch, AiOutlineUpload } from "react-icons/ai";
const tabs = [
  "All Classes",
  "Senior Secondary",
  "Secondary",
  "Primary",
  "Middle",
  "Pre Primary",
];
export default function AllSubjects() {
  const [openUpload, setOpenUpload] = useState(false);
  const [tabState, setTabState] = useState(0);
  return (
    <Layout>
      {openUpload !== false ? (
        <UploadSyllabusSidebar setOpenUpload={setOpenUpload} />
      ) : undefined}
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
              <span className="hidden sm:flex">Fliter</span>
            </button>
          </div>
          <button
            className="flex items-center px-4 py-1 font-medium text-white bg-indigo-600 rounded-md"
            onClick={() => setOpenUpload(true)}
          >
            <AiOutlineUpload className="w-6 h-6 mr-2" />
            Upload Syllabus
          </button>
        </div>

        <p className="my-4 mt-8 text-xl font-semibold">All CLassroom</p>
        <div className="flex flex-row w-full mb-4 border-b-2">
          {tabs.map((tab, index) => {
            return (
              <span
                key={index}
                className={`mx-4 font-semibold text-gray-400 ${
                  tabState === index
                    ? "text-indigo-600 border-b-2 border-indigo-600"
                    : undefined
                }`}
                onClick={() => setTabState(index)}
              >
                {tab}
              </span>
            );
          })}
        </div>
        <div className="grid gap-4 min-[590px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <SubjectCard />
          <SubjectCard />
          <SubjectCard />
          <SubjectCard />
          <SubjectCard />
          <SubjectCard />
          <SubjectCard />
        </div>
      </div>
    </Layout>
  );
}
