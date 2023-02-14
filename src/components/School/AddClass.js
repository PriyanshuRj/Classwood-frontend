import React,{useState} from 'react'
import Layout from "./Layout";
import Page1 from './AddClassPages/Page1';
import Page2 from './AddClassPages/Page2';
import Page3 from './AddClassPages/Page3';
import Page4 from './AddClassPages/Page4';
const inputList = [
    {
      id: 1,
      name: "Male",
    },
    {
      id: 2,
      name: "Female",
    },
  ];
export default function AddClass() {
  const [classTeacher, setClassTeacher] = useState(inputList[0]);
  const [subClassTeacher, setSubClassTeacher] = useState(inputList[0]);
  const [classTitle, setClassTitle] = useState("");
  const [classSection, setClassSection] = useState("");
  
const [pageState, setPageState] = useState(1);
  return (
      <Layout>

        {pageState===1 ? <Page1 inputList={inputList} classTeacher={classTeacher} setClassTeacher={setClassTeacher} subClassTeacher={subClassTeacher} classTitle={classTitle} setClassTitle={setClassTitle} classSection={classSection} setClassSection={setClassSection} setSubClassTeacher={setSubClassTeacher} setPageState={setPageState} /> : pageState===2? <Page2 setPageState={setPageState} inputList={inputList}  /> : pageState===3? <Page3 setPageState={setPageState} /> : <Page4 setPageState={setPageState} classTeacher={classTeacher} subClassTeacher={subClassTeacher} classSection={classSection} classTitle={classTitle} />}
      </Layout>
  )
}
