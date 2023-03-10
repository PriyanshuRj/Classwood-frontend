import React, { useState, useEffect } from "react";
import Layout from "../Layout";
import InitialPage from "./InitialPage";
import AddExamResult from "./AddExamResult";
import AddTestResult from "./AddTestResult";
import { getAllSchoolData } from "../helpers/dataFetcher";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
export default function TestResult() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [pageState, setPageState] = useState("");
  const classrooms = useSelector((state) => state.classroom.allClasses);

  useEffect(() => {
    if (classrooms.length === 0) getAllSchoolData(dispatch, navigate);
  });
  return (
    <Layout>
      {pageState ? (
        pageState === "Exam" ? (
          <AddExamResult setPageState={setPageState} />
        ) : (
          <AddTestResult setPageState={setPageState} />
        )
      ) : (
        <InitialPage setPageState={setPageState} />
      )}
    </Layout>
  );
}
