import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    error: "",
    value: [],
}

const TRENDINGAPI = "https://api.tvmaze.com/shows/180/alternatelists";
export const fetchTrending = createAsyncThunk('trending/fetchTrending', async () => {
    console.log("fetching trending api");
    const response = await fetch(TRENDINGAPI)
    if(!response.ok) {
        throw new Error("Fail to fetch trending movies");
    }
    const data = await response.json();
    console.log(data);
    return data;
})

const trendingSlice = createSlice({
    name: 'trending',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchTrending.fulfilled, (state, action) => {
            state.loading = false;
            state.error = "";
            state.value = action.payload;
        })
    }
    

})

export default trendingSlice.reducer