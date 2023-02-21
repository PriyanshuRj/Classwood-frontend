import { configureStore } from '@reduxjs/toolkit'
import staffSlice from './staffSlice'
import classroomSlice from './classroomSlice'
import userSlice from './userStateSlice'
export default configureStore({
  reducer: {
      staff : staffSlice,
      classroom : classroomSlice,
      user : userSlice
  },
})