import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Routes, Route } from "react-router-dom";
import PlayPage from "./pages/Play.page";
import MoviePage from "./pages/Movie.page";
import HomePage from "./pages/Home.page";

// import dotenv from "dotenv";

import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/movie";
axios.defaults.params = {};
// dotenv.config();
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;
function App() {
	return (
		// <div className="App">

		<Routes>
			<Route path="/" element={<HomePage />} />;
			<Route path="/movie/:id" element={<MoviePage />} />;
			<Route path="/plays" element={<PlayPage />} /> ;
		</Routes>
		// </div>
	);
}

export default App;
