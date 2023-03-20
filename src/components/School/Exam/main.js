import React, { useState, useEffect } from "react";
import Layout from "../Layout";
import InitialPage from "./InitialPage";
import AddExamResult from "./AddExamResult";
import AddTestResult from "./AddTestResult";
import { getAllSchoolData } from "../helpers/dataFetcher";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Rings } from "react-loader-spinner";
export default function TestResult() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [pageState, setPageState] = useState("");
  const [loading, setLoading] = useState(false);
  const classrooms = useSelector((state) => state.classroom.allClasses);

  useEffect(() => {
    if (classrooms.length === 0) getAllSchoolData(dispatch, navigate, setLoading);
  });
  return (
    <Layout>
        {loading ?  
    <div className="flex items-center justify-center w-full h-screen">

    <Rings
            height="220"
            width="220"
            // radius="9"
            color="rgb(30 64 175)"
            
            ariaLabel="loading"
          /> </div> : <>
      {pageState ? (
        pageState === "Exam" ? (
          <AddExamResult setPageState={setPageState} />
        ) : (
          <AddTestResult setPageState={setPageState} />
        )
      ) : (
        <InitialPage setPageState={setPageState} />
      )}
      </> 
}
    </Layout>
  );
}
