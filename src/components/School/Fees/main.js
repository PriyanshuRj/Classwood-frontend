import React, {useState} from 'react'
import Layout from "../Layout";
import FeeDistribution from './FeeDistribution';
import FeesConcession from './FeeConcession';
import StudentConcession from './StudentConcession';
export default function Main() {
  const [pageState, setPageState] = useState(0);
  const [feesValue, setFeesValue] = useState("");
  return (
    <Layout>

    <div className='m-4 flex w-full flex-1 h-full'>
   
{pageState==2 ? <StudentConcession setPageState={StudentConcession} feesValue={feesValue} /> : pageState===1 ? <FeesConcession setPageState={setPageState}/> : <FeeDistribution setPageState={setPageState} setFeesValue={setFeesValue} feesValue={feesValue}/>}
    </div>
    </Layout>
  )
}
