import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';



export const loadComments = createAsyncThunk(
    'comments/loadComments', async (url) => {
        const response = await fetch(url);
        const json = await response.json();
        return json[1].data.children;
    }
)

const commentsSlice = createSlice({
    name: 'comments',
    initialState: {
        isLoading: false,
        hasFailed: false,
        comments: []
    },
    extraReducers: {
        [loadComments.pending]: (state, action) => {
            state.hasFailed = false;
            state.isLoading = true;
        },
        [loadComments.fulfilled]: (state, action) => {
            state.comments = action.payload;
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
export default commentsSlice.reducer;