import axios from 'axios';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import RelatedVideos from './Components/RelatedVideos/RelatedVideos';
import SearchBar from "./Components/SearchBar/SearchBar";
import SearchResults from './Components/SearchResults/SearchResults';
import VideoPlayer from "./Components/VideoPlayer/VideoPlayer";
import LoginForm from './Components/LoginForm/LoginForm';
import NavBar from './Components/NavBar/NavBar';
import HomePage from './Components/HomePage/HomePage';
import jwt_decode from 'jwt-decode';
import RegistrationForm from './Components/RegistrationForm/RegistrationForm';

function App() {
  const API_KEY = process.env.REACT_APP_API_KEY_YT;
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
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
  );
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
  const [playlist, setPlaylist] = useState(
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

  const [comments, setComments] = useState([]);

  useEffect(() => {
    //pageLoad();
    const tokenFromStorage = localStorage.getItem('token');
    try{
      const decodedUser = jwt_decode(tokenFromStorage);
      setUser(decodedUser);
    } catch {}
    debugger
  }, [])

  async function login(username, password){
    debugger
    let response = await axios({
      method: 'post',
      url: 'http://127.0.0.1:8000/api/auth/login/',
      headers: {}, 
      data: {
        'username': username,
        'password': password
      }
    })
    debugger
    localStorage.setItem('token', response.data.access);
    window.location='/';
  }

  async function logout(){
    debugger
    localStorage.removeItem('token');
    window.location='/';
  }

  async function register(userInfo) {
    await axios({
      method: 'post',
      url: 'http://127.0.0.1:8000/api/auth/register/',
      headers: {},
      data: userInfo
    })

  }

  async function pageLoad() {
    let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=coding&key=${API_KEY}`);
    setSearchResults(response.data);
    setVideo(response.data.items[0]);
    getPlaylist(response.data.items[0]);
  }

  async function getPlaylist(video){
    let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${video.id.videoId}&type=video&key=${API_KEY}`);
    console.log(response);
    setPlaylist(response.data);
  }

  async function universalSearch(searchTerm){
    let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchTerm}&key=${API_KEY}`);
    setSearchResults(response.data);
    setVideo(response.data.items[0]);
  }

  async function getComments(video){
    let response = await axios.get(`http://127.0.0.1:8000/api/comments/all/${video.id.videoId}/`);
    setComments(response.data);
  }

  function getVideo(video){
    setVideo(video);
    getPlaylist(video);
    navigate('/video');
    getComments(video);
   }

   async function addComment(postRequest){
      const jwt = localStorage.getItem('token');
      await axios({
        method: 'post',
        url: 'http://127.0.0.1:8000/api/comments/addcomment/',
        headers: {
          Authorization: 'Bearer ' + jwt
        },
        data: postRequest,
      })
      getComments(video);
    }

    async function deleteComment(comment){
      const jwt = localStorage.getItem('token');
      await axios({
        method: 'delete',
        url: `http://127.0.0.1:8000/api/comments/deletecomment/${comment.id}`,
        headers: {
          Authorization: 'Bearer ' + jwt
        },
      })
      getComments(video);
    }

    async function updateComment(comment){
      const jwt = localStorage.getItem('token');
      await axios({
        method: 'put',
        url: `http://127.0.0.1:8000/api/comments/editcomment/${comment.id}`,
        headers: {
          Authorization: 'Bearer ' + jwt
        },
        data: comment
      })
      getComments(video);
    }

   if(video !== undefined && playlist !== undefined && searchResults !== undefined){
     return (
       <div>
         <div className='container'>
         <NavBar user={user} universalSearch={universalSearch} login={login} logout={logout} register={register}/>
         <Routes>
           <Route exact path='/' element={<HomePage universalSearch={universalSearch} video={video} playlist={playlist.items} getVideo={getVideo} searchResults={searchResults.items} getVideo={getVideo}/>} />
           <Route path='/register' element={<RegistrationForm register={register}/>} />
           <Route path='/video' element={<VideoPlayer user={user} comments={comments} deleteComment={deleteComment} updateComment={updateComment} addComment={addComment} universalSearch={universalSearch} video={video} playlist={playlist.items} getVideo={getVideo}/>}/>
           <Route path='/search' element={<SearchResults  universalSearch={universalSearch} searchResults={searchResults.items} getVideo={getVideo}/>} />
         </Routes>
         </div>
       </div>
     )
   }

   else {
     return (
      <div className="spinner-border text-secondary position-absolute top-50 start-50" role="status">
      <span className="visually-hidden">Loading...</span>
      </div>
     )
   }
   
}

export default App;
