import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";

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
import AllStaff from "./components/School/staff";
import AllStudent from "./components/School/student";
import AllSubjects from "./components/School/AllSubjects"
import SchoolClassroom from "./components/School/Classroom";
import StartPay from "./components/School/StartPay";
import AddClass from "./components/School/AddClass";
import AddNotice from "./components/School/AddNotice";
// Staff Pages Import
import StaffDashboard from "./components/Staff/Dashboard";
import "./App.css";

export default function App() {
  return (
    <Router>
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

          {/* Staff Links */}
          <Route path="/staff/dashboard" element={localStorage.getItem("UserType")!=="Staff"? <NotAuthorized /> : <StaffDashboard />} />
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </div>
    </Router>
  );
}
