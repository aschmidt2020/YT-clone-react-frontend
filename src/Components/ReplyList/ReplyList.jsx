import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReplyUpdate from '../ReplyUpdate/ReplyUpdate';

const ReplyList = (props) => {
    const [replies, setReplies] = useState([]);

    useEffect(() => {
        getReplies();
      }, [props.comment])

    
    async function getReplies(){
        let token = localStorage.getItem('token');
        await axios({
            method: 'get',
            url: `http://127.0.0.1:8000/api/comments/replies/${props.comment.id}/`,
            headers: { },
          }).then(response => {
            setReplies(response.data);
          })

    }

    if(!props.user){
        return (
            <span>
            {replies && replies.map((reply) => {
                return(
                    <div>
                        <p>{reply.user.username}</p>
                        <p>{reply.text}</p>
                    </div>
                )
            })}
            </span>
        )
    }
    return ( 
        <span>
            {replies && replies.map((reply) => {
                return(
                    <div>
                        <p>{reply.user.username}</p>
                        <p>{reply.text}</p>
                        {props.user.user_id === reply.user.id &&
                        <span>
                            <ReplyUpdate updateReply={props.updateReply} reply={reply} />
                            <button onClick={() => props.deleteReply(reply)}>Delete Reply</button>
                        </span>}
                    </div>
                )
            })}
            </span>
    );

};
 
export default ReplyList;