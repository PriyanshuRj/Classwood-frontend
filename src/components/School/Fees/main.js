import React, { useState } from "react";
import Layout from "../Layout";
import FeeDistribution from "./FeeDistribution";
import FeesConcession from "./FeeConcession";
import StudentConcession from "./StudentConcession";
import { Rings } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { setSuccessToast, setWarningToast } from "../../../store/genralUser";
import axios from "axios";
import { API_URL } from "../../../helpers/URL";
export default function Main() {
  const dispatch = useDispatch()
  const [pageState, setPageState] = useState(0);
  const [feesValue, setFeesValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedClass, setSelectedClass] = useState({
    class_name: "No Class",

    section_name: "No Section",
  });
  const feesStudents = useSelector((state) => state.fees.feesStudents);

  const fees = useSelector((state) => state.fees.allFees);
  async function addFees () {
    setLoading(true);
    try{
      const tutionFees = {title : "tution", fees : feesValue};
      console.log("here");
      let allFess = [...fees, tutionFees];

      console.log(allFess, feesStudents, selectedClass.id);
      const fessRes = await axios.post(API_URL + "list/fees/", {
        for_class : selectedClass.id,
        fee_data : allFess,
        session : localStorage.getItem("session"),
        student_data : feesStudents

      }, {
        headers : {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        params :{
          session : localStorage.getItem("session")
        }
      }
      );
      console.log(fessRes)
      if(fessRes.status===201) dispatch(setSuccessToast("Fees Added Successfully"))
    } catch(e){
      console.log(e)
      dispatch(setWarningToast("Error occured while uploading Fees"))
    }
    finally{
      setLoading(false);
    }
  }

  return (
    <Layout>
      {loading ? <div className="w-full h-screen flex justify-center items-center">
      <Rings
            height="220"
            width="220"
            // radius="9"
            color="rgb(30 64 175)"
            ariaLabel="loading"
          />{" "}
    </div> : 
       <div className="m-4 flex w-full flex-1 h-full">
       {pageState == 2 ? (
         <StudentConcession
           setPageState={StudentConcession}
           feesValue={feesValue}
           addFees={addFees}
           classroom={selectedClass}
         />
       ) : pageState === 1 ? (
         <FeesConcession setPageState={setPageState} />
       ) : (
         <FeeDistribution
           setPageState={setPageState}
           setFeesValue={setFeesValue}
           feesValue={feesValue}
           selectedClass={selectedClass}
           setSelectedClass={setSelectedClass}
           submitFees={addFees}
         />
       )}
     </div>
    }
   
    </Layout>
  );
}
