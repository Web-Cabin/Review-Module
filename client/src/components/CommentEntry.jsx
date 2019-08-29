import React from 'react';

const CommentEntry = (props) => (
  <div>
    <div>{props.data.name}</div>
    <div>{props.data.date}</div>
    <div>{props.data.message}</div>
    <div>{props.data.profilePic}</div>
  </div>
);

export default CommentEntry;