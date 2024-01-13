import Loading from "../Loading/Loading.js";
import MovieItem from "../MovieItem/MovieItem.js";

const MovieList = ({ loading, movies }) => {
	return (
		<div className="max-w-md- mx-auto overflow-hidden py-8">
			{loading && <Loading />}
			<ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-5 gap-y-8 list-none p-0 m-0">
				{movies && movies.map((movie) => <MovieItem movie={movie} key={movie.id} />)}
			</ul>
		</div>
	);
};

export default MovieList;
