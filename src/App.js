
import React, { useEffect, useState } from 'react'
import './App.scss'

import SongsList from './SongsList'


const App = (props) => {
  const [songs, setSongs] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');


  const getSongs = async () => {
    const response = await fetch(`https://itunes.apple.com/us/rss/topalbums/limit=100/json`)
    const data = await response.json();
    const dataArray = Object.values(data.feed.entry);
    setSongs(dataArray)
  }

  const handleSearch = (newSearchQuery) => {
    setSearchQuery(newSearchQuery)
    let newDataArray = songs.filter((song) => {
      return song["im:name"].label.toLowerCase().includes(searchQuery.toLowerCase())


    })
    setSongs(newDataArray)
  }


  useEffect(() => { getSongs() }, []);

  const updateSearch = (e) => {
    handleSearch(e.target.value)
  }

  return (
    <div className="App">
      <h1 className="header">
        iTunes Songs
      </h1>
      <form className="searchform" onSubmit={handleSearch}>
        <input
          className="search"
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={updateSearch}

        />
        <button type="submit" className="button">Search</button>
      </form>
      {songs.map((songs) =>

        <SongsList
          key={songs.id.attributes["im:id"]}
          title={songs["im:name"].label}
          artist={songs["im:artist"].label}
          price={songs["im:price"].label}
          image={songs["im:image"][1].label}
          link={songs.id.label}

        />

      )}

    </div>
  )
}

export default App;