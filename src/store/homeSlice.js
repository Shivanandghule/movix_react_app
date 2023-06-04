import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  urls:{},
  genres:{},
}

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    getApiConfiguration :(state,action)=>{
        state.urls=action.payload;
    },
    getGenres:(state,action)=>{
        state.genres=action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { getApiConfiguration,getGenres } = homeSlice.actions

export default homeSlice.reducer