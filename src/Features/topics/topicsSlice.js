import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const loadSubredditsByTopic = createAsyncThunk(
    'topics/loadSubredditsByTopic', async (topic) => {
        const response = await fetch(`https://www.reddit.com/search.json?q=${topic}&limit=12&type=sr%2Cuser`);
        const json = await response.json();
        console.log(json)
        return json.data.children;
    }
)

const topicsSlice = createSlice({
    name: 'topics',
    initialState: {
        isLoading: false,
        hasFailed: false,
        topics: []
    },
    extraReducers: {
        [loadSubredditsByTopic.pending]: (state, action) => {
            state.isLoading = true;
            state.hasFailed = false;
        },
        [loadSubredditsByTopic.fulfilled]: (state, action) => {
            state.topics = action.payload;
            state.isLoading = false;
            state.hasFailed = false;
        },
        [loadSubredditsByTopic.rejected]: (state, action) => {
            state.isLoading = false;
            state.hasFailed = true;
        }
    }
})

export const selectIsLoading = (state) => state.topics.isLoading;
export const selectHasFailed = (state) => state.topics.hasFailed;
export const selectTopics = (state) => state.topics.topics;
export default topicsSlice.reducer;