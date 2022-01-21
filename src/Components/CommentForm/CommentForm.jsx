import React, { useState } from "react";

const CommentForm = (props) => {

    const [comment, setComment] = useState('');

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
        setComment('');
    }

    return (
        <div>
            <form onSubmit={handleSubmit} style={{'marginLeft':'3em', 'marginBottom':'1em'}}>
                <input type='text' value={comment} onChange={(e) => setComment(e.target.value)}></input>
                <button type='submit'>Add Comment</button>
            </form>
        </div>
    );

}

export default CommentForm;