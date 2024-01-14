import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { fetchMoviesWithDelay, infiniteScroll } from "./utils/utils";
import Header from "./components/Header/Header";
import MovieList from "./components/MovieList/MovieList";
import MovieDetail from "./pages/MovieDetail";
import "./App.css";

function App() {
	const [movies, setMovies] = useState([]);
	const [page, setPage] = useState(1);
	const [loading, setLoading] = useState(false);

	const fetchMovies = async () => {
		await fetchMoviesWithDelay(page, setLoading, setMovies, setPage);
	};

	useEffect(() => {
		fetchMovies();
	}, []);

	useEffect(() => {
		return infiniteScroll(loading, fetchMovies);
	}, [loading]);

	return (
		<div className="App">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<Header />
				<Routes>
					<Route path="/" element={<MovieList loading={loading} movies={movies} />} />
					<Route path="/movie/:id" element={<MovieDetail />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
