import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";

const initialState = {
    loading : false,
    error : false,
    value: []
}

const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers:{}
})

export default movieSlice.reducer