import React from "react";
import NotificationIcon from "../../assets/icons/NotificationIcon"
import { useSelector, useDispatch } from "react-redux";
import ProfilePopUpMenu from "../UI/ProfilePopUpMenu";
import { useNavigate } from "react-router-dom";
import SessionDoropDown from "../Common/SessionDropdown";
import { setSession } from "../../store/genralUser";
const sessionList = [
  {
    id : 1,
    name : "2023 - 24"
  },
  {
    id : 2,
    name : "2022 - 23"
  }
]
export default function DashHeader() {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const session = useSelector((state) => state.user.session);
  const Logout = ()=>{
    localStorage.removeItem("UserType");
    localStorage.removeItem("token");
    navigate(`/`);

  }

  const viewProfile=()=>{
    navigate(`/school/dashboard`);
  }
  const ClassroomPopUpData = [
    {
      title: "View Profile",
      function: viewProfile,
    },

  
    {
      title: "logout",
      function: Logout,
      deleteType: true,
    },
  ];

  const userData = useSelector((state) => state.user.userProfileData);
  return (
    <div className="flex items-center justify-between w-full p-10 py-6 bg-white  border-b-[0.5px] border-[#D9D9D9]">
      <p className="text-2xl font-semibold sm:text-4xl">Hello {userData.school_name}!</p>
      <div className="flex flex-row items-center justify-center">
      <div className="mr-8">

      <SessionDoropDown
        inputList={sessionList}
        selected={session}
        setSelected={setSession}
        dispatch={dispatch}
        />
                  </div>
                  <div className="h-10 w-10 mr-4">

        < NotificationIcon className=" min-[480px]:h-6 min-[480px]:w-6 sm:w-4 sm:h-4 md:w-10 md:h-10 text-[#5F6368]" />
                  </div>
        
        
        <ProfilePopUpMenu menuList={ClassroomPopUpData} />

      </div>
    </div>
  );
}
