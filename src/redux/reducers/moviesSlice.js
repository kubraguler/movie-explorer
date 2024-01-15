import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const baseURL = "https://api.themoviedb.org/3/movie/popular";

const options = {
	method: "GET",
	headers: {
		accept: "application/json",
		authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
	}
};

export const getMovies = createAsyncThunk("movies/getMovies", async (page = 1) => {
	const response = await fetch(`${baseURL}?page=${page}`, options);
	const data = await response.json();
	return data;
});

const moviesSlice = createSlice({
	name: "movies",
	initialState: {
		movies: [],
		loading: false,
		error: null,
		page: 1,
		totalPage: 1
	},
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getMovies.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(getMovies.fulfilled, (state, action) => {
			state.loading = false;
			state.movies = [...state.movies, ...action.payload.results];
			state.page = action.payload.page;
			state.totalPage = action.payload.total_pages;
		});
		builder.addCase(getMovies.rejected, (state, error) => {
			state.loading = false;
			state.error = error.message;
		});
	}
});

export default moviesSlice.reducer;
