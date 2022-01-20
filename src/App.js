import axios from 'axios';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import RelatedVideos from './Components/RelatedVideos/RelatedVideos';
import SearchBar from './Components/SearchBar/SearchBar';
import SearchResults from './Components/SearchResults/SearchResults';
import VideoPlayer from './Components/VideoPlayer/VideoPlayer';
import LoginForm from './Components/LoginForm/LoginForm';
import NavBar from './Components/NavBar/NavBar';
import HomePage from './Components/HomePage/HomePage';
import jwt_decode from 'jwt-decode';
import RegistrationForm from './Components/RegistrationForm/RegistrationForm';

function App() {
  const API_KEY = process.env.REACT_APP_API_KEY_YT;
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [video, setVideo] = useState(undefined);
  const [searchResults, setSearchResults] = useState(undefined);
  const [playlist, setPlaylist] = useState(undefined);

  useEffect(() => {
    pageLoad();
    const tokenFromStorage = localStorage.getItem('token');
    try {
      const decodedUser = jwt_decode(tokenFromStorage);
      setUser(decodedUser);
    } catch { }
    debugger
  }, [])

  async function Register() {
    let response = await axios({
      method = 'post',
      url: 'http://127.0.0.1:8000/api/auth/register/',
      headers: {},
      data: {
        'username': username,
        'password': password,
        'email': email,
        'first_name': first_name,
        'last_name': last_name
      }
    })
  }

  async function login(username, password) {
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
    window.location = '/';
  }


  async function logout() {
    debugger
    localStorage.removeItem('token');
    window.location = '/';
  }

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
    getPlaylist(video);
    navigate('/video')
  }

  async function addComment(postRequest) {
    const jwt = localStorage.getItem('token');
    await axios({
      method: 'post',
      url: 'http://127.0.0.1:8000/api/auth/login/',
      headers: {
        Authorization: 'Bearer ' + jwt
      },
      data: postRequest,
    })
  }

  if (video !== undefined && playlist !== undefined && searchResults !== undefined) {
    return (
      <div>
        <div className='container'>
          <NavBar user={user} universalSearch={universalSearch} login={login} logout={logout} />
          <RegistrationForm />
          <Routes>
            <Route exact path='/' element={<HomePage universalSearch={universalSearch} video={video} playlist={playlist.items} getVideo={getVideo} searchResults={searchResults.items} getVideo={getVideo} />} />
            <Route path='/video' element={<VideoPlayer addComment={addComment} universalSearch={universalSearch} video={video} playlist={playlist.items} getVideo={getVideo} />} />
            <Route path='/search' element={<SearchResults universalSearch={universalSearch} searchResults={searchResults.items} getVideo={getVideo} />} />
          </Routes>
        </div>
      </div>
    )
  }

  else {
    return (
      <div className='spinner-border text-secondary position-absolute top-50 start-50' role='status'>
        <span className='visually-hidden'>Loading...</span>
      </div>
    )
  }

}

export default App;
