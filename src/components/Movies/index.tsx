import { CircularProgress } from "@material-ui/core";
// import { Movie } from '@material-ui/icons';
import React, { useEffect } from "react";
import Movie from "./Movie";
import "./style.css";

import useFetch from "../../useFetch";

type Props = {
  movies: any;
  setMovies: any;
  // setTempMovies: any;
};

type Movie = {
  imdbID: string;
  title: string;
  image: string;
  year: string;
};

const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;


const series = [
  "avengers",
  "fast and furious",
  "iron man",
  "harry potter",
  "batman",
];

const Movies: React.FC<Props> = (props) => {
  useEffect(() => {
    const promises = series.map((series) => {
      return fetch(
        `http://www.omdbapi.com/?s=${encodeURIComponent(
          series
        )}&apikey=${API_KEY}`
      ).then((res) => res.json());
    });
    Promise.all(promises)
      .then((movies: any) => {
        const updatedMovies: Movie[] = movies
          .map((movie: any) => movie.Search)
          .flat(2)
          .map((movie: any) => ({
            title: movie.Title,
            year: movie.Year,
            image: movie.Poster,
            imdb: movie.imdbID,
          }));

        props.setMovies(updatedMovies);
        // props.setTempMovies(updatedMovies);
      })
      .catch((err) => {
        console.log(err);
      });
  },[]);

  if (props.movies.length === 0) {
    return (
      <div className="loader">
        <CircularProgress />
      </div>
    );
  }

  return (
    <div className="movies">
      {props.movies.map((movie: Movie, index: any) => {
        return (
          <Movie
            key={index}
            title={movie.title}
            year={movie.year}
            image={movie.image}
          />
        );
      })}
    </div>
  );
};

export default Movies;
