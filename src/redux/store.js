import { configureStore } from '@reduxjs/toolkit'
import detailSliceReducer from './detailSlice'

const store = configureStore({
    reducer: {
        detail: detailSliceReducer,
    }
})

export default store