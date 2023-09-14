import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    error : '',
    value: {},
}

const BASEAPI = ' https://api.tvmaze.com/shows'
export const fetchDetailMovie = createAsyncThunk('detail/fetchDetailMovie', async (id) => {
    const response = await fetch(`${BASEAPI}/${id}`)
    if(!response.ok) {
        throw new Error("Fail to fetch movies")
    }
    const data = await response.json();
    return data;
})


const detailSlice = createSlice({
    name: 'detail',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(fetchDetailMovie.fulfilled, (state, action) => {
            state.loading = false;
            state.error = '';
            state.value = {
                id: action.payload.id,
                name: action.payload.name,
                category: action.payload.genres,
                status: action.payload.status,
                premiered: action.payload.premiered,
                ended: action.payload.ended,
                officialSite: action.payload.officialSite,
                rating: action.payload.rating,
                image: action.payload.image,
                summary: action.payload.summary,
            }
        })
    }

})

export default detailSlice.reducer;