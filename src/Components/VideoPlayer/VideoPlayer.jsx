import React, { useState, useEffect } from 'react';

const VideoPlayer = (props) => {
    
    useEffect(() => {
        document.getElementById("ytplayer").src = `https://www.youtube.com/embed/${props.videoID}`;
    },[props.videoID])

    return (
        
        <div>

            <iframe id="ytplayer" type="text/html" width="640" height="360"
            src='' frameBorder="0"></iframe>
            {props.video.snippet.title}
            {props.video.snippet.description}
            
        </div>
    );
}
 
export default VideoPlayer;