import Search from "../Search/Search";

const Header = () => {
	return (
		<header className="grid grid-cols-3 items-center py-10">
			<h1 className="flex flex-col items-start w-32 text-4xl font-semibold">
				<span>The </span>
				<span>Movie </span>
				<span>Tracker</span>
			</h1>
			<Search />
		</header>
	);
};

export default Header;
