import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const baseURL = "https://api.themoviedb.org/3";

const options = {
	method: "GET",
	headers: {
		accept: "application/json",
		authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
	}
};

const initialState = {
	movies: [],
	loading: false,
	error: null,
	page: 1,
	totalPage: 1,
	query: ""
};

export const getMovies = createAsyncThunk("getPopularMovies", async (page = 1) => {
	const response = await fetch(`${baseURL}/movie/popular?page=${page}`, options);
	const data = await response.json();
	return data;
});

export const searchMovies = createAsyncThunk("searchMovies", async ({ query, page = 1 }) => {
	const response = await fetch(`${baseURL}/search/movie?query=${query}&page=${page}`, options);
	const data = await response.json();
	return data;
});

const moviesSlice = createSlice({
	name: "movies",
	initialState,
	reducers: {
		setQuery: (state, action) => {
			state.query = action.payload;
		}
	},
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
		builder.addCase(searchMovies.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(searchMovies.fulfilled, (state, action) => {
			state.loading = false;
			state.movies = [...state.movies, ...action.payload.results];
			state.page = action.payload.page;
			state.totalPage = action.payload.total_pages;
		});
		builder.addCase(searchMovies.rejected, (state, error) => {
			state.loading = false;
			state.error = error.message;
		});
	}
});

export const { setQuery } = moviesSlice.actions;
export default moviesSlice.reducer;
