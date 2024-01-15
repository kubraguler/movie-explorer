import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
	const basePosterURL = "https://image.tmdb.org/t/p/original";
	const { id, title, poster_path } = movie;

	return (
		<li className="rounded-2xl shadow-md w-full sm:w-160 md:w-190" key={id}>
			<Link to={`/movies/${id}`} state={movie}>
				<img className="rounded-2xl" src={`${basePosterURL}/${poster_path}`} alt={title} />
			</Link>
		</li>
	);
};

export default MovieCard;
