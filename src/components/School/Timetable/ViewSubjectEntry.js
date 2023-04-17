import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { API_URL } from '../../../helpers/URL';
import { Rings } from 'react-loader-spinner';
export default function ViewSubjectEntry({period, index, start, end}) {

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
 <div className="py-2 text-center " index={index}>
                  <div className="mx-2 my-2 rounded-lg bg-gray-50 shadow-xl border-l-4 py-4  px-3 border-[#4338CA] flex flex-col justify-start items-start">
                      <span className="text-md text-font-semibold">
                        {period.subject ? period.subject : "No Subject"}
                      </span>
                      <span className="text-sm text-gray-500 break-word">
                        {period.start_time ? period.start_time + " - " + period.end_time : "Free Break"}
                      </span>
  
                  </div>
                </div> 
    
    </>
  )
}
