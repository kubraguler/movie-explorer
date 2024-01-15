import { useState, useEffect } from "react";
import { fetchMoviesWithDelay, infiniteScroll } from "../utils/utils.js";
import MovieCard from "../components/MovieCard/MovieCard.js";
import SpinnerView from "../components/SpinnerView/SpinnerView.js";

const MovieFeedPage = () => {
	const [movies, setMovies] = useState([]);

	const [page, setPage] = useState(1);

	const [isLoading, setIsLoading] = useState(false);

	const [errorMessage, setErrorMessage] = useState(null);

	const fetchMovies = async () => {
		await fetchMoviesWithDelay(page, setIsLoading, setErrorMessage, setMovies, setPage);
	};

	useEffect(() => {
		fetchMovies();
	}, []);

	useEffect(() => {
		return infiniteScroll(isLoading, fetchMovies);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isLoading]);

	return (
		<div className="max-w-md- mx-auto overflow-hidden py-8">
			{errorMessage && <h3>{errorMessage}</h3>}

			<ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-5 gap-y-8 list-none p-0 m-0">
				{movies && movies.map((movie, idx) => <MovieCard movie={movie} key={idx} />)}
			</ul>

			{isLoading && <SpinnerView />}
		</div>
	);
};

export default MovieFeedPage;
