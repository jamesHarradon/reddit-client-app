import { configureStore } from '@reduxjs/toolkit';
//import slices here
import trendingSlice from '../Features/trending/trendingSlice'
import postsSlice from '../Features/posts/postsSlice';
import topicsSlice from '../Features/topics/topicsSlice';


export default configureStore({
    reducer: {
        trending: trendingSlice,
        posts: postsSlice,
        topics: topicsSlice

    }
})