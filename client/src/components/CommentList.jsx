import React from 'react';

const CommentList = (props) => (
  <div>
    <div>
      <div>
        <div>Date</div>
        <div>Description</div>
        <div>Amount</div>
      </div>
      <div>{props.transactions.map((transaction) => {
        return <Transaction key={transaction.id} data={transaction}/>
      })}</div>
    </div>
  </div>
);

export default CommentList;