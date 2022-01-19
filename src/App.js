import axios from 'axios';
import React, { useState, useEffect } from 'react';
import RelatedVideos from './Components/RelatedVideos/RelatedVideos';
import SearchBar from "./Components/SearchBar/SearchBar";
import SearchResults from './Components/SearchResults/SearchResults';
import VideoPlayer from "./Components/VideoPlayer/VideoPlayer";

function App() {
  const [video, setVideo] = useState(undefined);
  const [searchResults, setSearchResults] = useState(undefined);
  const [playlist, setPlaylist] = useState(undefined);

  useEffect(() => {
    debugger
    pageLoad();
  }, [])

  async function pageLoad() {
    let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=coding&key=AIzaSyDhl3itYChmaGsjhSxnnZ7gy6m6VFYjk4g`);
    debugger
    setSearchResults(response.data);
    setVideo(response.data.items[0]);
    getPlaylist(response.data.items[0]);
  }
  
  async function getPlaylist(video){
    let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${video.id.videoId}&type=video&key=AIzaSyDhl3itYChmaGsjhSxnnZ7gy6m6VFYjk4g`);
    debugger
    console.log(response);
    setPlaylist(response.data);
  }

  async function universalSearch(searchTerm){
    let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchTerm}&key=AIzaSyDhl3itYChmaGsjhSxnnZ7gy6m6VFYjk4g`);
    //debugger
    setSearchResults(response.data);
    setVideo(response.data.items[0]);
  }

  function getVideo(video){
    //console.log(videoID);
    setVideo(video);
    debugger
    getPlaylist(video)

   }

   if(video != undefined && playlist != undefined && searchResults != undefined){
     return (
       <div>
         <div className='container'>
           <div className='row' style={{'marginTop':'2em','textAlign':'center'}}>
             <SearchBar universalSearch={universalSearch}/>
           </div>
   
           <div className='row' style={{'marginTop':'1em','textAlign':'center'}}>
               <VideoPlayer video={video}/>
               <RelatedVideos playlist={playlist.items} />
           </div>
   
           <div className='row'>
               <SearchResults searchResults={searchResults.items} getVideo={getVideo}/>
           </div>
   
         </div>
       </div>
     )
   }

   else {
     return (
       <p>Loading</p>
     )
   }
   
}

export default App;
