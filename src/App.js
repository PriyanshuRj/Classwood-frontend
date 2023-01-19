import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Dashboard from "./components/UI/Dashboard/dashboard"
import "./App.css";
export default function App() {
  return (
    <Router>
      <div>
     

     
        <Routes>
        <Route path='/about' element={<About/>} />
        <Route path='/student/dashboard' element={<Dashboard/>} />
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