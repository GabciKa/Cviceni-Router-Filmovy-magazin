import React from 'react';
import MovieList from '../MovieList';
import { Outlet } from 'react-router-dom';
import "./style.css"


const Movies = () => {
	return (
		<>
            <p>V kinech právě hrají:</p>

            <div className="movies">
                <MovieList />
                <Outlet />
            </div>
        </>
	);
}

export default Movies;