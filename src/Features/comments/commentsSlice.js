import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';



export const loadComments = createAsyncThunk(
    'comments/loadComments', async (url) => {
        console.log(url);
        const response = await fetch(url);
        const json = await response.json();
        console.log(json)
        return json;
    }
)

const commentsSlice = createSlice({
    name: 'comments',
    initialState: {
        isLoading: false,
        hasFailed: false,
        comments: [],
        mainPost: []
    },
    extraReducers: {
        [loadComments.pending]: (state, action) => {
            state.hasFailed = false;
            state.isLoading = true;
        },
        [loadComments.fulfilled]: (state, action) => {
            state.mainPost = action.payload[0].data.children;
            state.comments = action.payload[1].data.children;
            state.hasFailed = false;
            state.isLoading = false;
        },
        [loadComments.rejected]: (state, action) => {
            state.hasFailed = true;
            state.isLoading = false;
        }
    }
})


export const selectIsLoading = (state) => state.comments.isLoading;
export const selectHasFailed = (state) => state.comments.hasFailed;
export const selectComments = (state) => state.comments.comments;
export const selectMainPost = (state) => state.comments.mainPost;
export default commentsSlice.reducer;