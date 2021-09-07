import { createSlice } from '@reduxjs/toolkit'

const trendingSlice = createSlice({
    name: 'trending',
    initialState: [],
    reducers: {
        loadTrending: (state, action) => {

        }
    }
})

export const { loadTrending } = trendingSlice.actions;
export const trendingSelector = (state) => state.trendingSelector;
export default trendingSlice.reducer