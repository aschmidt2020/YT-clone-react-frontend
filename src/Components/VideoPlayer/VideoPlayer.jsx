import React, { useState, useEffect } from 'react';

const VideoPlayer = (props) => {
    const [videoURL, setVideoURL] = useState('');
    const [showFullDesc, setShowFullDesc] = useState(false);

    const handleDesc = () => setShowFullDesc(!showFullDesc);

    useEffect(() => {
        let url = `https://www.youtube.com/embed/${props.video.id.videoId}`;
        setVideoURL(url)
    },[props.video])

    return (
        <div>
            <iframe id="ytplayer" type="text/html" width="640" height="360"
            src={videoURL} frameBorder="0"></iframe>
            {'snippet' in props.video 
                ?  <h3>{props.video.snippet.title}</h3>
                : <h3>NO SNIPPED AVAILABLE</h3>
                }
            {showFullDesc
            ? ('snippet' in props.video
                ? <p>{props.video.snippet.description}</p>
                : <p>NO SNIPPET AVAILABLE</p>)
            : ('snippet' in props.video 
                ? <p>{props.video.snippet.description.substring(0,100)}</p>
                : <p>NO SNIPPET AVAILABLE</p>
            )
                }
                <button onClick={handleDesc}>show description</button>
        </div>
    );
   
}
 
export default VideoPlayer;