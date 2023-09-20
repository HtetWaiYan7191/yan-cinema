import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";

const initialState = {
    loading : false,
    error : false,
    value: [],
    categories: [],
}
const MOVIEAPI = 'https://api.tvmaze.com/show';
export const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
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
    reducers:{
        setFavorite: (state, action) => {
            console.log(action.payload)
            const newState = state.value.map((movie) => {
                if(movie.id !== action.payload) return movie
                return ({...movie, favorite: true})
            });
            state.value = newState;
        },

        removeFavorite: (state, action) => {
            console.log(action.payload)
            const newState = state.value.map((movie) => {
                if(movie.id !== action.payload) return movie
                return ({...movie, favorite: false})
            })
            state.value = newState;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchMovies.fulfilled, (state, action) => {
            state.loading = false;
            state.value = action.payload.map((movie) => ({
                id: movie.id,
                name: movie.name,
                category: movie.genres,
                summary: movie.summary,
                image: movie.image,
                rating: movie.rating,
                official: movie.rating,
                language: movie.language,
                favorite: false,
            }));
            state.error = "";
            const genreSet = new Set();
            state.value.forEach((movie) => {
                movie.category.forEach((category) => {
                    genreSet.add(category)
                });
            });
            state.categories = [...genreSet];
        });
    }
    
})

export default movieSlice.reducer
export const {setFavorite, removeFavorite} = movieSlice.actions;