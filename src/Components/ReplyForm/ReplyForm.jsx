import React, { useState } from "react";

const ReplyForm = (props) => {

    const [reply, setReply] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        debugger
        let replyPost = {
            "text": reply,
            "comment": props.comment.id
        }

        props.addReply(replyPost, props.comment.id);
        setReply("");
    }

    return (
        <div>
            <form onSubmit={handleSubmit} style={{ "marginTop": "1em" }}>
                <input type="text" placeholder="Reply..." value={reply} onChange={(e) => setReply(e.target.value)}></input>
                <button style={{ "marginTop": "-0.2em", "marginLeft": "0.5em" }} type="submit" className="btn btn-secondary">Add Reply</button>
            </form>
        </div>
    );

}

export default ReplyForm;