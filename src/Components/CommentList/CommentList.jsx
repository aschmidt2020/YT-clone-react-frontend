import React, { useState } from 'react';
import CommentUpdate from '../CommentUpdate/CommentUpdate';

const CommentList = (props) => {

    return ( 
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
                    <td>{props.user === comment.user &&
                    <CommentUpdate comment={comment} updateComment={props.updateComment}/>
                    }
                    </td>
                <td>{props.user === comment.user && 
                 <button className="btn btn-outline-secondary" onClick={() => props.deleteComment(comment)}
                 data-toggle='popover' title='Delete Comment' data-content='Delete Comment' trigger='hover'><i className="bi bi-trash"></i></button>}
                   </td>
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