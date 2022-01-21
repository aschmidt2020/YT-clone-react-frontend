import React, { useState } from 'react';
import CommentUpdate from '../CommentUpdate/CommentUpdate';
import LikeDislikeButton from '../LikeDislikeButton/LikeDislikeButton';
import ReplyList from '../ReplyList/ReplyList';
import ReplyForm from '../ReplyForm/ReplyForm';
import CommentForm from '../CommentForm/CommentForm';

const CommentList = (props) => {

    if(props.user){
        <div>
            <h4>Comments: </h4>
            <table className="table table-sm table-striped table-hover text-align-center" style={{'marginTop' : '2em'}}>
            <thead>
            <tr>
                <th>User</th>
                <th>Comment</th>
            </tr>
            </thead>
            <tbody>
            {props.comments && props.comments.map((comment) => {
                return (
                <tr key={comment.id}>
                    <td>{comment.user.username}</td>
                    <td>{comment.text}</td>          
                    <td>{props.user.user_id === comment.user.id
                    ? <span>
                        <CommentUpdate comment={comment} updateComment={props.updateComment}/>
                        <button style={{'marginLeft': '1em'}} className="btn btn-outline-secondary" onClick={() => props.deleteComment(comment)}
                        data-toggle='popover' title='Delete Comment' data-content='Delete Comment' trigger='hover'>&nbsp;<i className="bi bi-trash">&nbsp;&nbsp;</i></button>
                    </span> 
                    : <span>
                        <ReplyList user={props.user} comment={comment} deleteReply={props.deleteReply} updateReply={props.updateReply}/>
                        <ReplyForm comment={comment} addReply={props.addReply}/>
                        <LikeDislikeButton comment={comment} updateComment={props.updateComment} /></span>
                    }
                    </td>
                
            </tr>
                    
            )}
            )}
            </tbody>
            </table>
        </div>
    }
    return ( 
        <div>
            <h4>Comments: </h4>
            <table className="table table-sm table-striped table-hover text-align-center" style={{'marginTop' : '2em'}}>
            <thead>
            <tr>
                <th>User</th>
                <th>Comment</th>
                <th>Replies</th>
            </tr>
            </thead>
            <tbody>
            {props.comments && props.comments.map((comment) => {
                return (
                <tr key={comment.id}>
                    <td>{comment.user.username}</td>
                    <td>{comment.text}</td>          
                    <td><ReplyList user={props.user} comment={comment} deleteReply={props.deleteReply} updateReply={props.updateReply}/></td> 
            </tr>
                    
            )}
            )}
            </tbody>
            </table>
        </div>
     );
}
 
export default CommentList;


///            <form onSubmit={handleSubmit}>
// {/* <label>Comment</label>
// <input type='text' value={comment} onChange={(e) => setComment(e.target.value)}></input>
// <button type='submit'>Add Comment</button>
// </form> */}

//button onClick={() => props.updateComment(comment)}>Update Comment</button>