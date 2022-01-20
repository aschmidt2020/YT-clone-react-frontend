import React, { useState } from 'react';

const CommentList = (props) => {
    const [text, setText] =  useState('');
    const [showEdit, setShowEdit] = useState(false);

    function handleSubmit(comment){
        debugger
        let updatedComment = {
            "id": comment.id,
            "video_id": comment.video_id,
            "text": text,
            "likes": comment.likes,
            "dislikes": comment.dislikes
        }

        props.updateComment(updatedComment);
    }
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
                    <td><button onClick={setShowEdit(!showEdit)}>Update Comment</button>
                    {showEdit && <form onSubmit={() => handleSubmit(comment)}>
                        <label>Comment</label>
                        <input type='text' value={text} onChange={(e) => setText(e.target.value)}></input>
                        <button type='submit'>Update Comment</button>
                    </form>}</td>
                <td><button onClick={() => props.deleteComment(comment)}>Delete Comment</button></td>
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