import React from 'react'
import {TfiBlackboard} from 'react-icons/tfi';
import { BiDotsVerticalRounded } from "react-icons/bi";

export default function ClassroomCard({classData, setOpenSidebar, index, setSelectedClass}) {
  return (
    <div className='flex flex-col p-4 bg-white rounded-xl' onClick={()=> {
      setSelectedClass(index)
      setOpenSidebar(index)}}>
        <div className='flex flex-row items-center justify-between'>
            <span className='p-2 bg-indigo-200 rounded-lg'>
                <TfiBlackboard className='w-4 h-4 text-indigo-600' />
            </span>
            <BiDotsVerticalRounded className="w-6 h-6" />
        </div>
        <span className='mt-4 text-lg font-semibold' >{classData.class_name + " " + classData.section_name}</span>
        <div className='flex flex-row items-center justify-between mt-6 text-sm'>

        <span className='font-semibold text-gray-500'> TOTAL SUBJECT </span>
        <span className='font-semibold text-gray-500'>5</span>
        </div>
        <div className='flex flex-row items-center justify-between mt-1 text-sm'>

        <span className='font-semibold text-gray-500'> TEACHER ASSIGNED </span>
        <span className='font-semibold text-gray-500'>5</span>
        </div>

        <div className='flex flex-row items-center justify-between mt-5 text-sm'>

<span className='font-semibold text-gray-500'> STUDENTS </span>
<span className='font-semibold text-gray-500'>{classData.strength}</span>
</div>


    </div>
  )
}
