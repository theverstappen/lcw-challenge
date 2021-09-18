import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isFavPage: false
}

export const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    setPage: (state, action) => {
      if(action.payload !== undefined)
        state.isFavPage = action.payload
      else {
        state.isFavPage = !state.isFavPage
      }
    }
  },
})

// Action creators are generated for each case reducer function
export const { setPage } = pageSlice.actions

export const pageSelector = state => state.isFavPage

export default pageSlice.reducer
