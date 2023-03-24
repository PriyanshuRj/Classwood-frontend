import React,{useEffect, useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import { useSelector,useDispatch } from "react-redux";
import { loginUser } from "./store/genralUser";
import SuccessToast from "./components/UI/SuccessToast";
import WarningToast from "./components/UI/WarningToast";
import { setSuccessToast } from "./store/genralUser";
import Login from "./pages/login";
import Register from './pages/Register';
import NotAuthorized from "./components/NotAuthorized";
// Student Pages Imports
import StudentDashboard from "./components/Student/Dashboard";
import StudentSubjects from "./components/Student/Subjects";
import StudentTest from "./components/Student/Test";
import StudentFees from "./components/Student/FeesPayment";
import StudentChat from "./components/Student/Message";
// School Pages Imports
import SchoolDashboard from "./components/School/Dashboard";
import AllStaff from "./components/School/Staff";
import AllStudent from "./components/School/Student";
import AllSubjects from "./components/School/AllSubjects"
import SchoolClassroom from "./components/School/Classroom";
import StartPay from "./components/School/StartPay";
import AddClass from "./components/School/AddClass";
import AddNotice from "./components/School/AddNotice";
import TestResult from "./components/School/Exam/main";
import Attendance from "./components/School/Attendance/Attendance";
import SchoolTimetable from "./components/School/Timetable/Timetable";
// Staff Pages Import
import StaffDashboard from "./components/Staff/Dashboard";
import StaffAllClassrooms from "./components/Staff/Classroom";
import SingleClassStudents from "./components/Staff/Students";
import NoticeFullPageView from "./components/Staff/NoticeFullPageView";
import "./App.css";

export default function App() {
  const dispatch = useDispatch();

  const UserType = useSelector((state) => state.user.UserType)
  useEffect(()=>{

    console.log("user : ",localStorage.getItem("UserType"), UserType);
    if(localStorage.getItem("UserType")){
      // dispatch(loginUser(localStorage.getItem("UserType")))
    }
    if(UserType){
      dispatch(setSuccessToast("Loged in successfully"));

      
    }
  },[UserType])
  
  return (
    <Router>
      <SuccessToast />
      <WarningToast />
      <div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Students links  */}
          <Route path="/student/dashboard" element={localStorage.getItem("UserType")!=="Student"? <NotAuthorized /> : <StudentDashboard />} />
          <Route path="/student/subject" element={localStorage.getItem("UserType")!=="Student"? <NotAuthorized /> : <StudentSubjects />} />
          <Route path="/student/test" element={localStorage.getItem("UserType")!=="Student"? <NotAuthorized /> : <StudentTest />} />
          <Route path="/student/message" element={localStorage.getItem("UserType")!=="Student"? <NotAuthorized /> : <StudentChat />} />
          <Route path="/student/fees" element={localStorage.getItem("UserType")!=="Student"? <NotAuthorized /> : <StudentFees />} />

          {/* School Links */}
          <Route path="/school/dashboard" element={localStorage.getItem("UserType")!=="School"? <NotAuthorized /> : localStorage.getItem("Payed") ? <SchoolDashboard /> : <StartPay />} />
          <Route path="/school/students" element={localStorage.getItem("UserType")!=="School"? <NotAuthorized /> : localStorage.getItem("Payed") ? <AllStudent /> : <StartPay />} />
          <Route path="/school/staff" element={localStorage.getItem("UserType")!=="School"? <NotAuthorized /> : localStorage.getItem("Payed") ? <AllStaff /> : <StartPay />} />
          <Route path="/school/classroom" element={localStorage.getItem("UserType")!=="School"? <NotAuthorized /> : localStorage.getItem("Payed") ? <SchoolClassroom /> : <StartPay />} />
          <Route path="/school/subject" element={localStorage.getItem("UserType")!=="School"? <NotAuthorized /> : localStorage.getItem("Payed") ? <AllSubjects /> : <StartPay />} />
          <Route path="/school/addclass" element={localStorage.getItem("UserType")!=="School"? <NotAuthorized /> : localStorage.getItem("Payed") ? <AddClass /> : <StartPay />} />
          <Route path="/school/addnoice" element={localStorage.getItem("UserType")!=="School"? <NotAuthorized /> : localStorage.getItem("Payed") ? <AddNotice /> : <StartPay />} />
          <Route path="/school/test" element={localStorage.getItem("UserType")!=="School"? <NotAuthorized /> : localStorage.getItem("Payed") ? <TestResult /> : <StartPay />} />
          <Route path="/school/attendence" element={localStorage.getItem("UserType")!=="School"? <NotAuthorized /> : localStorage.getItem("Payed") ? <Attendance /> : <StartPay />} />
          <Route path="/school/timetable" element={localStorage.getItem("UserType")!=="School"? <NotAuthorized /> : localStorage.getItem("Payed") ? <SchoolTimetable /> : <StartPay />} />

          {/* Staff Links */}
          <Route path="/staff/dashboard" element={localStorage.getItem("UserType")!=="Staff"? <NotAuthorized /> : <StaffDashboard />} />
          <Route path="/staff/classroom" element={localStorage.getItem("UserType")!=="Staff"? <NotAuthorized /> : <StaffAllClassrooms />} />
          <Route path="/staff/students" element={localStorage.getItem("UserType")!=="Staff"? <NotAuthorized /> : <SingleClassStudents />} />
          <Route path="/staff/notice/:id" element={localStorage.getItem("UserType")!=="Staff"? <NotAuthorized /> : <NoticeFullPageView />} />
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </div>
    </Router>
  );
}
