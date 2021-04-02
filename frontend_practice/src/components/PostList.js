import React from "react";
import styled from "styled-components";
import Button from "../elements/Button";

const PostList = (props) => {
  return (
    <PostListFrame>
      <PostList_RecommendBox>
        추천순 <button>버튼</button>
      </PostList_RecommendBox>
    </PostListFrame>
  );
};

// 포스트 리스트의 윤곽
const PostListFrame = styled.section`
  width: 100%;
  height: 600px;
  background-color: red;
  padding: 0px 20px;
  box-sizing: border-box;
`;

// 포스트 리스트 추천 버튼 부분
const PostList_RecommendBox = styled.div`
  width: 100%;
  background-color: yellow;
  display: flex;
  flex-direction: row-reverse;
  padding-right: 12px;
`;

export default PostList;
