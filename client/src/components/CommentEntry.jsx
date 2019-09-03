import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
  border-radius: 50%;
  height: 50px;
  float: left;
  margin: 3px;
  margin-right: 15px;
  display: block;
`;

const TopDiv = styled.div`
  box-sizing: border-box;
  float: left;
  font-family: Roboto;
  letter-spacing: 1px;
  font-size: 16px;
  height: 125px;
  width: auto;
  margin-right: 80px;
  margin-top: 10px;
  border-bottom: 1px solid #e4e4e4;
  padding: 10px;
`;
const DateDiv = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  height: 19px;
  margin-bottom: 3px;
  font-family: Arial, Helvetica, sans-serif;
`;
const CustomerDiv = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  font-weight: 700;
  font-size: 16px;
  height: 19px;
  margin-bottom: 3px;
  font-family: Arial, Helvetica, sans-serif;
`;
const MessageDiv = styled.div`
  display: flex;
  box-sizing: border-box;
  word-wrap: break-word;
  height: 19px;
  font-family: Arial, Helvetica, sans-serif;
`;

const CommentEntry = (props) => (
  <TopDiv>
    <Img src={props.data.profilePic}/>
    <CustomerDiv>{props.data.name}</CustomerDiv>
    <DateDiv>{props.data.date}</DateDiv>
    <MessageDiv>{props.data.message}</MessageDiv>
  </TopDiv>
);

export default CommentEntry;