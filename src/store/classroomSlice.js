import { createSlice } from '@reduxjs/toolkit'

export const classroomSlice = createSlice({
  name: 'counter',
  initialState: {
    allClasses: [],
    addClassSubject : [{
      teacher:"",
      subjectname:""
    }]
  },
  reducers: {
    addAllClassroom: (state, action) => {
  
      state.allClasses = action.payload
    },
    addNewClassSubjectsTecher : (state, action)=>{
      state.addClassSubject[action.payload.id].teacher = action.payload.value
    },
    addNewClassSubjectsName : (state, action)=>{
      state.addClassSubject[action.payload.id].subjectname = action.payload.value
    },
    addAWholeSubject : (state, action) =>{
      state.addClassSubject.push(action.payload)
    }
  },
})

// Action creators are generated for each case reducer function
export const { addAllClassroom,addNewClassSubjectsTecher, addNewClassSubjectsName, addAWholeSubject } = classroomSlice.actions

export default classroomSlice.reducer