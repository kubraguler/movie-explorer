import { getMovies } from "../data/api";

export const fetchMoviesWithDelay = async (page, setLoading, showError, setMovies, setPage) => {
	setLoading(true);
	try {
		console.log("try");
		const data = await getMovies(page);

		setTimeout(() => {
			setLoading(false);
			setMovies((prevMovies) => [...prevMovies, ...data]);
			setPage((prevPage) => prevPage + 1);
		}, 1000);
	} catch (error) {
		console.log("catch");
		console.error("Error fetching movies:", error);
		setLoading(false);
		showError(error.toString());
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

export const formatNumber = (number) => {
	if (number >= 1000) {
		return (number / 1000).toFixed(1) + "k";
	} else {
		return number.toString();
	}
};
