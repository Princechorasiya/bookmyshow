import React, { useContext } from "react";
import { BiChevronDown, BiMenu, BiSearch, BiShareAlt } from "react-icons/bi";
import { MovieContext } from "../../context/Movie.context";

const NavbarSm = () => {
	const { movie, setMovie } = useContext(MovieContext);
	return (
		<>
			<div className="text-gray-700 flex items-center justify-between">
				<div className="">
					<h3 className="text-xl font-bold">{movie.original_title}</h3>
				</div>
			</div>
			<div className="w-8 h-8">
				<BiShareAlt className="w-full h-full" />
			</div>
		</>
	);
};

const NavLg = () => {
	return (
		<>
			<div className="container flex mx-auto px-4 items-center justify-between">
				<div className="flex items-center w-1/2 gap-3">
					<div className="w-10 h-10">
						<img src="https://seeklogo.com/images/B/bookmyshow-logo-31BC3C7354-seeklogo.com.png" alt="logo" className="h-full min-w-full" />
					</div>
					<div className="w-full flex gap-3 bg-white px-3 py-1 rounded-md">
						<BiSearch />

						<input
							type="search"
							name=""
							id=""
							className="w-full bg-transparent border-none focus:outline-none"
							placeholder="Search for movies ,events ,plays etc "
						/>
					</div>
				</div>

				<div className="flex items-center gap-3">
					<span className="text-gray-200 text-base flex items-center cursor-pointer hover:text-white">
						Phagwara
						<BiChevronDown />
					</span>
					<button className="bg-red-600 text-white px-2 py-1 text-sm rounded">
						Sign In
					</button>

					<div className="w-8 h-8 text-white">
						<BiMenu className="w-full h-full" />
					</div>
				</div>
			</div>
		</>
	);
};
const MovieNavBar = () => {
	// const [movie, setMovie] = useContext(MovieContext);
	return (
		<>
			<nav className="bg-white border-b-2 lg:border-b-0 lg:bg-darkBackground-700">
				{/* small and md  */}
				<div className="md:hidden">
					<NavbarSm />
				</div>

				<div className="hidden md:flex lg:flex">
					<NavLg />
				</div>
			</nav>
		</>
	);
};

export default MovieNavBar;
