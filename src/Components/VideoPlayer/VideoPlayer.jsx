import React, { useState, useEffect } from "react";
import CommentList from "../CommentList/CommentList";
import RelatedVideos from "../RelatedVideos/RelatedVideos";

const VideoPlayer = (props) => {
    const [videoURL, setVideoURL] = useState("");
    const [showFullDesc, setShowFullDesc] = useState(false);

    const handleDesc = () => setShowFullDesc(!showFullDesc);

    useEffect(() => {
        let url = `https://www.youtube.com/embed/${props.video.id.videoId}`;
        setVideoURL(url)
    }, [props.video])

    return (
        <div className="container">
            <div className="row">
                <div className="col-8" style={{ "marginTop": "2em" }}>
                    <div className="row">
                        <div className="ratio ratio-16x9">
                            <iframe id="ytplayer" title='ytplayer' type="text/html" width="849" height="478" textalign="center"
                                src={videoURL} frameBorder="0" allow="fullscreen"></iframe>
                        </div>

                        {"snippet" in props.video
                            ? <h3>{props.video.snippet.title}</h3>
                            : <h3>NO SNIPPET AVAILABLE</h3>
                        }
                        {showFullDesc
                            ? ("snippet" in props.video
                                ? <p>{props.video.snippet.description}</p>
                                : <p>NO SNIPPET AVAILABLE</p>)
                            : ("snippet" in props.video
                                ? <span>{props.video.snippet.description.substring(0, 100)}...</span>
                                : <p>NO SNIPPET AVAILABLE</p>
                            )
                        }
                        <span style={{ "marginLeft": "-0.75em" }}><button type="button" className="btn btn-link" onClick={handleDesc}>toggle full description</button></span>
                    </div>

                    <div className="row">
                        <CommentList user={props.user} videoId={props.video.id.videoId} addComment={props.addComment}
                            comments={props.comments} deleteComment={props.deleteComment} updateComment={props.updateComment}
                            addReply={props.addReply} deleteReply={props.deleteReply} updateReply={props.updateReply} />
                        
                    </div>

                </div>
                <div className="col-4">
                    <RelatedVideos playlist={props.playlist} getVideo={props.getVideo} />
                </div>

            </div>

        </div>
    );

}

export default VideoPlayer;