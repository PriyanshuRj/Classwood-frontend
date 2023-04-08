import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    UserType: "",
    successToast: "",
    warningToast: "",
    userProfileData: {},
    classStudents: [],
    notices: [],
    events : [],
    testStudents: [],
    loading: false,
    session : {
      id : 1,
      name : "2023 - 24"
    }
  },
  reducers: {
    loginUser: (state, action) => {
      state.UserType = action.payload;
    },
    setSuccessToast: (state, action) => {
      state.successToast = action.payload;
    },
    setWarningToast: (state, action) => {
      state.warningToast = action.payload;
    },
    setClassStudents: (state, action) => {
      state.classStudents = action.payload;
    },
    setNotice: (state, action) => {
      state.notices = action.payload;
    },
    setEvents: (state, action) =>{
      state.events = action.payload;
    },
    setTestStudent: (state, action) => {
      console.log("called", action.payload);
      state.testStudents = action.payload;
    },
    updateSubjectMarks: (state, action) => {
      state.testStudents[action.payload.id].marks = action.payload.value;
    },
    updateTotalMarks: (state, action) => {
      state.testStudents[action.payload.id].totalMarks = action.payload.value;
    },
    updatePercentage: (state, action) => {
      state.testStudents[action.payload.id].percentage = action.payload.value;
    },
    updateMakrsheet: (state, action) => {
      console.log(action.payload.id, action.payload.value);
      state.testStudents[action.payload.id].marksheet = action.payload.value;
    },
    setSession: (state, action) => {
      state.session = action.payload;
    },
    setProfileData : (state, action) =>{
      state.userProfileData = action.payload;
    }
  },
});

// Action creators are generated for each case reducer function
export const {
  setSession,
  loginUser,
  setSuccessToast,
  setWarningToast,
  setClassStudents,
  setNotice,
  setEvents,
  setTestStudent,
  updatePercentage,
  updateSubjectMarks,
  updateTotalMarks,
  updateMakrsheet,
  setProfileData
} = userSlice.actions;

export default userSlice.reducer;
