import React, { useState } from "react";
import "./App.css";
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Header from "./components/Header";
import Movies from "./components/Movies";

type Movie= {
  imdbID:string 
  title: string
  image:string
  year: string
}

const App: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([])
  // const [tempMovies, setTempMovies] = useState<Movie[]>([])


  return (
    <Router>
       <Switch>
      <Route path='/' exact>
      <Header movies={movies} setMovies={setMovies} />
      <Movies movies={movies} setMovies={setMovies}  />
    </Route>
     </Switch>
     </Router> 
  );
};

export default App;
