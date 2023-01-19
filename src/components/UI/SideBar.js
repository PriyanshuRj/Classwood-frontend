import React from "react";
import logo from "../../assets/CLASSWOOD_Logo.png";
export default function SideBar() {
  return (
    <div className="flex flex-col justify-between w-full h-full pt-10">
      <div className="flex items-center justify-center w-full px-10 py-4 bg-black rounded-full">
        <img className="w-auto h-8 " src={logo} alt="Classwood logo" />
      </div>
      <div className="flex flex-col justify-between w-full h-full">
        <div className="w-full pb-10 mt-12 text-gray-800 border-b-2 gap-y-2">
          <div className="flex w-full">
            <a
              className="flex items-center justify-start w-full p-4 text-center duration-300 ease-in-out rounded hover:bg-opacity-70 hover:bg-gray-100 hover:text-gray-800"
              href="/"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 22V12H15V22"
                  strokeWidth="2"
                  stroke="black"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span className="ml-4 text-xl font-medium">Dashboard</span>
            </a>
          </div>
          <div className="flex w-full">
            <a
              className="flex items-center justify-start w-full p-4 text-center duration-300 ease-in-out rounded hover:bg-opacity-70 hover:bg-gray-100 hover:text-gray-800"
              href="/"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 3H8C9.06087 3 10.0783 3.42143 10.8284 4.17157C11.5786 4.92172 12 5.93913 12 7V21C12 20.2044 11.6839 19.4413 11.1213 18.8787C10.5587 18.3161 9.79565 18 9 18H2V3Z"
                  stroke="#5F6368"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22 3H16C14.9391 3 13.9217 3.42143 13.1716 4.17157C12.4214 4.92172 12 5.93913 12 7V21C12 20.2044 12.3161 19.4413 12.8787 18.8787C13.4413 18.3161 14.2044 18 15 18H22V3Z"
                  stroke="#5F6368"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span className="ml-4 text-xl font-medium">My Cource</span>
            </a>
          </div>
          <div className="flex w-full">
            <a
              className="flex items-center justify-start w-full p-4 text-center duration-300 ease-in-out rounded hover:bg-opacity-70 hover:bg-gray-100 hover:text-gray-800"
              href="{% url 'dashboard' %}"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 20H21"
                  stroke="#5F6368"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.5 3.50001C16.8978 3.10219 17.4374 2.87869 18 2.87869C18.2786 2.87869 18.5544 2.93356 18.8118 3.04017C19.0692 3.14677 19.303 3.30303 19.5 3.50001C19.697 3.697 19.8532 3.93085 19.9598 4.18822C20.0665 4.44559 20.1213 4.72144 20.1213 5.00001C20.1213 5.27859 20.0665 5.55444 19.9598 5.81181C19.8532 6.06918 19.697 6.30303 19.5 6.50001L7 19L3 20L4 16L16.5 3.50001Z"
                  stroke="#5F6368"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span className="ml-4 text-xl font-medium">Text/Exam</span>
            </a>
          </div>
          <div className="flex w-full">
            <a
              className="flex items-center justify-start w-full p-4 text-center duration-300 ease-in-out rounded hover:bg-opacity-70 hover:bg-gray-100 hover:text-gray-800"
              href="{% url 'dashboard' %}"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22 2L11 13"
                  stroke="#5F6368"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22 2L15 22L11 13L2 9L22 2Z"
                  stroke="#5F6368"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span className="ml-4 text-xl font-medium">Message</span>
            </a>
          </div>
          <div className="flex w-full">
            <a
              className="flex items-center justify-start w-full p-4 text-center duration-300 ease-in-out rounded hover:bg-opacity-70 hover:bg-gray-100 hover:text-gray-800"
              href="{% url 'dashboard' %}"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 4H3C1.89543 4 1 4.89543 1 6V18C1 19.1046 1.89543 20 3 20H21C22.1046 20 23 19.1046 23 18V6C23 4.89543 22.1046 4 21 4Z"
                  stroke="#5F6368"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1 10H23"
                  stroke="#5F6368"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span className="ml-4 text-xl font-medium">Fee Payment</span>
            </a>
          </div>
          <div className="flex w-full">
            <a
              className="flex items-center justify-start w-full p-4 text-center duration-300 ease-in-out rounded hover:bg-opacity-70 hover:bg-gray-100 hover:text-gray-800"
              href="{% url 'dashboard' %}"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 7H4C2.89543 7 2 7.89543 2 9V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V9C22 7.89543 21.1046 7 20 7Z"
                  stroke="#5F6368"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 21V5C16 4.46957 15.7893 3.96086 15.4142 3.58579C15.0391 3.21071 14.5304 3 14 3H10C9.46957 3 8.96086 3.21071 8.58579 3.58579C8.21071 3.96086 8 4.46957 8 5V21"
                  stroke="#5F6368"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span className="ml-4 text-xl font-medium">Administration</span>
            </a>
          </div>
        </div>

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
