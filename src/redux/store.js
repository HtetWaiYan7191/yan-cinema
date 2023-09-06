import { configureStore } from '@reduxjs/toolkit'
import detailSliceReducer from './detailSlice'
import movieSliceReducer from './movieSlice'

const store = configureStore({
    reducer: {
        detail: detailSliceReducer,
        movie: movieSliceReducer,
    }
})

export default store