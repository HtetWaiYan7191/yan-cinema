import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    error : '',
    value: {},
    seasons: [],
}

const BASEAPI = 'https://api.tvmaze.com/shows'
export const fetchDetailMovie = createAsyncThunk('detail/fetchDetailMovie', async (id) => {
    const response = await fetch(`${BASEAPI}/${id}`)
    if(!response.ok) {
        throw new Error("Fail to fetch movies")
    }
    const data = await response.json();
    return data;
})

export const fetchDetailSeason = createAsyncThunk('detail/fetchDetailSeasons', async (id) => {
    const response = await fetch(`${BASEAPI}/${id}/seasons`);
    if(!response.ok) {
        throw new Error ("fail to fetch seasons");
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
                language: action.payload.language,
                category: action.payload.genres,
                status: action.payload.status,
                premiered: action.payload.premiered,
                ended: action.payload.ended,
                officialSite: action.payload.officialSite,
                rating: action.payload.rating,
                image: action.payload.image,
                summary: action.payload.summary,
            }
        });
        builder.addCase(fetchDetailSeason.fulfilled, (state, action) => {
            state.loading = false;
            state.error = '';
            state.seasons = action.payload.map((movie) => ({
                id: movie.id,
                number: movie.number,
                episodes: movie.episodeOrder,
            }))
            console.log(state.seasons)
        })

    }

})

export default detailSlice.reducer;