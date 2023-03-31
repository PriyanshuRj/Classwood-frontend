import { configureStore } from '@reduxjs/toolkit';

// School Slices
import staffSlice from './School/staffSlice'
import classroomSlice from './School/classroomSlice'
import timetableSlice from './School/timetableSlice';
import studentSlice from './School/studentSlice';
import syllabusSlice from './School/syllabusSlice';

// Staff Slice
import staffUserSlice from './Staff/UserSlice';

// Stucent Slice
import studentUserSlice from "./Student/UserSlice";

// Genral Slice
import userSlice from './genralUser';
export default configureStore({
  reducer: {
      staff : staffSlice,
      classroom : classroomSlice,
      user : userSlice,
      staffUser : staffUserSlice,
      timetable :timetableSlice,
      student : studentSlice,
      syllabus : syllabusSlice,
      studentUser : studentUserSlice
  },
})