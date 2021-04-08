import React from "react";
import styled from "styled-components";
import Rating from "../elements/Beauty_star";

const Comment = (props) => {
  return (
    <CommentFrame>
      <Comment_Star>
        <Rating value={props.rate} />
      </Comment_Star>
      <Comment_Title>{props.content}</Comment_Title>
      <Comment_User>{props.username}</Comment_User>
      <Comment_Date>{props.createAt}</Comment_Date>
    </CommentFrame>
  );
};

Comment.defaultProps = {
  stars: 5,
  contents: "좋네요",
  name: "조욤ㄴㅇ",
  insert_dt: "2021-03-24 10:00:00",
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
`;
const Comment_Title = styled.div`
  width: 40%;
`;
const Comment_User = styled.div`
  width: 20%;
`;
const Comment_Date = styled.div`
  width: 20%;
`;

export default Comment;
