import { useLocation } from "react-router-dom";
import { formatNumber } from "../utils/utils";

const MovieDetail = () => {
	const location = useLocation();
	const movie = location.state;
	const basePosterURL = "https://image.tmdb.org/t/p/original";

	return (
		<div className="flex flex-col lg:flex-row items-center lg:items-start space-y-4 lg:space-y-0 lg:space-x-4">
			<div className="flex-shrink-0">
				<img className="rounded-2xl max-w-full lg:max-w-48" src={`${basePosterURL}/${movie.poster_path}`} alt={movie.title} />
			</div>
			<div className="flex-grow">
				<h3 className="text-lg font-semibold">{movie.title}</h3>
				<p className="text-gray-600">{movie.overview}</p>
				<p className="text-gray-600">IMDB Rating</p>
				<p className="text-gray-600">⭐ {movie.vote_average.toFixed(1)} / 10</p>
				<p className="text-gray-600">{formatNumber(movie.vote_count)} Reviews</p>
			</div>
		</div>
	);
};

export default MovieDetail;
