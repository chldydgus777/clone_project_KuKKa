import React from "react";
import styled from "styled-components";

import Text from "../elements/Text";
import "../shared/mystyle.css";
import Post from "./Post";
import Grid from "../elements/Grid";

const PostList = (props) => {
  return (
    <React.Fragment>
      {/* Main picture */}
      <MainPicture>
        <MainPicture_textBox>
          <Text margin="14px 0 14px 50px" text_align="left" size="30px" bold>
            꾸까 꽃다발
          </Text>
          <Text margin="0 0 0 50px" text_align="left">
            계절을 담은 꽃다발로
          </Text>
          <Text margin="0 0 0 50px" text_align="left">
            당신의 일상을 특별한 날로 만들어보세요.
          </Text>
        </MainPicture_textBox>
      </MainPicture>
      <PostListFrame>
        <PostList_RecommendBox>
          <button>
            <i class="fas fa-chevron-down"></i>
          </button>
          추천순
        </PostList_RecommendBox>
        <Grid display="flex" flex_direction="row" height="100%" width="100%">
          <Post />
          <Post />
          <Post />
          <Post />
        </Grid>
      </PostListFrame>
    </React.Fragment>
  );
};

// 메인 사진 kukka-2-media-123.s3.amazonaws.com/static/kukkart_new/img/kukka/category_flower.png
// 메인 글귀

const MainPicture = styled.div`
  background-image: url("https://kukka-2-media-123.s3.amazonaws.com/static/kukkart_new/img/kukka/category_flower.png");
  width: 100%;
  height: 40vh;
  display: flex;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 0px 60px 0px 60px;
  box-sizing: border-box;
`;

const MainPicture_textBox = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

// 포스트 리스트의 윤곽
const PostListFrame = styled.section`
  width: 100%;
  height: 600px;
  padding: 50px 60px;
  box-sizing: border-box;
`;

// 포스트 리스트 추천 버튼 부분
const PostList_RecommendBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  margin-bottom: 40px;
`;

export default PostList;
