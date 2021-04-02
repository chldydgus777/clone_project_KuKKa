import React from "react";
import styled from "styled-components";
import Text from "../elements/Text";
import LogoPic from "../images/LogoPhoto.png";

const Header = (props) => {
  return (
    <React.Fragment>
      <HeaderFrame>
        {/* 로그인, 회원가입, 기업제휴 */}
        <PageMoving>
          <PageMoving_Ul>
            <PageMoving_list>로그인</PageMoving_list>
            <PageMoving_list>회원가입(1000포인트 지급!)</PageMoving_list>
            <PageMoving_list>기업제휴</PageMoving_list>
          </PageMoving_Ul>
        </PageMoving>
        {/* Navbar */}
        <Navbar>
          {/* 로고 들어가는 곳 */}
          <LogoBox />
          {/* Nav 버튼들 들어가는 곳 */}
          <NavbarBtn_Ul>
            <NavbarBtn_list>꽃 정기구독</NavbarBtn_list>
            <NavbarBtn_list>꽃다발</NavbarBtn_list>
            <NavbarBtn_list>당일배송</NavbarBtn_list>
            <NavbarBtn_list>플라워클래스</NavbarBtn_list>
            <NavbarBtn_list>소품샵</NavbarBtn_list>
            <NavbarBtn_list>이벤트</NavbarBtn_list>
          </NavbarBtn_Ul>
          {/* 아이콘 박스 */}
          <IconBox>
            <Icon>
              <i class="fas fa-user"></i>
            </Icon>
            <Icon>
              <i class="fas fa-shopping-bag"></i>
            </Icon>
          </IconBox>
        </Navbar>
      </HeaderFrame>
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
    </React.Fragment>
  );
};

// 가장 바깥 헤더 프레임
const HeaderFrame = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 0 40px;
`;

// 로그인, 회원가입, 기업제휴 부분들
const PageMoving = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
`;
const PageMoving_Ul = styled.ul`
  display: flex;
  padding: 0;
`;
const PageMoving_list = styled.li`
  list-style: none;
  background: white;
  font-size: 14px;
`;

// 로고 들어가는 곳
const Navbar = styled.nav`
  width: 100%;
  display: flex;
  padding: 10px 0;
`;
const LogoBox = styled.div`
  width: 15vw;
  background-image: url("${LogoPic}");
  background-size: cover;
  background-position: center;
`;

// nav bar buttons
const NavbarBtn_Ul = styled.ul`
  display: flex;
  padding: 0;
  width: 75%;
  justify-content: space-evenly;
`;
const NavbarBtn_list = styled.li`
  list-style: none;
  background: white;
  margin-right: 10px;
`;

// 내 정보 & 장바구니 버튼

const IconBox = styled.div`
  display: flex;
  align-items: center;
`;

const Icon = styled.div`
  background: white;
  margin-right: 20px;
  font-size: 24px;
`;

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

export default Header;
