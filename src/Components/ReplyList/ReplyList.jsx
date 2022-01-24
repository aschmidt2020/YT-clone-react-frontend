import axios from "axios";
import React, { useEffect, useState } from "react";
import ReplyUpdate from "../ReplyUpdate/ReplyUpdate";

const ReplyList = (props) => {
    const [replies, setReplies] = useState([]);
    const [showReplies, setShowReplies] = useState(false);

    useEffect(() => {
        getReplies();
    }, [props.comment])


    async function getReplies() {
        await axios({
            method: "get",
            url: `http://127.0.0.1:8000/api/comments/replies/${props.comment.id}/`,
            headers: {},
        }).then(response => {
            setReplies(response.data);
        })

    }

    if (props.user != null) {
        return (
            <span>
                <button type="button" style={{ "marginLeft": "-0.75em" }} className="btn btn-link" onClick={() => setShowReplies(!showReplies)}>
                    Show Replies ({replies.length})</button>
                <ol>
                    {replies && replies.map((reply) => {
                        if (showReplies) {
                            return (
                                <div>
                                    <li id={reply.id}>

                                        <div className="row">
                                            <div className="col-2">
                                                <h5>{reply.user.username}<small className="text-muted fst-italic"> reply</small></h5>
                                                <p>{reply.text}</p>
                                            </div>

                                            <div className="col-2">
                                                {props.user.user_id === reply.user.id &&
                                                    <span>
                                                        <ReplyUpdate updateReply={props.updateReply} reply={reply} />
                                                        <button style={{ "marginLeft": "1em", "marginTop": "1em" }} className="btn btn-outline-secondary" onClick={() => props.deleteReply(reply)} data-toggle="popover" title="Delete Reply" data-content="Delete Reply" trigger="hover"><i className="bi bi-trash" /></button>
                                                    </span>}
                                            </div>

                                            <div className="col-8">
                                                {/* empty column for spacing */}
                                            </div>

                                        </div>
                                    </li>
                                </div>
                            )
                        }
                    })}
                </ol>
            </span>
        )
    }


    return (
        <span>
            <button type="button" style={{ "marginLeft": "-0.75em" }} className="btn btn-link" onClick={() => setShowReplies(!showReplies)}>
                Show Replies ({replies.length})</button>
            <ol>
                {replies && replies.map((reply) => {
                    if (showReplies) {
                        return (
                            <div>
                                <li id={reply.id}>
                                    <h5>{reply.user.username}<small className="text-muted fst-italic"> reply</small></h5>
                                    <p>{reply.text}</p>
                                </li>
                            </div>
                        )
                    }
                })}
            </ol>
        </span>
    );

};

export default ReplyList;