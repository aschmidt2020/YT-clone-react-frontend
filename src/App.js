import axios from 'axios';
import React, { useState, useEffect } from 'react';
import SearchBar from "./Components/SearchBar/SearchBar";
import SearchResults from './Components/SearchResults/SearchResults';
import VideoPlayer from "./Components/VideoPlayer/VideoPlayer";

function App() {
  const [video, setVideo] = useState(
    {
        "kind": "youtube#searchResult",
          "etag": "okmftF2A9o616QREoohKV3RbkK4",
          "id": {
            "kind": "youtube#video",
            "videoId": "I-k-iTUMQAY"
          },
          "snippet": {
            "publishedAt": "2020-05-30T17:00:07Z",
            "channelId": "UCgqGpYjhnWvhE5-QrmXLkoQ",
            "title": "basics of CODING in 10 minutes",
            "description": "Hey Guys! Thought I'd switch it up and give you some CS instead of Philosophy today (woop woop to a Joint Honours Degree!)",
            "thumbnails": {
              "default": {
                "url": "https://i.ytimg.com/vi/I-k-iTUMQAY/default.jpg",
                "width": 120,
                "height": 90
              },
              "medium": {
                "url": "https://i.ytimg.com/vi/I-k-iTUMQAY/mqdefault.jpg",
                "width": 320,
                "height": 180
              },
              "high": {
                "url": "https://i.ytimg.com/vi/I-k-iTUMQAY/hqdefault.jpg",
                "width": 480,
                "height": 360
              }
            },
            "channelTitle": "The StudyTube Project",
            "liveBroadcastContent": "none",
            "publishTime": "2020-05-30T17:00:07Z"
          }
        },
  )
  const [videoID, setVideoID] = useState('14XxolEJloE');
  const [searchResults, setSearchResults] = useState(
    {
      "kind": "youtube#searchListResponse",
      "etag": "_JgZYPf56gSXVmDsvh53MYWUZT8",
      "nextPageToken": "CAUQAA",
      "regionCode": "US",
      "pageInfo": {
        "totalResults": 1000000,
        "resultsPerPage": 5
      },
      "items": [
        {
          "kind": "youtube#searchResult",
          "etag": "okmftF2A9o616QREoohKV3RbkK4",
          "id": {
            "kind": "youtube#video",
            "videoId": "I-k-iTUMQAY"
          },
          "snippet": {
            "publishedAt": "2020-05-30T17:00:07Z",
            "channelId": "UCgqGpYjhnWvhE5-QrmXLkoQ",
            "title": "basics of CODING in 10 minutes",
            "description": "Hey Guys! Thought I'd switch it up and give you some CS instead of Philosophy today (woop woop to a Joint Honours Degree!)",
            "thumbnails": {
              "default": {
                "url": "https://i.ytimg.com/vi/I-k-iTUMQAY/default.jpg",
                "width": 120,
                "height": 90
              },
              "medium": {
                "url": "https://i.ytimg.com/vi/I-k-iTUMQAY/mqdefault.jpg",
                "width": 320,
                "height": 180
              },
              "high": {
                "url": "https://i.ytimg.com/vi/I-k-iTUMQAY/hqdefault.jpg",
                "width": 480,
                "height": 360
              }
            },
            "channelTitle": "The StudyTube Project",
            "liveBroadcastContent": "none",
            "publishTime": "2020-05-30T17:00:07Z"
          }
        },
      ]
    }
    
  );

  useEffect(async () => {
    const response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=coding&key=AIzaSyA4kqUjPygvGiu6-LnTwdWwiHUWvqqJAv0`);
    setSearchResults(response.data)
  }, [])

  async function universalSearch(searchTerm){
    let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchTerm}&key=AIzaSyA4kqUjPygvGiu6-LnTwdWwiHUWvqqJAv0`);
    debugger
    //console.log(response.data);
    setSearchResults(response.data)
  }

  function getVideoByID(video){
    debugger
    let videoID = video.id.videoId;
    //console.log(videoID);
    setVideoID(videoID);
    setVideo(video)
   }

  return (
    <div>
      <SearchBar universalSearch={universalSearch}/>
      <VideoPlayer videoID={videoID} video={video}/>
      <SearchResults searchResults={searchResults.items} getVideo={getVideoByID}/>
    </div>
  )
}

export default App;
