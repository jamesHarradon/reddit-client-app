import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const loadTrending = createAsyncThunk(
    'trending/loadTrending', async () => {
        const response = await fetch('https://www.reddit.com/hot.json?&limit=6');
        const json = await response.json();
        return json.data.children;
    }
)

const trendingSlice = createSlice({
    name: 'trending',
    initialState: {
        isLoading: false,
        hasFailed: false,
        posts: []
    },
    extraReducers: {
        [loadTrending.pending]: (state, action) => {
            state.hasFailed = false;
            state.isLoading = true;
        },
        [loadTrending.fulfilled]: (state, action) => {
            state.posts = action.payload;
            state.hasFailed = false;
            state.isLoading = false;
        },
        [loadTrending.rejected]: (state, action) => {
            state.hasFailed = true;
            state.isLoading = false;
        }
    }
})


export const selectIsLoading = (state) => state.trending.isLoading;
export const selectHasFailed = (state) => state.trending.hasFailed;
export const selectTrending = (state) => state.trending.posts;
export default trendingSlice.reducer;