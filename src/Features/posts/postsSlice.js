import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const loadPostsByTerm = createAsyncThunk(
    'posts/loadPostsByTerm', async (term) => {
        const response = await fetch(`https://www.reddit.com/search.json?q=${term}&limit=12`);
        const json = await response.json();
        console.log(json)
        return json.data.children;
    }
)



const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        isLoading: false,
        hasFailed: false,
        posts: [],
        
    },
    
    extraReducers: {
        [loadPostsByTerm.pending]: (state, action) => {
            state.hasFailed = false;
            state.isLoading = true;
        },
        [loadPostsByTerm.fulfilled]: (state, action) => {
            state.posts = action.payload;
            state.hasFailed = false;
            state.isLoading = false;
        },
        [loadPostsByTerm.rejected]: (state, action) => {
            state.hasFailed = true;
            state.isLoading = false;
        }
    }
})


export const selectIsLoading = (state) => state.posts.isLoading;
export const selectHasFailed = (state) => state.posts.hasFailed;
export const selectPosts = (state) => state.posts.posts;
export default postsSlice.reducer;