import React, { useState } from "react";
import Layout from "../Layout";
import FeeDistribution from "./FeeDistribution";
import FeesConcession from "./FeeConcession";
import StudentConcession from "./StudentConcession";
import { Rings } from "react-loader-spinner";
import { useDispatch } from "react-redux";
import { setWarningToast } from "../../../store/genralUser";
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
  function addFees () {
    setLoading(true);
    try{
      axios.push(API_URL + "fees/", {

      }, {
        headers : {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        }
      }
      )
    } catch(e){
      dispatch(setWarningToast("Error occured while uploading Fees"))
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
         />
       )}
     </div>
    }
   
    </Layout>
  );
}
