// You do not need to do anything in this file. Look at the CommentSection file. 

import React from 'react';
import './Comment.css';

const Comment = (props, id) => {
  return (
    <div className="comment-text" key={id}>
      <span className="user">{props.username}</span>
      {' '}
      <span className="comment">{props.text}</span>
    </div>
  );
};


export default Comment;
