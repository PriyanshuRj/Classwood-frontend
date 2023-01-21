import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LandingPage from "./components/LandingPage";

// Student Pages Imports
import StudentDashboard from "./components/Student/Dashboard";
import StudentSubjects from "./components/Student/Subjects";
import StudentTest from './components/Student/Test';
import StudentFees from './components/Student/FeesPayment';

// School Pages Imports
import SchoolDashboard from "./components/School/Dashboard";
import "./App.css";
export default function App() {
  return (
    <Router>
      <div>
     

     
        <Routes>

          {/* Students links  */}
        <Route path='/student/dashboard' element={<StudentDashboard/>} />
        <Route path='/student/subject' element={<StudentSubjects/>} />
        <Route path='/student/test' element={<StudentTest/>} />
        <Route path='/student/fees' element={<StudentFees/>} />

        {/* School Links */}
        <Route path='/school/dashboard' element={<SchoolDashboard/>} />

        <Route path='/' element={<LandingPage/>} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}