
import React, { useEffect, useState} from 'react'

import './App.css'
import SongsList from './SongsList'

const App = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    getSongs();
  }, [])

  const getSongs = async () => {
  const response = await fetch(`https://itunes.apple.com/us/rss/topalbums/limit=100/json`)
    const data = await response.json();
     setSongs(data.feed.entry)
  }

  return (
    <div className="App">
      
      <h1 className="header">
       iTunes Songs 
      </h1>
      {songs && songs.map((songs) => 
     
        <SongsList
        title={songs["im:name"].label}
        artist={songs["im:name"].label}
        price={songs["im:price"].label}
        image={songs["im:image"][1].label}

    
        /> 
      
      )}
         
    </div>
  )
}

export default App;