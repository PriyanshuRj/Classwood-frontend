import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    UserType : "",
    successToast : "",
    warningToast : "",
    classStudents : [],
    notices : []
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
    },
    setClassStudents : (state, action) =>{
        state.classStudents = action.payload
      },
      setNotice : (state, action) =>{
        state.notices = action.payload
      }
  },
})

// Action creators are generated for each case reducer function
export const { loginUser, setSuccessToast, setWarningToast, setClassStudents, setNotice } = userSlice.actions

export default userSlice.reducer