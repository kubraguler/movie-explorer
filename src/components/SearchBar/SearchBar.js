import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import { setQuery, searchMovies } from "../../redux/reducers/moviesSlice";

const SearchBar = () => {
	const dispatch = useDispatch();
	const { query, page } = useSelector((state) => state.movies);

	const handleSearch = () => {
		dispatch(searchMovies({ query, page }));
	};

	const debouncedHandleSearch = _.debounce(handleSearch, 500);

	useEffect(() => {
		debouncedHandleSearch();
		return () => debouncedHandleSearch.cancel();
	}, [query]);

	return (
		<>
			<div className="col-start-2 col-span-2 max-w-xl">
				<input
					className="bg-zinc-300 py-4 px-20 w-full shrink-0 rounded-full text-xl font-normal text-center text-black placeholder:text-black"
					type="text"
					placeholder="🔍 Search a movie or a series"
					value={query}
					onChange={(e) => dispatch(setQuery(e.target.value))}
				/>
			</div>
		</>
	);
};

export default SearchBar;
