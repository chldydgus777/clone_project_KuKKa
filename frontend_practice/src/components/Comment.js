import React from "react";
import styled from "styled-components";

const Comment = (props) => {
  return (
    <CommentFrame>
      <Comment_Star>별 5</Comment_Star>
      <Comment_Title>좋네요!</Comment_Title>
      <Comment_User>조형석</Comment_User>
      <Comment_Date>2021-03-24</Comment_Date>
    </CommentFrame>
  );
};

const CommentFrame = styled.section`
  width: 100%;
  padding: 25px 0 23px;
  border-bottom: 1px solid #ececec;
  border-top: 1px solid #ececec;
  display: flex;
`;

const Comment_Star = styled.div`
  width: 20%;
  background: yellow;
`;
const Comment_Title = styled.div`
  width: 40%;
  background: red;
`;
const Comment_User = styled.div`
  width: 20%;
  background: green;
`;
const Comment_Date = styled.div`
  width: 20%;
  background: blue;
`;

export default Comment;
