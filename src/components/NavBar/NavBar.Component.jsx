import React from "react";
import { BiChevronDown, BiMenu, BiSearch } from "react-icons/bi";

function NavSm() {
	return (
		<>
			<div className="text-white flex items-center        justify-between">
				<h3 className="text-xl font-bold">All Starts Here</h3>
				<span
					text-gray-400
					className="text-xs flex items-center cursor-pointer hover:text-white

			text-gray-400"
				>
					Phagwara
				</span>
			</div>
			<div className="w-8 h-8">
				<button>Use App</button>
				<BiSearch className="w-full h-full" />
			</div>
		</>
	);
}
function NavMd() {
	return (
		<>
			<div className="w-10 h-10">
				<img src="https://seeklogo.com/images/B/bookmyshow-logo-31BC3C7354-seeklogo.com.png" alt="logo" srcset="" className="w-full h-full" />
			</div>
			<div className="w-full flex items-center gap-3 bg-white px-1 py-1 rounded-md">
				<BiSearch />
				<input
					type="search"
					className="w-full bg-transparent border-none focus:outline-none"
				/>
			</div>
		</>
	);
}
function NavLg() {
	return (
		<>
			<div className="container flex mx-auto px-4 items-center justify-between">
				<div className="flex items-center w-1/2 gap-3">
					<div className="w-10 h-10">
						<img src="https://seeklogo.com/images/B/bookmyshow-logo-31BC3C7354-seeklogo.com.png" alt="logo" srcset="" className="w-full h-full" />
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
			</div>
		</>
	);
}

const NavBar = () => {
	return (
		<nav className="bg-darkBackground-700 px-4 py-3">
			{/* small screen   */}
			<div className="md:hidden">
				<NavSm />
			</div>
			<div className=" hidden md:flex lg:hidden">
				<NavMd />
			</div>

			{/* large screen  */}
			<div className="hidden md:hidden lg:flex">
				<NavLg />
			</div>
		</nav>
	);
};

export default NavBar;
