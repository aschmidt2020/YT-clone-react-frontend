import axios from "axios";
import { Routes, Route, useNavigate } from "react-router-dom"
import React, { useState, useEffect } from "react";
import SearchResults from "./Components/SearchResults/SearchResults";
import VideoPlayer from "./Components/VideoPlayer/VideoPlayer";
import NavBar from "./Components/NavBar/NavBar";
import HomePage from "./Components/HomePage/HomePage";
import jwt_decode from "jwt-decode";
import "./App.css"

function App() {
  const API_KEY = process.env.REACT_APP_API_KEY_YT;
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [video, setVideo] = useState(undefined);
  const [searchResults, setSearchResults] = useState(undefined);
  const [playlist, setPlaylist] = useState(undefined);
  const [comments, setComments] = useState([]);
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    pageLoad();
    const tokenFromStorage = localStorage.getItem("token");
    try {
      const decodedUser = jwt_decode(tokenFromStorage);
      setUser(decodedUser);
      getUserInfo(decodedUser, tokenFromStorage);
    } catch { }
    // eslint-disable-next-line
  }, [])

  async function login(username, password) {
    await axios({
      method: "post",
      url: "http://127.0.0.1:8000/api/auth/login/",
      headers: {},
      data: {
        "username": username,
        "password": password
      }
    }).then(response => {
      localStorage.setItem("token", response.data.access);
      window.location = "/";
    }
    ).catch(error => {
      alert("Incorrect username or password. Please try again.")
    })
  }

  async function getUserInfo(user, token) {

    await axios({
      method: "get",
      url: `http://127.0.0.1:8000/api/comments/user/${user.user_id}/`,
      headers: {
        Authorization: "Bearer " + token
      },
    }).then(response => {
      setUserInfo(response.data);
    })
  }

  async function logout() {
    localStorage.removeItem("token");
    window.location = "/";
  }

  async function register(userInfo) {
    await axios({
      method: "post",
      url: "http://127.0.0.1:8000/api/auth/register/",
      headers: {},
      data: userInfo
    }).then(response => {
      alert("Account created! Please log-in.")
    }
    ).catch(error => {
      alert("Account creation failed. Please enter all required fields.")
    })

  }

  async function pageLoad() {
    await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=24&key=${API_KEY}`)
      .then(response => {
        setSearchResults(response.data);
        setVideo(response.data.items[0]);
        getPlaylist(response.data.items[0]);
      }
      ).catch(error => {
        alert("Could not load page. Please try again later.")
      });
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
    navigate("/search");
  }

  async function getComments(video) {
    let response = await axios.get(`http://127.0.0.1:8000/api/comments/all/${video.id.videoId}/`);
    setComments(response.data);
  }

  function getVideo(video) {
    setVideo(video);
    getPlaylist(video);
    getComments(video);
    navigate("/video");
  }

  async function addComment(postRequest) {
    const jwt = localStorage.getItem("token");
    await axios({
      method: "post",
      url: "http://127.0.0.1:8000/api/comments/addcomment/",
      headers: {
        Authorization: "Bearer " + jwt
      },
      data: postRequest,
    }).then(response => {
      getComments(video);
    }
    ).catch(error => {
      alert("Comment not able to be added at this time. Please try again later.")
    })
  }

  async function deleteComment(comment) {
    // eslint-disable-next-line no-restricted-globals
    let approveDelete = confirm(`Are you sure you would like to delete this comment?\n\nUser: ${comment.user.username}\nComment:${comment.text}\n\nOK for yes. Cancel for no.`)
    if (approveDelete) {
      const jwt = localStorage.getItem("token");
      await axios({
        method: "delete",
        url: `http://127.0.0.1:8000/api/comments/deletecomment/${comment.id}/`,
        headers: {
          Authorization: "Bearer " + jwt
        },
      }).then(response => {
        getComments(video);
      }
      ).catch(error => {
        alert("Comment not able to be deleted at this time. Please try again later.")
      })
    }
  }

  async function updateComment(comment) {
    const jwt = localStorage.getItem("token");
    await axios({
      method: "put",
      url: `http://127.0.0.1:8000/api/comments/editcomment/${comment.id}/`,
      headers: {
        Authorization: "Bearer " + jwt
      },
      data: comment
    }).then(response => {
      getComments(video);
    }
    ).catch(error => {
      alert("Comment not able to be updated at this time. Please try again later.")
    })
  }

  async function addReply(postRequest, commentId) {
    const jwt = localStorage.getItem("token");
    await axios({
      method: "post",
      url: `http://127.0.0.1:8000/api/comments/addreply/${commentId}/`,
      headers: {
        Authorization: "Bearer " + jwt
      },
      data: postRequest,
    }).then(response => {
      getComments(video);
    }
    ).catch(error => {
      alert("Reply not able to be added at this time. Please try again later.")
    })
  }

  async function deleteReply(reply) {
    // eslint-disable-next-line no-restricted-globals
    let approveDelete = confirm(`Are you sure you would like to delete this reply?\n\nUser: ${reply.user.username}\nReply:${reply.text}\n\nOK for yes. Cancel for no.`)
    if (approveDelete) {
      const jwt = localStorage.getItem("token");
      await axios({
        method: "delete",
        url: `http://127.0.0.1:8000/api/comments/deletereply/${reply.id}/`,
        headers: {
          Authorization: "Bearer " + jwt
        },
      }).then(response => {
        getComments(video);
      }
      ).catch(error => {
        alert("Reply not able to be deleted at this time. Please try again later.")
      })
    }
  }

  async function updateReply(reply) {
    const jwt = localStorage.getItem("token");
    await axios({
      method: "put",
      url: `http://127.0.0.1:8000/api/comments/editreply/${reply.id}/`,
      headers: {
        Authorization: "Bearer " + jwt
      },
      data: reply
    }).then(response => {
      getComments(video);
    }
    ).catch(error => {
      alert("Comment not able to be updated at this time. Please try again later.")
    })
  }

  if (video !== undefined && playlist !== undefined && searchResults !== undefined) {
    return (
      <div>
        <div className="container">
          <NavBar user={user} userInfo={userInfo} universalSearch={universalSearch} login={login} logout={logout} register={register} />
          <Routes>
            <Route exact path="/" element={<HomePage userInfo={userInfo} universalSearch={universalSearch} searchResults={searchResults.items} getVideo={getVideo} />} />
            <Route path="/video" element={<VideoPlayer user={user}
              comments={comments} deleteComment={deleteComment} updateComment={updateComment} addComment={addComment}
              addReply={addReply} deleteReply={deleteReply} updateReply={updateReply}
              universalSearch={universalSearch} video={video} playlist={playlist.items} getVideo={getVideo} />} />
            <Route path="/search" element={<SearchResults universalSearch={universalSearch} searchResults={searchResults.items} getVideo={getVideo} />} />
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
