import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Dashboard from "./components/Student/Dashboard";
import StudentSubjects from "./components/Student/Subjects";
import StudentTest from './components/Student/Test';
import StudentFees from './components/Student/FeesPayment';
import "./App.css";
export default function App() {
  return (
    <Router>
      <div>
     

     
        <Routes>
        <Route path='/student/subject' element={<StudentSubjects/>} />
        <Route path='/student/dashboard' element={<Dashboard/>} />
        <Route path='/student/test' element={<StudentTest/>} />
        <Route path='/student/fees' element={<StudentFees/>} />
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