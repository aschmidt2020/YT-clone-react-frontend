import React, { useState } from "react";

const ReplyForm = (props) => {

    const [reply, setReply] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        debugger
        let replyPost = {
            "text": reply,
            "comment": props.comment.id
        }
        
        props.addReply(replyPost, props.comment.id);
        setReply('');
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Reply</label>
                <input type='text' value={reply} onChange={(e) => setReply(e.target.value)}></input>
                <button type='submit'>Add Reply</button>
            </form>
        </div>
    );

}

export default ReplyForm;