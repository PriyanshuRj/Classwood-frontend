import { createSlice } from '@reduxjs/toolkit'

export const timeTableSlice = createSlice({
  name: 'timeTable',
  initialState: {
    timeTableRows: [
      [
        {
          subject : {
            name: "No Subject Selected",
          },
          teacher : "No Teacher",
          start : {
            hour : "0",
            minute : "0",
          },
          end : {
            hour : "0",
            minute : "0",
          }
        }
        
      ],
      [
        {
          subject : {
            name: "No Subject Selected",
          },
          teacher : "No Teacher",
          start : {
            hour : "0",
            minute : "0",
          },
          end : {
            hour : "0",
            minute : "0",
          }
        }
        
      ],
      [
        {
          subject : {
            name: "No Subject Selected",
          },
          teacher : "No Teacher",
          start : {
            hour : "0",
            minute : "0",
          },
          end : {
            hour : "0",
            minute : "0",
          }
        }
        
      ],
      [
        {
          subject : {
            name: "No Subject Selected",
          },
          teacher : "No Teacher",
          start : {
            hour : "0",
            minute : "0",
          },
          end : {
            hour : "0",
            minute : "0",
          }
        }
        
      ],
      [
        {
          subject : {
            name: "No Subject Selected",
          },
          teacher : "No Teacher",
          start : {
            hour : "0",
            minute : "0",
          },
          end : {
            hour : "0",
            minute : "0",
          }
        }
        
      ],
      [
        {
          subject : {
            name: "No Subject Selected",
          },
          teacher : "No Teacher",
          start : {
            hour : "0",
            minute : "0",
          },
          end : {
            hour : "0",
            minute : "0",
          }
        }
        
      ]
    ]
  
  },
  reducers: {
    addTimetableRow : (state, action) =>{
        state.timeTableRows[action.payload].push({
          subject : {
            name: "No Subject Selected",
          },
          teacher : "No Teacher",
          start : {
            hour : "0",
            minute : "0",
          },
          end : {
            hour : "0",
            minute : "0",
          }
        });
      
     
    },
    refreshTimetableRow : (state, action) =>{
        state.timeTableRows = [
          [
            {
              subject : {
                name: "No Subject Selected",
              },
              teacher : "No Teacher",
              start : {
                hour : "0",
                minute : "0",
              },
              end : {
                hour : "0",
                minute : "0",
              }
            }
            
          ],
          [
            {
              subject : {
                name: "No Subject Selected",
              },
              teacher : "No Teacher",
              start : {
                hour : "0",
                minute : "0",
              },
              end : {
                hour : "0",
                minute : "0",
              }
            }
            
          ],
          [
            {
              subject : {
                name: "No Subject Selected",
              },
              teacher : "No Teacher",
              start : {
                hour : "0",
                minute : "0",
              },
              end : {
                hour : "0",
                minute : "0",
              }
            }
            
          ],
          [
            {
              subject : {
                name: "No Subject Selected",
              },
              teacher : "No Teacher",
              start : {
                hour : "0",
                minute : "0",
              },
              end : {
                hour : "0",
                minute : "0",
              }
            }
            
          ],
          [
            {
              subject : {
                name: "No Subject Selected",
              },
              teacher : "No Teacher",
              start : {
                hour : "0",
                minute : "0",
              },
              end : {
                hour : "0",
                minute : "0",
              }
            }
            
          ],
          [
            {
              subject : {
                name: "No Subject Selected",
              },
              teacher : "No Teacher",
              start : {
                hour : "0",
                minute : "0",
              },
              end : {
                hour : "0",
                minute : "0",
              }
            }
            
          ]
        ]
         
    },
    updateTimetableSell : (state, action) =>{
      if(action.payload.type==="subject"){

        state.timeTableRows[action.payload.day][action.payload.columnIndex][action.payload.type] = action.payload.value;
        state.timeTableRows[action.payload.day][action.payload.columnIndex].teacher = action.payload.value.teacher;
        
      }
      else {
        state.timeTableRows[action.payload.day][action.payload.columnIndex][action.payload.type][action.payload.HorM] = action.payload.value;
        
      }
    },
    
   
  },
})

// Action creators are generated for each case reducer function
export const { addTimetableRow, refreshTimetableRow, updateTimetableSell  } = timeTableSlice.actions

export default timeTableSlice.reducer