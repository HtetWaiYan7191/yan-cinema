import { configureStore } from '@reduxjs/toolkit'
import detailSliceReducer from './detailSlice'
import movieSliceReducer from './movieSlice'
import trendingSliceReducer from './trendingSlice'

const store = configureStore({
    reducer: {
        detail: detailSliceReducer,
        movie: movieSliceReducer,
        trending: trendingSliceReducer,
    }
})

export default store