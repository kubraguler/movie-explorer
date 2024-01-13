const MovieItem = ({ movie }) => {
	const basePosterURL = "https://image.tmdb.org/t/p/original";
	const { id, title, poster_path } = movie;

	return (
		<li className="rounded-2xl shadow-md w-full sm:w-160 md:w-190" key={id}>
			<img className="rounded-2xl" src={`${basePosterURL}/${poster_path}`} alt={title} />
		</li>
	);
};

export default MovieItem;
