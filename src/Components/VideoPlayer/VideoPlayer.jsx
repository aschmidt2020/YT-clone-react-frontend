import React, { useState, useEffect } from 'react';

const VideoPlayer = (props) => {
    
    const [videoURL, setVideoURL] = useState('')
    useEffect(() => {
        let url = `https://www.youtube.com/embed/${props.video.id.videoId}`;
        setVideoURL(url)
    },[props.video])

    return (
        <div>
            <iframe id="ytplayer" type="text/html" width="640" height="360"
            src={videoURL} frameBorder="0"></iframe>
            <h3>{props.video.snippet.title}</h3>
            <p>{props.video.snippet.description}</p>
            
        </div>
    );
   
}
 
export default VideoPlayer;