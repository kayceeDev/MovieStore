import React from 'react';
import './style.css'

type Props={
  title:string
  year:string
  image:string
}
const Movie: React.FC<Props> = (props) =>{

  return <div className='movie' key={props.title}>
      <h2>{props.title}</h2>
      <img src={props.image} alt={props.title}/>
      <h3>{props.year}</h3>
      
    </div>
};

export default Movie; 