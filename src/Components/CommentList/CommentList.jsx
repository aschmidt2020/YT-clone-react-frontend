import React, { useState } from "react";
import CommentUpdate from "../CommentUpdate/CommentUpdate";
import LikeDislikeButton from "../LikeDislikeButton/LikeDislikeButton";
import ReplyList from "../ReplyList/ReplyList";
import ReplyForm from "../ReplyForm/ReplyForm";
import CommentForm from "../CommentForm/CommentForm";

const CommentList = (props) => {


    if (props.user != null) {
        return (
            <div>
                <span>
                    <span className="comment-reply-header" style={{ "marginLeft": "2em" }}>Comments: </span>
                    {props.user &&
                        <CommentForm videoId={props.videoId} addComment={props.addComment} />}
                </span>
                <ol>
                    {props.comments && props.comments.map((comment) => {
                        return (
                            <li className="border-box" key={comment.id}>
                                <div className="row">
                                    <div className="col-10">
                                        <h5>{comment.user.username}</h5>
                                        <p>{comment.text}</p>
                                    </div>

                                    <div className="col-2">
                                        {props.user.user_id === comment.user.id
                                            ? <span>
                                                <CommentUpdate comment={comment} updateComment={props.updateComment} />
                                                <button style={{ "marginLeft": "1em" }} className="btn btn-outline-secondary" onClick={() => props.deleteComment(comment)}
                                                    data-toggle="popover" title="Delete Comment" data-content="Delete Comment" trigger="hover">&nbsp;<i className="bi bi-trash">&nbsp;&nbsp;</i></button>
                                            </span>
                                            : <span>
                                                <LikeDislikeButton comment={comment} updateComment={props.updateComment} />
                                            </span>}
                                    </div>

                                </div>
                                <span>
                                    <ReplyList user={props.user} comment={comment} deleteReply={props.deleteReply} updateReply={props.updateReply} />
                                    <ReplyForm comment={comment} addReply={props.addReply} />
                                </span>


                            </li>


                        )
                    }
                    )}
                </ol>
            </div>
        )
    }
    return (
        <div>
            <span>
                <span className="comment-reply-header" style={{ "marginLeft": "2em" }}>Comments: </span>
            </span>
            <ol>
                {props.comments && props.comments.map((comment) => {
                    return (
                        <li className="border-box" key={comment.id}>
                            <div className="row">
                                <h5>{comment.user.username}</h5>
                                <p>{comment.text}</p>
                                <ReplyList user={props.user} comment={comment} deleteReply={props.deleteReply} updateReply={props.updateReply} />
                            </div>
                        </li>

                    )
                }
                )}
            </ol>

        </div>
    );
}

export default CommentList;