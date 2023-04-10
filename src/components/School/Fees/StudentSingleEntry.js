import React, {useState} from 'react'
import { useSelector } from 'react-redux';
import ConcessionDropDown from "./ConcessionDropdown";

export default function StudentSingleEntry({student, feesValue}) {
  const fees = useSelector((state) => state.fees.concession);

    const [selected, setSelected] = useState(fees[0]);
  return (
    <div className="grid w-full grid-cols-5 p-2 pl-6 py-4 font-semibold text-gray-800 bg-white border-b-2">
      <span className='text-center flex items-center justify-center'> {student.first_name + " " + student.last_name}</span>
      <span className='text-center flex items-center justify-center'>{student.roll_no}</span>
      <span className='text-center flex items-center justify-center'>{feesValue}</span>
      <ConcessionDropDown 
    //   labelTitle=""
      inputList={fees}
      selected={selected}
       setSelected={setSelected}
      />
      <span className='text-center flex items-center justify-center'>{selected.value} %</span>
  
     
    </div>
  )
}
