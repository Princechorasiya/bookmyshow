import React, { useState, useEffect } from "react";

//components
// entertainment
// EntertainmentCardComponents
// HeroCarouselComponent
// PosterSlider
import EntertainmentCardComponents from "../components/Entertainment/EntertainmentCardComponents";
import HeroCarouselComponent from "../components/HeroCarousel/HeroCarouselComponent";
import PosterSlider from "../components/PosterSlider/PosterSlider.Component";
import axios from "axios";

//layout
import DefaultLayoutHoc from "./../layouts/Default.layout";

function HomePage() {
	const [recommendedMovies, setRecommendedMovies] = useState([]);
	const [premierMovies, setPremierMovies] = useState([]);
	const [onlineStreamEvents, setOnlineStreamEvents] = useState([]);

	useEffect(() => {
		const requestTopRatedMovies = async () => {
			const getTopRatedMovies = await axios.get("/top_rated");
			console.log(getTopRatedMovies.data.results);
			setRecommendedMovies(getTopRatedMovies.data.results);
		};
		requestTopRatedMovies();
	}, []);

	useEffect(() => {
		const requestPremierMovies = async () => {
			const getPremierMovies = await axios.get("/popular");
			console.log(getPremierMovies.data.results);
			setPremierMovies(getPremierMovies.data.results);
		};
		requestPremierMovies();
	}, []);

	useEffect(() => {
		const requestOnlineStreamEvents = async () => {
			const getOnlineStreamEvents = await axios.get("/upcoming");
			console.log(getOnlineStreamEvents.data.results);
			setOnlineStreamEvents(getOnlineStreamEvents.data.results);
		};
		requestOnlineStreamEvents();
	}, []);

	return (
		<>
			<HeroCarouselComponent />

			<div className="container mx-auto px-4 md:px-12 my-8 ">
				<h1 className="text-2xl font-bold text-gray-800 sm:ml-3 ml-0 my-3">
					The best of Entertainment
				</h1>
				<EntertainmentCardComponents />
			</div>

			<div className="container mx-auto px-4 md:px-12 my-8">
				<PosterSlider
					title="Recommended Movies"
					subtitle="List of recommended movies"
					posters={recommendedMovies}
					isDark={false}
				/>
			</div>

			<div className="bg-premier-800  py-12">
				<div className="container  mx-auto px-4 md:px-4 my-8 flex flex-col gap-3">
					<div className="hidden md:flex">
						<image src="" alt="rupay" className="w-full h-full" />
					</div>
					<PosterSlider
						title="premiers"
						subtitle="Brand new releases every friday"
						posters={premierMovies}
						isDark={true}
					/>
				</div>
			</div>
			<div className="container mx-auto px-4 md:px-12 my-8 flex-col gap-3">
				<PosterSlider
					title="online streaming events"
					subtitle="online stream events"
					posters={onlineStreamEvents}
					isDark={false}
				/>
			</div>
		</>
	);
}

// api_key = 2d1677fb0559ae0669670e13fd981c35
// access token =eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZDE2NzdmYjA1NTlhZTA2Njk2NzBlMTNmZDk4MWMzNSIsInN1YiI6IjY0MmI4N2ZhYzA0NDI5MDI2YjE0NjllOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.955iGZJpLO-dSBnyKWGsKFHLz3bp53Au2MWSMXQ1L1U

// stie for develpors developers.tmdb
export default DefaultLayoutHoc(HomePage);
