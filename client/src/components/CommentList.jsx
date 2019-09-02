import React from 'react';
import styled from 'styled-components';
import CommentEntry from './CommentEntry.jsx';

const CommentList = (props) => (
  <div>
    <div>
      <div>{props.reviews.map((review) => {
        return <CommentEntry key={review._id} data={review}/>
      })}</div>
    </div>
  </div>
);

export default CommentList;