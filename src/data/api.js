const baseURL = "https://api.themoviedb.org/3/movie/popular";

const options = {
	method: "GET",
	headers: {
		accept: "application/json",
		authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
	}
};

export const getMovies = async () => {
	try {
		const response = await fetch(baseURL, options);

		if (!response.ok) {
			throw new Error("Failed to fetch movie data");
		}

		const data = await response.json();
		return data.results;
	} catch (error) {
		console.error("Error fetching movie data:", error);
		throw error;
	}
};
