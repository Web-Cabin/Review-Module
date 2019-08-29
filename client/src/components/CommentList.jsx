import React from 'react';
import CommentEntry from './CommentEntry.jsx';

const CommentList = (props) => (
  <div>
    <div>
      <div>{props.reiviews.map((review) => {
        return <CommentEntry key={review.id} data={review}/>
      })}</div>
    </div>
  </div>
);

export default CommentList;