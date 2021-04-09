import React from "react";
import styled from "styled-components";
import RatingStar from "@material-ui/lab/Rating";

const Comment = (props) => {
  return (
    <CommentFrame>
      <Comment_Star>
        {/* makes RatingStar component read-only so that it has a fixed value displayed. */}
        <RatingStar
          name="half-rating-read"
          defaultValue={parseFloat(props.rate)}
          precision={0.5}
          readOnly
        />
      </Comment_Star>
      {/* takes specific values from props */}
      <Comment_Title>{props.content}</Comment_Title>
      <Comment_User>{props.username}</Comment_User>
      <Comment_Date>{props.createdAt}</Comment_Date>
    </CommentFrame>
  );
};

Comment.defaultProps = {
  stars: 5,
  contents: "좋네요",
  name: "조욤ㄴㅇ",
  insert_dt: "2021-03-24 10:00:00",
};

// Comment Frame
const CommentFrame = styled.section`
  width: 100%;
  padding: 25px 0 23px;
  border-bottom: 1px solid #ececec;
  border-top: 1px solid #ececec;
  display: flex;
`;
// Comment component's layout
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
