import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    UserType : "",
    successToast : "",
    warningToast : "",
  },
  reducers: {
    loginUser: (state, action) => {
   
      state.UserType = action.payload
    },
    setSuccessToast : (state, action) =>{
        state.successToast = action.payload
    },
    setWarningToast : (state, action)=>{
        state.warningToast = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { loginUser, setSuccessToast, setWarningToast } = userSlice.actions

export default userSlice.reducer