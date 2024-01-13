import { useState, useEffect } from "react";
import { fetchMoviesWithDelay, infiniteScroll } from "./utils/utils";
import MovieList from "./components/MovieList/MovieList";
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
				<MovieList loading={loading} movies={movies} />
			</div>
		</div>
	);
}

export default App;
