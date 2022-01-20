import axios from 'axios';
import { Routes, Route } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import RelatedVideos from './Components/RelatedVideos/RelatedVideos';
import SearchBar from "./Components/SearchBar/SearchBar";
import SearchResults from './Components/SearchResults/SearchResults';
import VideoPlayer from "./Components/VideoPlayer/VideoPlayer";
<<<<<<< Updated upstream
import LoginForm from './Components/LoginForm/LoginForm';
=======
import NavBar from './Components/NavBar/NavBar';
>>>>>>> Stashed changes

function App() {
  const API_KEY = process.env.REACT_APP_API_KEY_YT
  const [video, setVideo] = useState(undefined);
  const [searchResults, setSearchResults] = useState(undefined);
  const [playlist, setPlaylist] = useState(undefined);

  useEffect(() => {
    pageLoad();
    console.log(API_KEY)
  }, [])

  async function pageLoad() {
    let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=coding&key=${API_KEY}`);
    setSearchResults(response.data);
    setVideo(response.data.items[0]);
    getPlaylist(response.data.items[0]);
  }

  async function getPlaylist(video) {
    let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${video.id.videoId}&type=video&key=${API_KEY}`);
    console.log(response);
    setPlaylist(response.data);
  }

  async function universalSearch(searchTerm) {
    let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchTerm}&key=${API_KEY}`);
    setSearchResults(response.data);
    setVideo(response.data.items[0]);
  }

  function getVideo(video) {
    setVideo(video);
    getPlaylist(video)

  }

  if (video !== undefined && playlist !== undefined && searchResults !== undefined) {
    return (
      <div>
        <div className='container'>
          <div className='row' style={{ 'marginTop': '2em', 'textAlign': 'center' }}>
            <SearchBar universalSearch={universalSearch} />
          </div>

          <div className='row' style={{ 'marginTop': '1em', 'textAlign': 'center' }}>
            <VideoPlayer video={video} />
            <RelatedVideos playlist={playlist.items} getVideo={getVideo} />
          </div>

          <div className='row'>
            <SearchResults searchResults={searchResults.items} getVideo={getVideo} />
          </div>

<<<<<<< Updated upstream
        </div>
      </div>
    )
  }
=======
   if(video !== undefined && playlist !== undefined && searchResults !== undefined){
     return (
       <div>
         <div className='container'>
         <NavBar />
         <Routes>
           <Route exact path='/' element={<SearchBar universalSearch={universalSearch} />} />
           <Route path='video' element={<VideoPlayer video={video} playlist={playlist.items} getVideo={getVideo}/>}/>
           <Route path='/search' element={<SearchResults searchResults={searchResults.items} getVideo={getVideo}/>} />
         </Routes>
         </div>
       </div>
     )
   }
>>>>>>> Stashed changes

  else {
    return (
      <div className="spinner-border text-secondary position-absolute top-50 start-50" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    )
  }

}

export default App;
