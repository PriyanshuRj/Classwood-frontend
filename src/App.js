import React,{useEffect, useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import { useSelector,useDispatch } from "react-redux";
import axios from "axios";
import { loginUser } from "./store/genralUser";
import SuccessToast from "./components/UI/SuccessToast";
import WarningToast from "./components/UI/WarningToast";
import { setSuccessToast } from "./store/genralUser";
import Login from "./pages/login";
import Register from './pages/Register';
import NotAuthorized from "./components/NotAuthorized";
import ForgotPassword from "./pages/ForgotPassword";
// Student Pages Imports
import StudentDashboard from "./components/Student/Dashboard";
import StudentSubjects from "./components/Student/Subjects";
import StudentTest from "./components/Student/Test";
import StudentFees from "./components/Student/FeesPayment";
import StudentChat from "./components/Student/Message";
import StudentNoticeFullPageView from "./components/Student/NoticeFullPageView";
import StudentEventFullPageView from "./components/Student/EventFullPageView";
// School Pages Imports
import SchoolDashboard from "./components/School/Dashboard";
import AllStaff from "./components/School/Staff";
import AllStudent from "./components/School/Student";
import AllSubjects from "./components/School/AllSubjects"
import SchoolClassroom from "./components/School/Classroom";
import StartPay from "./components/School/StartPay";
import AddClass from "./components/School/AddClass";
import TestResult from "./components/School/Exam/main";
import Attendance from "./components/School/Attendance/Attendance";
import SchoolTimetable from "./components/School/Timetable/Timetable";
import FeesPage from "./components/School/Fees/main";
import SchoolNoticeFullPageView from "./components/School/NoticeFullPageView";
import SchoolEventFullPageView from "./components/School/EventFullPageView";
// Staff Pages Import
import StaffDashboard from "./components/Staff/Dashboard";
import StaffAllClassrooms from "./components/Staff/Classroom";
import SingleClassStudents from "./components/Staff/Students";
import StaffNoticeFullPageView from "./components/Staff/NoticeFullPageView";
import StaffEventFullPageView from "./components/Staff/EventFullPageView";
import StaffTestExam from "./components/Staff/Exam/main";
import StaffTimeTable from "./components/Staff/TimeTable/TimeTable";
import "./App.css";

import { setProfileData } from "./store/genralUser";
import { API_URL } from "./helpers/URL";
export default function App() {
  const dispatch = useDispatch();

  const UserType = useSelector((state) => state.user.UserType);
  useEffect(()=>{

    if(localStorage.getItem("UserType")){
      dispatch(loginUser(localStorage.getItem("UserType")))
    }
    if(UserType){
      dispatch(setSuccessToast("Loged in successfully"));

      
    }
  },[UserType])
  useEffect(()=>{
    if(localStorage.getItem("UserType")==="School"){
      getuserCredentials();
    }
  },[localStorage.getItem("UserType")])
  const getuserCredentials = async () =>{
    const acountData = await  axios.get(API_URL + "account/", 
    {
      headers : {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      }
    }
  )
  dispatch(setProfileData(acountData.data));
  }
  return (
    <Router>
      <SuccessToast />
      <WarningToast />
      <div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

          {/* Students links  */}
          <Route path="/student/dashboard" element={localStorage.getItem("UserType")!=="Student"? <NotAuthorized /> : <StudentDashboard />} />
          <Route path="/student/subject" element={localStorage.getItem("UserType")!=="Student"? <NotAuthorized /> : <StudentSubjects />} />
          <Route path="/student/test" element={localStorage.getItem("UserType")!=="Student"? <NotAuthorized /> : <StudentTest />} />
          <Route path="/student/message" element={localStorage.getItem("UserType")!=="Student"? <NotAuthorized /> : <StudentChat />} />
          <Route path="/student/fees" element={localStorage.getItem("UserType")!=="Student"? <NotAuthorized /> : <StudentFees />} />
          <Route path="/student/notice/:id" element={localStorage.getItem("UserType")!=="Student" ? <NotAuthorized /> : <StudentNoticeFullPageView /> } />
          <Route path="/student/event/:id" element={localStorage.getItem("UserType")!=="Student" ? <NotAuthorized /> : <StudentEventFullPageView /> } />

          {/* School Links */}
          <Route path="/school/dashboard" element={localStorage.getItem("UserType")!=="School"? <NotAuthorized /> : (localStorage.getItem("Payed")  || true) ? <SchoolDashboard /> : <StartPay />} />
          <Route path="/school/students" element={localStorage.getItem("UserType")!=="School"? <NotAuthorized /> : (localStorage.getItem("Payed")  || true) ? <AllStudent /> : <StartPay />} />
          <Route path="/school/staff" element={localStorage.getItem("UserType")!=="School"? <NotAuthorized /> : (localStorage.getItem("Payed")  || true) ? <AllStaff /> : <StartPay />} />
          <Route path="/school/classroom" element={localStorage.getItem("UserType")!=="School"? <NotAuthorized /> : (localStorage.getItem("Payed")  || true) ? <SchoolClassroom /> : <StartPay />} />
          <Route path="/school/subject" element={localStorage.getItem("UserType")!=="School"? <NotAuthorized /> : (localStorage.getItem("Payed")  || true) ? <AllSubjects /> : <StartPay />} />
          <Route path="/school/addclass" element={localStorage.getItem("UserType")!=="School"? <NotAuthorized /> : (localStorage.getItem("Payed")  || true) ? <AddClass /> : <StartPay />} />
          <Route path="/school/test" element={localStorage.getItem("UserType")!=="School"? <NotAuthorized /> : (localStorage.getItem("Payed")  || true) ? <TestResult /> : <StartPay />} />
          <Route path="/school/attendence" element={localStorage.getItem("UserType")!=="School"? <NotAuthorized /> : (localStorage.getItem("Payed")  || true) ? <Attendance /> : <StartPay />} />
          <Route path="/school/timetable" element={localStorage.getItem("UserType")!=="School"? <NotAuthorized /> : (localStorage.getItem("Payed")  || true) ? <SchoolTimetable /> : <StartPay />} />
          <Route path="/school/fees" element={localStorage.getItem("UserType")!=="School"? <NotAuthorized /> : (localStorage.getItem("Payed")  || true) ? <FeesPage /> : <StartPay />} />
          <Route path="/school/notice/:id" element={localStorage.getItem("UserType")!=="School"? <NotAuthorized /> : (localStorage.getItem("Payed")  || true) ?  <SchoolNoticeFullPageView /> : <StartPay />} />
          <Route path="/school/event/:id" element={localStorage.getItem("UserType")!=="School"? <NotAuthorized /> : (localStorage.getItem("Payed")  || true)  ?  <SchoolEventFullPageView /> : <StartPay />} />


          {/* Staff Links */}
          <Route path="/staff/dashboard" element={localStorage.getItem("UserType")!=="Staff"? <NotAuthorized /> : <StaffDashboard />} />
          <Route path="/staff/classroom" element={localStorage.getItem("UserType")!=="Staff"? <NotAuthorized /> : <StaffAllClassrooms />} />
          <Route path="/staff/students" element={localStorage.getItem("UserType")!=="Staff"? <NotAuthorized /> : <SingleClassStudents />} />
          <Route path="/staff/notice/:id" element={localStorage.getItem("UserType")!=="Staff"? <NotAuthorized /> : <StaffNoticeFullPageView />} />
          <Route path="/staff/event/:id" element={localStorage.getItem("UserType")!=="Staff"? <NotAuthorized /> : <StaffEventFullPageView />} />
          <Route path="/staff/test" element={localStorage.getItem("UserType")!=="Staff"? <NotAuthorized /> : <StaffTestExam />} />
          <Route path="/staff/timetable" element={localStorage.getItem("UserType")!=="Staff"? <NotAuthorized /> : <StaffTimeTable />} />
          
          
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </div>
    </Router>
  );
}
