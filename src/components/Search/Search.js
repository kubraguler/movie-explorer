import { useState } from "react";

const Search = () => {
	const [query, setQuery] = useState("");

	return (
		<div className="col-start-2 col-span-2 max-w-xl">
			<input
				className="bg-zinc-300 py-4 px-20 w-full shrink-0 rounded-full text-xl font-normal text-center text-black placeholder:text-black"
				type="text"
				placeholder="🔍 Search a movie or a series"
				value={query}
				onChange={(e) => setQuery(e.target.value)}
			/>
		</div>
	);
};

export default Search;
