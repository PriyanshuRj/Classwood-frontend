import { configureStore } from '@reduxjs/toolkit'
import staffSlice from './School/staffSlice'
import classroomSlice from './School/classroomSlice'
import userSlice from './genralUser';
import staffUserSlice from './Staff/UserSlice';
import timetableSlice from './School/timetableSlice';
import studentSlice from './School/studentSlice';
export default configureStore({
  reducer: {
      staff : staffSlice,
      classroom : classroomSlice,
      user : userSlice,
      staffUser : staffUserSlice,
      timetable :timetableSlice,
      student : studentSlice
  },
})