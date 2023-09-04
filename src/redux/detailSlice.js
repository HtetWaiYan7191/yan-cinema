import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    error: '',
    value: []
}

const detailSlice = createSlice({
    name: 'detail',
    initialState,
    reducers: {},
    
})

export default detailSlice.reducer;