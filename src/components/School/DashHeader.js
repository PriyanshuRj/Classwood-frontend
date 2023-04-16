import React, {useEffect, useState} from "react";
import NotificationIcon from "../../assets/icons/NotificationIcon"
import { useSelector, useDispatch } from "react-redux";
import ProfilePopUpMenu from "../UI/ProfilePopUpMenu";
import { useNavigate } from "react-router-dom";
import SessionDoropDown from "../Common/SessionDropdown";
import { setSession } from "../../store/genralUser";
import { API_URL } from "../../helpers/URL";
import SchoolProfile from "./SchoolProfile";
import axios from "axios";
import { setAllSession } from "../../store/School/sessionSlice";

export default function DashHeader({setLoading}) {
  async function getSessions(){
    const token = localStorage.getItem("token");
    const sessionRes =  await axios.get(API_URL + "list/session",{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // console.log("session res", sessionRes);

    dispatch(setAllSession(sessionRes.data));
    if(sessionRes.data.length){
      localStorage.setItem("session", sessionRes.data[0].id);
    }
  }
  const [openProfile,setOpenProfile] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const session = useSelector((state) => state.user.session);
  const sessionList = useSelector((state)=> state.session.session);
  const Logout = ()=>{
    localStorage.removeItem("UserType");
    localStorage.removeItem("token");
    navigate(`/`);

  }
  useEffect(()=>{
    getSessions()

  },[])
useEffect(()=>{
  if(sessionList.length)
  dispatch(setSession(sessionList[0]))
},[sessionList])
  const viewProfile=()=>{
    setOpenProfile(true);
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
      {openProfile ? <SchoolProfile data={userData} setOpenProfile={setOpenProfile} /> : undefined}
      <div className="flex flex-row items-center">
      <img  src={API_URL.substring(0,API_URL.length - 5) + userData.school_logo_url} className="w-14 h-14 mr-4 rounded-full border"/>
      <p className="text-2xl font-semibold sm:text-4xl">Hello {userData.school_name}!</p>
      </div>
      <div className="flex flex-row items-center justify-center">
      <div className="mr-8">

      <SessionDoropDown
      setLoading={setLoading}
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
