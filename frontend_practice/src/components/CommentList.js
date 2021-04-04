import React from "react";
import styled from "styled-components";
import Comment from "./Comment";

const CommentList = (props) => {
  return (
    <Review_Frame>
      <Review_Header>
        <Review_Title>
          리뷰 <span>리뷰 작성 시 200P 적립 (사진 등록 시 300P)</span>
        </Review_Title>
        <button>리뷰쓰기</button>
      </Review_Header>
      {/* 리뷰 인박스 */}
      <Review_Inbox>
        <Review_Inbox_Title>
          <Review_Btn>꽃다발 베스트 리뷰</Review_Btn>
          <Review_Btn>이 상품의 리뷰</Review_Btn>
        </Review_Inbox_Title>
      </Review_Inbox>
      {/* Comments */}
      <Comment></Comment>
      <Comment></Comment>
      <Comment></Comment>
      <Comment></Comment>
      <Comment></Comment>
    </Review_Frame>
  );
};

const Review_Frame = styled.div`
  width: 100%;
  padding-top: 30px;
  border-top: #f7f7f7 10px solid;
`;

const Review_Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  & > button {
    width: auto;
    padding: 0 10px;
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
    letter-spacing: -0.24px;
    color: #46cfa7;
    text-decoration: underline;
  }
`;

const Review_Title = styled.h4`
  font-size: 26px;
  line-height: 38px;
  font-weight: 500;
  letter-spacing: -0.39px;
  color: #222;
  margin: 0;

  & > span {
    margin-left: 25px;
    font-size: 16px;
    vertical-align: middle;
    color: gray;
  }
`;

// Review Inbox

const Review_Inbox = styled.div`
  width: 100%;
  padding: 45px 0 0;
`;

// Review Inbox title (Two buttons)

const Review_Inbox_Title = styled.div`
  & > button {
    font-size: 18px;
    line-height: 27px;
    font-weight: 300;
    letter-spacing: -0.27px;
  }
`;

const Review_Btn = styled.button`
  font-size: 18px;
  line-height: 27px;
  font-weight: 300;
  letter-spacing: -0.27px;
  color: #787878;
  border: none;
  text-align: center;
  border-bottom: white 2px solid;

  :active,
  :focus {
    color: #222222;
    border-bottom: #ffcd32 2px solid;
  }
`;

export default CommentList;