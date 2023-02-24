import { configureStore } from '@reduxjs/toolkit'
import staffSlice from './School/staffSlice'
import classroomSlice from './School/classroomSlice'
import userSlice from './genralUser';
import staffUserSlice from './Staff/UserSlice'
export default configureStore({
  reducer: {
      staff : staffSlice,
      classroom : classroomSlice,
      user : userSlice,
      staffUser : staffUserSlice
  },
})