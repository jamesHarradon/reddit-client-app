import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



export const loadTopic = createAsyncThunk('topic/loadTopic', async (subredditName) => {
    const response = await fetch(`https://www.reddit.com/r/${subredditName}`);
    const json= await response.json();
    console.log(json.data.children);
    return json.data.children;

})

const topicSlice = createSlice({
    name: 'topic',
    initialState: {
        isLoading: false,
        hasFailed: false,
        topic: [],
    },
    extraReducers: {
        [loadTopic.pending]: (state, action) => {
            state.isLoading = true;
            state.hasFailed = false;
        },
        [loadTopic.fulfilled]: (state, action) => {
            state.topics = action.payload;
            state.isLoading = false;
            state.hasFailed = false;
        },
        [loadTopic.rejected]: (state, action) => {
            state.isLoading = false;
            state.hasFailed = true;
        }
    }
})

export const selectTopic = (state) => state.topic.topic;
export const selectIsLoading = (state) => state.topic.isLoading;
export const selectHasFailed = (state) => state.topic.hasFailed;

export default topicSlice.reducer;

