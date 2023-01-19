import React from "react";
import logo from "../../../assets/CLASSWOOD_Logo.png";
import StudentSidebar from "../../Student/sidebar";
export default function SideBar() {
  return (
    <div className="flex flex-col justify-between w-full h-full pt-10">
      <div className="flex items-center justify-center w-full px-10 py-4 bg-black rounded-full">
        <img className="w-auto h-8 " src={logo} alt="Classwood logo" />
      </div>
      <div className="flex flex-col justify-between w-full h-full">
      <StudentSidebar />

        <div className="mt-8 text-gray-800">
          <div className="z-50">
            <div className="flex w-full my-8">
              <a
                className="flex items-center justify-center w-full p-4 text-xl text-center text-white duration-300 ease-in-out bg-black rounded-full hover:bg-opacity-80 hover:bg-gray-100 hover:text-red-800"
                href="{% url 'logout' %}"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 17L21 12L16 7"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21 12H9"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <span className="ml-4 text-xl font-medium">Logout</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
