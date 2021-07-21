import React from 'react';
// get our fontawesome imports


import './App.css';


const Subreddit = ({ title, artist, price, image, link }) => {


  return (

    <div className="items">
      <div className="subitem">
        <h1 className="subtitle">{title}</h1>
        <img className="subimg" src={image} alt="album art" />
        <h2 className="subreddit">{artist}</h2>
        <p className="subpost">{price}</p>

      </div>
    </div>


  );
}

export default Subreddit;
