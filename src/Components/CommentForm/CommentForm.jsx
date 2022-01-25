import React, { useState } from "react";

const CommentForm = (props) => {

    const [comment, setComment] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        let commentPost = {
            "video_id": props.videoId,
            "text": comment,
            "likes": 0,
            "dislikes": 0
        }

        debugger
        props.addComment(commentPost);
        setComment("");
    }

    return (
        <div>
            <form onSubmit={handleSubmit} style={{ "marginBottom": "1em", "marginTop": "0.25em", "marginLeft": "2em" }}>
                <input type="text" placeholder="Comment..." style={{ "width": "40%" }} value={comment} onChange={(e) => setComment(e.target.value)}></input>
                <button style={{ "marginTop": "-0.2em", "marginLeft": "0.5em" }} type="submit" className="btn btn-outline-dark">Comment</button>
            </form>
        </div>
    );

}

export default CommentForm;