import { createSlice } from '@reduxjs/toolkit'

export const FeesSlice = createSlice({
  name: 'Fees',
  initialState: {
    allFees: [],
  },
  reducers: {
    addFees: (state, action) => {
        console.log("caleed");
      state.allFees.push({
        title : "",
        fees : ""
      });

    },
    updateTitle : (state, action) =>{
        state.allFees[action.payload.index].title = action.payload.value;
    },
    updateValue : (state, action) =>{
        state.allFees[action.payload.index].value = action.payload.value;
    }

  },
})

// Action creators are generated for each case reducer function
export const { addFees, updateTitle, updateValue } = FeesSlice.actions

export default FeesSlice.reducer