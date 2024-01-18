import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import MovieFeedPage from "./pages/MovieFeedPage";
import MovieDetailPage from "./pages/MovieDetailPage";
import "./App.css";

function App() {
	return (
		<div className="App">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<Header />
				<Routes>
					<Route path="/" element={<MovieFeedPage />} />
					<Route path="/movies/:id" element={<MovieDetailPage />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
