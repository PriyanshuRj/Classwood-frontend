import { createSlice } from '@reduxjs/toolkit'

export const staffSlice = createSlice({
  name: 'staff',
  initialState: {
    allStaff: [],
  },
  reducers: {
    addAllStaff: (state, action) => {
   
      state.allStaff = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { addAllStaff } = staffSlice.actions

export default staffSlice.reducer