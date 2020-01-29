import React from 'react';
import './Comment.css';

const Comment = props => {
  console.log("this is Comment.js", props)
  return (
    <div className="comment-text">
      <span className="user">{props.commentPost.username}</span>
      {' '}
      <span className="comment">{props.commentPost.text}</span>
    </div>
  );
};


export default Comment;
