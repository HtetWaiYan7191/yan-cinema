import { configureStore } from '@reduxjs/toolkit'
import detailSliceReducer from './detailSlice'
import movieSliceReducer from './movieSlice'
import trendingSliceReducer from './trendingSlice'
import castSliceReducer from './castSlice'

const store = configureStore({
    reducer: {
        detail: detailSliceReducer,
        movie: movieSliceReducer,
        trending: trendingSliceReducer,
        cast: castSliceReducer,
    }
})

export default store