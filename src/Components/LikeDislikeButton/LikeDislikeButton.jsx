import React from 'react';
import Button from 'react-bootstrap/Button';

const LikeDislikeButton = (props) => {
    function handleClick(event){
        event.preventDefault();

        let newLikes = props.comment.likes + 1;

        let updatedComment = {
            "id": props.comment.id,
            "video_id": props.comment.video_id,
            "text": props.comment.text,
            "likes": newLikes,
            "dislikes": props.comment.dislikes
        }

        props.updateComment(updatedComment);
    }

    function handleClickDislike(event){
        event.preventDefault();

        let newDislikes = props.comment.dislikes + 1;

        let updatedComment = {
            "id": props.comment.id,
            "video_id": props.comment.video_id,
            "text": props.comment.text,
            "likes": props.comment.likes,
            "dislikes": newDislikes
        }

        props.updateComment(updatedComment);
    }

    if(props.comment.likes > 0 && props.comment.dislikes > 0){
        return (
                <span>
                <Button variant="btn btn-outline-secondary" onClick={handleClick} data-toggle='popover' title='Like' data-content='Like' trigger='hover'>
                <i className="bi bi-hand-thumbs-up-fill"></i> {props.comment.likes}
                </Button>

                <Button variant="btn btn-outline-secondary" onClick={handleClickDislike} style={{'marginLeft': '1em', 'marginRight':'1em'}} data-toggle='popover' title='Dislike' data-content='Dislike' trigger='hover'>
                <i className="bi bi-hand-thumbs-down-fill"></i> {props.comment.dislikes}
                </Button>
                </span>
        )

    }

    else if(props.comment.likes > 0 && props.comment.dislikes === 0){
        return (
        <span>
        <Button variant="btn btn-outline-secondary" onClick={handleClick} data-toggle='popover' title='Like' data-content='Like' trigger='hover'>
        <i className="bi bi-hand-thumbs-up-fill"></i> {props.comment.likes}
        </Button>

        <Button variant="btn btn-outline-secondary" onClick={handleClickDislike} style={{'marginLeft': '1em', 'marginRight':'1em'}} data-toggle='popover' title='Dislike' data-content='Dislike' trigger='hover'>
        &nbsp;<i className="bi bi-hand-thumbs-down"></i>&nbsp;&nbsp;
        </Button>
        </span>
        )
    }

    else if(props.comment.likes === 0 && props.comment.dislikes > 0){
        return (
        <span>
        <Button variant="btn btn-outline-secondary" onClick={handleClick} data-toggle='popover' title='Like' data-content='Like' trigger='hover'>
        &nbsp;<i className="bi bi-hand-thumbs-up"></i>&nbsp;&nbsp;
        </Button>

        <Button variant="btn btn-outline-secondary" onClick={handleClickDislike} style={{'marginLeft': '1em', 'marginRight':'1em'}} data-toggle='popover' title='Dislike' data-content='Dislike' trigger='hover'>
        <i className="bi bi-hand-thumbs-down-fill"></i> {props.comment.dislikes}
        </Button>
        </span>
        )
    }
    return (
        <span>
        <Button variant="btn btn-outline-secondary" onClick={handleClick} data-toggle='popover' title='Like' data-content='Like' trigger='hover'>
        &nbsp;<i className="bi bi-hand-thumbs-up"></i>&nbsp;&nbsp;
        </Button>

        <Button variant="btn btn-outline-secondary" onClick={handleClickDislike} style={{'marginLeft': '1em', 'marginRight':'1em'}} data-toggle='popover' title='Dislike' data-content='Dislike' trigger='hover'>
        &nbsp;<i className="bi bi-hand-thumbs-down"></i>&nbsp;&nbsp;
        </Button>
        </span>

    );
    }

export default LikeDislikeButton;