import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    error: '',
    casts: [],
}

const BASEAPI = 'https://api.tvmaze.com/shows'
export const fetchCasts  = createAsyncThunk('casts/fetchCasts', async (id) => {
    const response = await fetch(`${BASEAPI}/${id}/cast`)
    if(!response.ok) {
        throw new Error("Fail to fetch casts")
    }
    const data = await response.json();
    return data;
})

const castSlice = createSlice({
    name: 'cast',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCasts.fulfilled, (state,action) => {
            state.casts = action.payload.map((cast) => ({
                id: cast.person.id,
                name: cast.person.name,
                image: cast.person.image.medium,
            }))
        })
    }
})

export default castSlice.reducer;