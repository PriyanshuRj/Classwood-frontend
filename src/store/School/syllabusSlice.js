import { createSlice } from '@reduxjs/toolkit'

export const SyllabusSlice = createSlice({
  name: 'Syllabus',
  initialState: {
    allSyllabus: [],
    noOfSyllabus : 0,
    subjectChapters: [{name : ""}]
  },
  reducers: {
    addAllSyllabus: (state, action) => {
   
      state.allSyllabus = action.payload;
      state.noOfSyllabus = action.payload.length
    },
    addNewClassSubjectsBookChapter : (state, action)=>{
      state.subjectChapters[action.payload.id].name = action.payload.value
    },
   
    addAWholeBookChapter : (state, action) =>{
      state.subjectChapters.push(action.payload)
    },
    removeClassSubjects : (state, action) =>{
      state.subjectChapters.splice(action.payload, 1);
    },
  },
})

// Action creators are generated for each case reducer function
export const { addAllSyllabus,addNewClassSubjectsBookChapter, addAWholeBookChapter, removeClassSubjects  } = SyllabusSlice.actions

export default SyllabusSlice.reducer