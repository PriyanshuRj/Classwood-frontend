import React, { useState } from "react";
import Layout from "./Layout";
export default function AddNotice() {
  const [noticeImage, addNoticeImage] = useState(null);
  const [title, setTitle] = useState("");
  const [contnet, setContent] = useState("");
  return (
    <Layout>
      <div className="flex flex-col">
        <div className="flex flex-col w-full px-8 my-4 mt-16">
          <label className="mb-4 text-xl font-semibold text-gray-800">
            Title
          </label>
          <input
            value={title}
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            className="flex px-3 py-4 font-medium border-2 border-gray-400 border-[1px] rounded-lg placeholder:font-normal w-full"
          />
        </div>
        <div className="flex flex-col w-full px-8 my-4">
          <label className="mb-4 text-xl font-semibold text-gray-800">
            Content
          </label>
          <textarea
            value={contnet}
            type="text"
            onChange={(e) => setContent(e.target.value)}
            placeholder="Content"
            className="flex px-3 py-4 font-medium border-2 border-gray-400 border-[1px] rounded-lg placeholder:font-normal w-full"
          />
        </div>
        <div className="flex flex-col items-start justify-center w-full p-8 pt-2">
          <span className="mb-4 text-xl font-semibold text-gray-800">
            Subject Image
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
                  <span className="text-xl font-semibold">
                    {" "}
                    {noticeImage ? noticeImage.name : "Subject Image"}
                  </span>
                </p>

                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">
                    {noticeImage ? "Click to Change" : "Click to upload"}
                  </span>
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                </p>
              </div>
              <input
                id="dropzone-file"
                type="file"
                className="hidden"
                onChange={(e) => {
                  addNoticeImage(e.target.files[0]);
                }}
              />
            </label>
          </div>
        </div>
        <div className="flex w-full p-6 border-t border-gray-200 rounded-b">
          <button
            onClick={() => console.log("here")}
            type="button"
            className="text-white w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Upload
          </button>
        </div>
      </div>
    </Layout>
  );
}
