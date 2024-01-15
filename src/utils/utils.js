export const infiniteScroll = (loading, callback) => {
	const onScroll = () => {
		const { scrollTop, clientHeight, scrollHeight } = document.documentElement;

		if (scrollTop + clientHeight >= scrollHeight && !loading) {
			callback();
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
