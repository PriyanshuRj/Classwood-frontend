import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    UserType : "",
    successToast : "",
    warningToast : "",
    classStudents : [],
    notices : [],
    testStudents: [],
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
      },
      setTestStudent : (state, action) =>{
        console.log("called",action.payload)
        state.testStudents = action.payload
      },
      updateSubjectMarks : (state, action)=>{
        state.testStudents[action.payload.id].marks = action.payload.value
      },
      updateTotalMarks : (state, action)=>{
        state.testStudents[action.payload.id].totalMarks = action.payload.value
      },
      updatePercentage : (state, action)=>{
        state.testStudents[action.payload.id].percentage = action.payload.value
      },
      updateMakrsheet : (state, action)=>{
        console.log(action.payload.id, action.payload.value);
        state.testStudents[action.payload.id].marksheet = action.payload.value;
      },
  },
})

// Action creators are generated for each case reducer function
export const { loginUser, setSuccessToast, setWarningToast, setClassStudents, setNotice, setTestStudent, updatePercentage, updateSubjectMarks, updateTotalMarks, updateMakrsheet } = userSlice.actions

export default userSlice.reducer