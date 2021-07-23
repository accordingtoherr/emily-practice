import React from 'react';
import './SongsList.scss';



const SongsList = ({ title, artist, price, image, link }, props) => {



  return (

    <div className="items">
      <div className="subitem">
        <h1 className="subtitle">{title}</h1>
        <img className="subimg" src={image} alt="album art" />
        <h2 className="artist">{artist}</h2>
        <p className="price">{price}</p>
        <a className="myButton" href={link}>See More</a>

      </div>
    </div>


  );
}

export default SongsList
