import axios from 'axios';
import React, { useState, useEffect } from 'react';
import SearchBar from "./Components/SearchBar/SearchBar";
import VideoPlayer from "./Components/VideoPlayer/VideoPlayer";

function App() {
  const [videoID, setVideoID] = useState('');

  useEffect(() => {
    
  }
)
  async function universalSearch(searchTerm){
    let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchTerm}&key=AIzaSyA4kqUjPygvGiu6-LnTwdWwiHUWvqqJAv0`)


  }
  return (
    <div>
      <SearchBar />
      <VideoPlayer videoID={videoID}/>
    </div>
  );
}

export default App;
