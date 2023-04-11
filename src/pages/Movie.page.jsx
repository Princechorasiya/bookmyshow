import React, { useEffect, useState, useContext } from "react";
import MovieLayoutHoc from "../layouts/Movie.layout";
import { useParams } from "react-router-dom";
import axios from "axios";
import { MovieContext } from "../context/Movie.context";
import Slider from "react-slick";
import { FaCcVisa, FaCcApplePay } from "react-icons/fa";
import PosterSlider from "../components/PosterSlider/PosterSlider.Component";
import MovieHero from "./../components/movieHero/MovieHero.Component";
import Cast from "../components/Cast/Cast.Component";

// axios.defaults.params = {};
// axios.defaults.params["?api_key"] = process.env.REACT_APP_API_KEY;
const MoviePage = () => {
	// console.log(MovieContext);
	const { id } = useParams();
	const { movie, setMovie } = useContext(MovieContext);

	const [cast, setCast] = useState();
	const [similarMovies, setSimilarMovies] = useState();
	const [recommendedMovies, setRecommendedMovies] = useState();
	// console.log(movie);

	useEffect(() => {
		const requestCast = async () => {
			const getCast = await axios.get(`/${id}/credits`);
			setCast(getCast.data.cast);
			console.log(getCast.data.cast);
		};
		requestCast();
	}, [id]);

	useEffect(() => {
		const requestSimilarMovies = async () => {
			const getSimilarMovies = await axios.get(`/${id}/similar`);
			setSimilarMovies(getSimilarMovies.data.results);
			// console.log(getSimilarMovies);
		};
		requestSimilarMovies();
	}, [id]);

	useEffect(() => {
		const requestRecommendedMovies = async () => {
			const getRecommendedMovies = await axios.get(`/${id}/recommendations`);
			setRecommendedMovies(getRecommendedMovies.data.results);
			// console.log(getRecommendedMovies);
		};
		requestRecommendedMovies();
	}, [id]);

	useEffect(() => {
		const requestXclusiveMovies = async () => {
			const getXclusiveMovies = await axios.get(`/${id}`);
			setMovie(getXclusiveMovies.data);
			// console.log(getXclusiveMovies);
		};
		requestXclusiveMovies();
	}, [id]);
	const settingCast = {
		infinite: false,
		speed: 500,
		slidesToShow: 4,
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 1024,
				setting: {
					slidesToShow: 4,
					slidesToScroll: 4,
				},
			},
			{
				breakpoint: 600,
				setting: {
					slidesToShow: 2,
					slidesToScroll: 3,
				},
			},
			{
				breakpoint: 480,
				setting: {
					slidesToShow: 1,
					slidesToScroll: 2,
				},
			},
		],
	};
	const settings = {
		infinite: false,
		speed: 500,
		slidesToShow: 4,
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 1024,
				setting: {
					slidesToShow: 4,
					slidesToScroll: 4,
				},
			},
			{
				breakpoint: 600,
				setting: {
					slidesToShow: 2,
					slidesToScroll: 3,
				},
			},
			{
				breakpoint: 480,
				setting: {
					slidesToShow: 1,
					slidesToScroll: 2,
				},
			},
		],
	};
	return (
		<>
			<MovieHero />
			<div className="my-12 container px-4 lg-ml-20 lg:w-2/1">
				<div className="flex flex-col items-start gap-3">
					<h1 className="text-gray-800 font-bold gap-3">About the Movie</h1>
					<p>{movie.overview}</p>
				</div>

				<div className="my-8">
					<hr />
				</div>

				<div className="my-8">
					<h2 className="text-gray-800 font-bold text-2xl mb-3">
						Applicable Offers
					</h2>

					<div className="flex flex-col gap-3 lg:flex-row lg:w-2/4">
						<div className="flex items-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md">
							<div className="w-8 h-8">
								<FaCcVisa className="w-full h-full" />
							</div>

							<div className="flex flex-col items-start">
								<h3 className="text-gray-700 text-xl font-bold ">
									Visa Stream Offer
								</h3>
								<p className="text-gray-600">
									Get 75% off upto INR 200 on all RuPay Card* on BookMyShow
									Stream
								</p>
							</div>
						</div>

						<div className="flex items-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md">
							<div className="w-8 h-8">
								<FaCcApplePay className="w-full h-full" />
							</div>

							<div className="flex flex-col items-start">
								<h3 className="text-gray-700 text-xl font-bold ">Film Pass</h3>
								<p className="text-gray-600">
									Get 75% off upto INR 200 on all RuPay Card* on BookMyShow
									Stream
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className="my-8">
					<hr />
				</div>

				{/* cast and crew info  */}
				<div className="my-8">
					<PosterSlider
						config={settings}
						title="Recommended Movies"
						posters={recommendedMovies}
						isDark={false}
					/>
				</div>

				<div className="my-8">
					<hr />
				</div>

				{/* cast slider  */}

				<div className="my-8">
					<h2 className="text-gray-800 font-bold text-2xl mb-4">
						Cast and Crew
					</h2>
					<Slider {...settingCast}>
						{cast?.map((castData) => (
							<Cast
								image={castData.profile_path}
								castName={castData.original_name}
								role={castData.character}
							/>
						))}
					</Slider>
				</div>

				<div className="my-8">
					<hr />
				</div>

				<div className="my-8">
					<PosterSlider
						config={settings}
						title="BMS XCLUSIVE Movies"
						posters={recommendedMovies}
						isDark={false}
					/>
				</div>

				{/* recommendedMovies  */}
			</div>
		</>
	);
};

export default MovieLayoutHoc(MoviePage);
