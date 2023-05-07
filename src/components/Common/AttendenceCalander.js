import React, { useEffect, useState } from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import AttendencePopup from '../UI/AttendencePopUp';
const AttendenceCalendar = ({attendence, user, profileType, classroom_id}) => {
  const [attendenceMonth,selectAttendenceMonth] = useState(JSON.parse(attendence)[0]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const month = selectedDate.getMonth();
  const year = selectedDate.getFullYear();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const days = [];
  console.log("Classroom", classroom_id)
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  for (let i = 0; i < firstDayOfMonth; i++) {
    days.unshift(null);
  }
  function selectMonth(month){
    for(let ATmonth in JSON.parse(attendence)){
      if ((month+1) == JSON.parse(attendence)[ATmonth].month && year == JSON.parse(attendence)[ATmonth].year) selectAttendenceMonth(JSON.parse(attendence)[ATmonth])
    }
  }
  useEffect(()=>{
    selectMonth(month);

  },[])
  const weeks = [];

  while (days.length > 0) {
    weeks.push(days.splice(0, 7));
  }

  const handlePrevMonth = () => {
    setSelectedDate(new Date(year, month - 1));
    selectMonth(month -1);
  };

  const handleNextMonth = () => {
    setSelectedDate(new Date(year, month + 1));
    selectMonth(month +1);

  };

  return (
    <div className=" mx-auto w-auto">
      <div className="bg-white border shadow rounded-lg">
        <div className="flex items-center justify-between px-6 py-3 bg- rounded-t-lg">
          <div className="mt-2 flex w-full justify-between">
            <button className="text-bold rounded-lg hover:bg-gray-600 focus:outline-none focus:shadow-outline-gray px-2" onClick={handlePrevMonth}>
              <BsChevronLeft />
            </button>
          <div className=" font-medium text-xl">{new Date(year, month).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</div>
            <button className="rounded-lg hover:bg-gray-600 focus:outline-none focus:shadow-outline-gray px-2" onClick={handleNextMonth}>
              <BsChevronRight />
            </button>
          </div>
        </div>
        <div className="px-6 py-4">
          <div className="flex mb-2 text-gray-500 ">
            <div className="m-1 w-12 h-12 flex justify-center items-center text-center">Sun</div>
            <div className="m-1 w-12 h-12  flex justify-center items-center text-center">Mon</div>
            <div className="m-1 w-12 h-12 flex justify-center items-center text-center">Tue</div>
            <div className="m-1 w-12 h-12 flex justify-center items-center text-center">Wed</div>
            <div className="m-1 w-12 h-12 flex justify-center items-center text-center">Thu</div>
            <div className="m-1 w-12 h-12 flex justify-center items-center text-center">Fri</div>
            <div className="m-1 w-12 h-12 flex justify-center items-center text-center">Sat</div>
          </div>
          {weeks.map((week, i) => (
            <div className="flex " key={i}>
              {week.map((day, j) => {
                let todayAttendence = {};
                if(day){
                  let date = year + "-" + (month+1) + "-" + day;
                  if(day<10) date = year + "-" + (month+1) + "-0" + day;
                  if(month<10){
                    date = date = year + "-0" + (month+1) + "-" + day;
                    if(day<10) date = year + "-0" + (month+1) + "-0" + day;

                  }
                  
                 console.log(date)
                  todayAttendence = attendenceMonth.data.filter(attendence=>{
                    return attendence.date == date;
                  })
                }
                return (
               <AttendencePopup classroom_id={classroom_id} todaysAttendence={todayAttendence} user={user} type={profileType} day={day} year={year} month={month} j={j} />
              )})}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AttendenceCalendar;