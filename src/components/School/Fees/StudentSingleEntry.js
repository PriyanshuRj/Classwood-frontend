import React, {useState} from 'react'
import { useSelector , useDispatch} from 'react-redux';
import ConcessionDropDown from "./ConcessionDropdown";
import {setFeesStudents,updateStudentConcession} from "../../../store/School/feesSlice";

export default function StudentSingleEntry({student, feesValue, index }) {
  const fees = useSelector((state) => state.fees.concession);
  const dispatch = useDispatch();
    const [selected, setSelected] = useState(fees[0]);
    function setFeesConcessions(value){
   
      dispatch(updateStudentConcession({value: value, index : index}))
    }
  return (
    <div key={index} className="grid w-full grid-cols-5 p-2 pl-6 py-4 font-semibold text-gray-800 bg-white border-b-2">
      <span className='text-center flex items-center justify-center'> {student.first_name + " " + student.last_name}</span>
      <span className='text-center flex items-center justify-center'>{student.roll_no}</span>
      <span className='text-center flex items-center justify-center'>{feesValue}</span>
      <ConcessionDropDown 
    //   labelTitle=""
      inputList={fees}
      selected={student.concession}
       setSelected={setFeesConcessions}
      />
      <span className='text-center flex items-center justify-center'>{student.concession.value} %</span>
  
     
    </div>
  )
}
