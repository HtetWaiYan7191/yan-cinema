import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";

const initialState = {
    loading : false,
    error : false,
    value: []
}
const MOVIEAPI = 'https://api.tvmaze.com/show';
export const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
    console.log("fetching api")
    const response = await fetch(MOVIEAPI)
    if(!response.ok) {
        throw new Error("Fail to fetch movies")
    }
    const data = await response.json();
    return data;
})

const movieSlice = createSlice({
    name: 'movie',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchMovies.fulfilled, (state, action) => {
            state.loading = false;
            state.value = action.payload;
            state.error = "";
        })
    }
    
})

export default movieSlice.reducer