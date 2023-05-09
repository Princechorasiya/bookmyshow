import React, { useContext, useState } from "react";
import { MovieContext } from "../../context/Movie.context";
import Payment from "../PaymentModal/Payment.Component";
import { Link } from "react-router-dom";

const MovieInfo = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [price, setPrice] = useState(0);
	const { movie } = useContext(MovieContext);

	const genres = movie.genres?.map(({ name }) => name).join(", ");

	const rentMovie = () => {
		setIsOpen(true);
		setPrice(69);
	};

	const buyMovie = () => {
		setIsOpen(true);
		setPrice(999);
	};
	return (
		<>
			<Payment setIsOpen={setIsOpen} price={price} isOpen={isOpen} />
			<div className="flex flex-col gap-3 px-8 my-3">
				<h1 className="text-white text-4xl font-bold">
					{movie.original_title}
				</h1>
				<div className="text-white flex flex-col gap-2 ">
					<h4>9.9k Ratings</h4>
					<h4>English,Hindi,Telgu,Tamil</h4>
					<h4>
						{movie.runtime} min | {genres}
					</h4>
				</div>

				<div className="flex items-center gap-3 md:px-4 md:w-screen text-xl px-4">
					<button
						onClick={rentMovie}
						className="bg-red-500 px-3  py-3 text-white font-semibold rounded-lg "
					>
						Rent $69
					</button>
					<button
						onClick={buyMovie}
						className="bg-red-500 px-3 py-3 text-white font-semibold rounded-lg "
					>
						Buy $999
					</button>
					<Link to="/plays">
					<button
						
						className="bg-red-500 px-3 py-3 text-white font-semibold rounded-lg "
					>
						Plays
						</button>
						</Link>
				</div>
			</div>
		</>
	);
};

export default MovieInfo;
