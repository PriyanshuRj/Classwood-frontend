import { createSlice } from '@reduxjs/toolkit'

export const timeTableSlice = createSlice({
  name: 'timeTable',
  initialState: {


    timeTableRows: [[
        {
          name: "No Subject Selected",
        },
        {
          name: "No Subject Selected",
        },
        {
          name: "No Subject Selected",
        },
        {
          name: "No Subject Selected",
        },
        {
          name: "No Subject Selected",
        },
        {
          name: "No Subject Selected",
        },
      ]],
      startAndEndTime : [{start : {
        hour : "",
        minute : "",
        ampm : "",
      }, end : {
        hour : "",
        minute : "",
        ampm : "",
      }}]
    
  },
  reducers: {
    addTimetableRow : (state, action) =>{
        state.timeTableRows.push([
            {
              name: "No Subject Selected",
            },
            {
              name: "No Subject Selected",
            },
            {
              name: "No Subject Selected",
            },
            {
              name: "No Subject Selected",
            },
            {
              name: "No Subject Selected",
            },
            {
              name: "No Subject Selected",
            },
          ]);
       state.startAndEndTime.push({start : {
        hour : "",
        minute : "",
        ampm : "",
      }, end : {
        hour : "",
        minute : "",
        ampm : "",
      }})
     
    },
    refreshTimetableRow : (state, action) =>{
        state.timeTableRows = [[
            {
              name: "No Subject Selected",
            },
            {
              name: "No Subject Selected",
            },
            {
              name: "No Subject Selected",
            },
            {
              name: "No Subject Selected",
            },
            {
              name: "No Subject Selected",
            },
            {
              name: "No Subject Selected",
            },
          ]];
          state.startAndEndTime = [{start : {
            hour : "",
            minute : "",
            ampm : "",
          }, end : {
            hour : "",
            minute : "",
            ampm : "",
          }}];
    },
    updateTimetableSell : (state, action) =>{
        state.timeTableRows[action.payload.rowIndex][action.payload.columnIndex] = action.payload.value;
    },
    updateTimeFrame : (state, action)=>{
        state.startAndEndTime[action.payload.rowIndex][action.payload.startEnd][action.payload.timeType] = action.payload.value;
    }
   
  },
})

// Action creators are generated for each case reducer function
export const { addTimetableRow, refreshTimetableRow, updateTimetableSell, updateTimeFrame } = timeTableSlice.actions

export default timeTableSlice.reducer