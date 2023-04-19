import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { API_URL } from '../../../helpers/URL';
import { Rings } from 'react-loader-spinner';
import EditSingleModal from './EditSingleModal';
export default function ViewSubjectEntry({period, index, start, end, selectedClass}) {
  const [open,setOpen] = useState(false)

  function compareTime(a,b, type1,type2){
    const aTime = a.split(":");
    const bTime = b.split(":");
    if(parseInt(aTime[0]) >  parseInt(bTime[0])) return true;
    else if(parseInt(aTime[0]) ==  parseInt(bTime[0])){
      if(parseInt(aTime[1]) >  parseInt(bTime[1])) return true;
      if(parseInt(aTime[1]) ==  parseInt(bTime[1])) {
      if(type1==="start" && type2==="start"){
        return true;
      }
     
      if(type1==="end" && type2==="end"){
        return true;
      }
     
      }
    }
    return false;
    
  }

  return (
    <>
    {open && <EditSingleModal period={period} setOpen={setOpen} selectedClass={selectedClass} />}
 <div className="py-2 text-center " index={index} onClick={()=> setOpen(true)}>
  {period.subject ?  <div className="mx-2 my-2 rounded-lg bg-gray-50 shadow-xl border-l-4 py-4  px-3 border-[#4338CA] flex flex-col justify-start items-start" >
                      <span className="text-md text-font-semibold">
                        {period.subject ? period.subject : "No Subject"}
                      </span>
                      <span className="text-sm text-gray-500 break-word">
                        {period.subject ? <>
                          { compareTime(period.start_time, start) ? period.start_time : start } {" - "}  {compareTime( end,period.end_time) ? period.end_time : end }
                        </> : "Break"}
                      
                      </span>
  
                  </div> : <></> }
                 
                </div> 
    
    </>
  )
}
