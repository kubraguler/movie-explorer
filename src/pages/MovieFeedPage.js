import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../redux/reducers/moviesSlice.js";
import { infiniteScroll } from "../utils/utils.js";
import MovieCard from "../components/MovieCard/MovieCard.js";
import SpinnerView from "../components/SpinnerView/SpinnerView.js";

const MovieFeedPage = () => {
	const dispatch = useDispatch();
	const { movies, page, loading, error } = useSelector((state) => state.movies);

	useEffect(() => {
		dispatch(getMovies(page));
	}, [dispatch]);

	useEffect(() => {
		return infiniteScroll(loading, () => {
			dispatch(getMovies(page + 1));
		});
	}, [loading]);

	return (
		<div className="max-w-md- mx-auto overflow-hidden py-8">
			{error && <h3>{error}</h3>}

			<ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-5 gap-y-8 list-none p-0 m-0">
				{movies && movies.map((movie, idx) => <MovieCard movie={movie} key={idx} />)}
			</ul>

			{loading && <SpinnerView />}
		</div>
	);
};

export default MovieFeedPage;
