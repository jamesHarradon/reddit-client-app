import { configureStore } from '@reduxjs/toolkit';
//import slices here
import trendingSlice from '../Features/trending/trendingSlice'


export default configureStore({
    reducer: {
        trending: trendingSlice

    }
})