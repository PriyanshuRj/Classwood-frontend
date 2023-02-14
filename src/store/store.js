import { configureStore } from '@reduxjs/toolkit'
import staffSlice from './staffSlice'
import classroomSlice from './classroomSlice'
export default configureStore({
  reducer: {
      staff : staffSlice,
      classroom : classroomSlice
  },
})