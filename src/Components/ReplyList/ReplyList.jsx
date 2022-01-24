import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReplyUpdate from '../ReplyUpdate/ReplyUpdate';

const ReplyList = (props) => {
    const [replies, setReplies] = useState([]);
    const [showReplies, setShowReplies] = useState(false);

    useEffect(() => {
        getReplies();
      }, [props.comment])

    
    async function getReplies(){
        await axios({
            method: 'get',
            url: `http://127.0.0.1:8000/api/comments/replies/${props.comment.id}/`,
            headers: { },
          }).then(response => {
            setReplies(response.data);
          })

    }

    if(props.user != null){
        return (
            <span>
            {replies && replies.map((reply) => {
                if(showReplies){
                    return(
                        <div id={reply.id}>
                            <button style={{'width':'10%', 'marginBottom':'0.5em'}}type="button" className="btn btn-secondary" onClick={() => setShowReplies(!showReplies)}>Replies</button>
                            <h5>{reply.user.username}</h5>
                            <p>{reply.text}</p>
                            {props.user.user_id === reply.user.id &&
                            <span>
                                <ReplyUpdate updateReply={props.updateReply} reply={reply} />
                                <button onClick={() => props.deleteReply(reply)}>Delete Reply</button>
                            </span>}
                        </div>
                    )
                }
                else{
                    return(
                        <button style={{'width':'10%', 'marginBottom':'0.5em'}}type="button" className="btn btn-secondary" onClick={() => setShowReplies(!showReplies)}>Replies</button>
                    )
                }
            })}
            </span>
        )
    }
    
    
    return ( 
        <span>
            {replies && replies.map((reply) => {
                if(showReplies){
                    return(
                        <div id={reply.id}>
                            <button style={{'width':'10%', 'marginBottom':'0.5em'}}type="button" className="btn btn-secondary" onClick={() => setShowReplies(!showReplies)}>Replies</button>
                            <h5>{reply.user.username}<small className='text-muted fst-italic'> reply</small></h5>
                            <p>{reply.text}</p>
                        </div>
                    )
                }
                else{
                    return(
                        <button style={{'width':'10%', 'marginBottom':'0.5em'}}type="button" className="btn btn-secondary" onClick={() => setShowReplies(!showReplies)}>Replies</button>
                    )
                }
            })}
            </span>
    );

};
 
export default ReplyList;