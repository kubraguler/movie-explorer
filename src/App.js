import { useState, useEffect } from "react";
import { getMovies } from "./data/api";
import "./App.css";

function App() {
	const [movies, setMovies] = useState([]);

	const fetchMovies = async () => {
		try {
			const data = await getMovies();
			setMovies(data);
		} catch (error) {
			console.error("Error fetching movies:", error);
		}
	};

	useEffect(() => {
		fetchMovies();
	}, []);

	return (
		<div className="App">
			<h1 className="text-3xl font-bold underline">Hello world!</h1>
			<ul className="movies-list">{movies && movies.map((movie) => <li key={movie.id}>{movie.title}</li>)}</ul>
		</div>
	);
}

export default App;
