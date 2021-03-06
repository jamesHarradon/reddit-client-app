import { configureStore } from '@reduxjs/toolkit';
//import slices here
import trendingSlice from '../Features/trending/trendingSlice'
import postsSlice from '../Features/posts/postsSlice';
import topicsSlice from '../Features/topics/topicsSlice';
import commentsSlice from '../Features/comments/commentsSlice';
import topicSlice from '../Features/topic/topicSlice';


export default configureStore({
    reducer: {
        trending: trendingSlice,
        posts: postsSlice,
        topics: topicsSlice,
        comments: commentsSlice,
        topic: topicSlice
    }
})