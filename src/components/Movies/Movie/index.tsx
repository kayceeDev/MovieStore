import React from "react";
import "./style.css";

const url =
  "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";

type Props = {
  title: string;
  year: string;
  image: string;
};
const Movie: React.FC<Props> = (props) => {
  return (
    <div className="movie" key={props.title}>
      {/* <h2>{props.title}</h2> */}
      <img src={props.image === "N/A" ? url : props.image} alt={props.title} />
      <div className="movie-info">
        <h4 className="title">{props.title}</h4>
        <p>{props.year}</p>
      </div>
    </div>
  );
};

export default Movie;
