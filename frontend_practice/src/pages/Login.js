import React from "react";
import styled from "styled-components";
import Input from "../elements/Input";
import Button from "../elements/Button";
import Text from "../elements/Text";
import SnsLogo from "../images/kakaoLogo.png";
const Login = (props) => {
  return (
    <LoginFrame>
      <LoginTitle>로그인</LoginTitle>
      <LoginBox>
        <Input placeholder="아이디(이메일)" />
        <Input placeholder="비밀번호" />
        <Button
          is_header
          text="로그인"
          width="100%"
          bg="#FFCD32"
          color="#1b1b1b"
        />

        <SnsLoginBox>
          <Text>SNS계정으로 간편 로그인</Text>
          <SnsIconBox>
            <button>
              <img src={SnsLogo}></img>
            </button>
          </SnsIconBox>
          <Button
            is_header
            text="회원가입"
            width="100%"
            bg="#ECECEC"
            color="#333333"
          />
          <Text>지금 회원가입 하시면 1,000p 바로 지급!</Text>
        </SnsLoginBox>
      </LoginBox>
    </LoginFrame>
  );
};

// 로그인 전체적인 윤곽
const LoginFrame = styled.div`
  padding: 0 60px;
  text-align: center;
`;

// 로그인 타이틑 들어갈 곳
const LoginTitle = styled.h2`
  padding: 40px 0;
  margin: 0;
  font-size: 30px;
`;

// 로그인 박스
const LoginBox = styled.div`
  height: 624px;
  width: 360px;
  margin: auto;
  padding: 35px 20px 60px 20px;
  max-width: 360px;
`;

// sns 로그인 박스
const SnsLoginBox = styled.div`
  padding: 40px 0;
  margin-top: 20px;
  border-top: 1px solid #ececec;
  border-bottom: 1px solid #ececec;
`;

// sns Icon box
const SnsIconBox = styled.div`
  & > button {
    width: 20%;
  }
  & > button > img {
    width: 100%;
  }
`;

export default Login;
