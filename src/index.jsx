import React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import MovieList from './components/MovieList'
import Movie from './components/Movie';
import Menu from './components/Menu';

import movies from './movies.js';

import './style.css';
import Home from './components/Home';
import Articles from './components/Articles';
import Movies from './components/Movies';
import Reviews from './components/Reviews';
import NicNevybrano from './components/NicNevybrano';

const App = () => {
  return (
    <BrowserRouter>

      <Menu></Menu>

      <h1>Movies</h1>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/movies" element={<Movies />} >
          <Route index element={<NicNevybrano />}></Route>
          <Route path=":id" element={ <Movie /> } />
        </Route>
        <Route path="/reviews" element={<Reviews />} />
      </Routes>
    </BrowserRouter>
  );
}

render(<App />, document.querySelector('#app'));
