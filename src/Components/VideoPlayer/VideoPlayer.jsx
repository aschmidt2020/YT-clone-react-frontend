import React, { useState, useEffect } from 'react';

const VideoPlayer = (props) => {
    
    useEffect(() => {
        document.getElementById("ytplayer").src = `https://www.youtube.com/embed/${props.videoID}`;
    },[props.videoID])

    return (
        <iframe id="ytplayer" type="text/html" width="640" height="360"
        src='' frameBorder="0"></iframe>
    );
}
 
export default VideoPlayer;