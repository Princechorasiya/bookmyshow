//create api
// store edit update data access from any other component

import React, { createContext, useState } from "react";

export const MovieContext = createContext();
const MovieProvider = ({ children }) => {
	const [movie, setMovie] = useState({
		id: 0,
		original_title: "",
		overview: "df",
		backdrop_path: "",
		poster_path: "",
	});
	return (
		<MovieContext.Provider value={{ movie, setMovie }}>
			{children}
		</MovieContext.Provider>
	);
};

export default MovieProvider;
