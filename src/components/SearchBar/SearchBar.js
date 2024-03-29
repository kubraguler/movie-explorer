import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import { setQuery, searchMovies } from "../../redux/reducers/moviesSlice";

const SearchBar = () => {
	const dispatch = useDispatch();
	const { query } = useSelector((state) => state.movies);

	const handleSearch = () => {
		if (query === "") {
			return;
		}
		dispatch(searchMovies({ query, page: 1 }));
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
					className="bg-zinc-300 py-4 w-full shrink-0 rounded-full text-xl font-normal text-center text-black placeholder:text-black text-sm md:text-base md:py-8  md:px-8 lg:px-12 xl:px-16"
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
