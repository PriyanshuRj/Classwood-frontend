import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import Page1 from "./AddClassPages/Page1";
import Page2 from "./AddClassPages/Page2";
import Page3 from "./AddClassPages/Page3";
import Page4 from "./AddClassPages/Page4";
import { setSuccessToast, setWarningToast } from "../../store/genralUser";
import { getAllSchoolData } from "./helpers/dataFetcher";
import { API_URL } from "../../helpers/URL";
export default function AddClass() {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [classTeacher, setClassTeacher] = useState("");
  const [subClassTeacher, setSubClassTeacher] = useState("");
  const [classTitle, setClassTitle] = useState("");
  const [classSection, setClassSection] = useState("");
  const [pageState, setPageState] = useState(1);
  const [CSVFile, setCSVFile] = useState(null);

  const staff = useSelector((state) => state.staff.allStaff);
  const subjects = useSelector((state) => state.classroom.addClassSubject);

  useEffect(() => {
    if (!staff || staff.length === 0) getAllSchoolData(dispatch, navigate);
    if (staff.length) setClassTeacher(staff[0]);
    if (staff.length) setSubClassTeacher(staff[0]);
  }, [staff]);
  const propogateToPage2 = (val) => {
    if (classTitle.length === 0 || classSection.length === 0) {
      dispatch(setWarningToast("Please Fill Complete Details"));
    } else setPageState(val);
  };
  const propogateToPage3 = async (val) => {
    for (var subject of subjects) {
      if (subject.subjectname.length === 0) {
        dispatch(setWarningToast("Please fill names of subject properly !"));
        return;
      }
    }
    setPageState(val);
  };
  const addClass = async () => {
    try {
      const token = localStorage.getItem("token");
      // console.log(token);
      // console.log(staff[0].school , classTitle, classSection, classTeacher.user.id, subClassTeacher.user.id)
      const res = await axios.post(
        API_URL + "list/classroom/",
        {
          class_name: classTitle,
          section_name: classSection,
          class_teacher: classTeacher.user.id,
          sub_class_teacher: subClassTeacher.user.id,
          school: staff[0].school,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("added", res);
      if (
        res.status === 200 &&
        res.data.message === "Class Teacher Already Assigned"
      ) {
        dispatch(setWarningToast("Teacher already assigned as Classteacher"));
      } else if (
        res.status === 200 &&
        res.data.non_field_errors[0] ===
          "The fields class_name, section_name, school must make a unique set."
      ) {
        dispatch(setWarningToast("Class and section should be unique"));
      } else if (res.status === 201) {
        dispatch(setSuccessToast("classroom Created successfully"));
        for (let subject of subjects) {
          let resp = await axios.post(
            API_URL + "staff/subject/",
            {
              name: subject.subjectname,
              // subject_pic: null,
              school: staff[0].school,
              teacher: subject.teacher.user.id,
              classroom: res.data.data.id,
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          console.log("resp",resp);
          if(resp.status=== 201){
          const formData = new FormData();
          formData.append("school", staff[0].school);
          formData.append("classroom", resp.data.data.id);
          formData.append("csv_file", CSVFile);
            const studentRes = await axios.post(
              API_URL + "staff/student/",
              formData,
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
            );
            console.log("Response", studentRes)
          }
        }
      }
    } catch (e) {
      console.warn("Error :::::::", e);
    }
  };
  return (
    <Layout>
      {staff.length ? (
        pageState === 1 ? (
          <Page1
            staff={staff}
            classTeacher={classTeacher}
            setClassTeacher={setClassTeacher}
            subClassTeacher={subClassTeacher}
            classTitle={classTitle}
            setClassTitle={setClassTitle}
            classSection={classSection}
            setClassSection={setClassSection}
            setSubClassTeacher={setSubClassTeacher}
            setPageState={propogateToPage2}
          />
        ) : pageState === 2 ? (
          <Page2 staff={staff} setPageState={propogateToPage3} />
        ) : pageState === 3 ? (
          <Page3 setPageState={setPageState} 
          CSVFile={CSVFile} setCSVFile={setCSVFile}
          />
        ) : (
          <Page4
            setPageState={setPageState}
            classTeacher={classTeacher}
            subClassTeacher={subClassTeacher}
            addClass={addClass}
            classSection={classSection}
            classTitle={classTitle}
          />
        )
      ) : (
        <span className="flex items-center h-full justigy-center">
          Please Create Staff first
        </span>
      )}
    </Layout>
  );
}
