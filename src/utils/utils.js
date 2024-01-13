import { getMovies } from "../data/api";

export const fetchMoviesWithDelay = async (page, setLoading, setMovies, setPage) => {
	setLoading(true);
	try {
		const data = await getMovies(page);
		setTimeout(() => {
			setMovies((prevMovies) => [...prevMovies, ...data]);
			setPage((prevPage) => prevPage + 1);
		}, 1000);
	} catch (error) {
		console.error("Error fetching movies:", error);
	} finally {
		setLoading(false);
	}
};

export const infiniteScroll = (loading, fetchMovies) => {
	const onScroll = () => {
		const { scrollTop, clientHeight, scrollHeight } = document.documentElement;

		if (scrollTop + clientHeight >= scrollHeight && !loading) {
			fetchMovies();
		}
	};

	window.addEventListener("scroll", onScroll);

	return () => {
		window.removeEventListener("scroll", onScroll);
	};
};
