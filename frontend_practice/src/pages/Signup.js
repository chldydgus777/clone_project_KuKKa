import React from "react";
import styled from "styled-components";
import Input from "../elements/Input";
import Button from "../elements/Button";
import Text from "../elements/Text";

const Signup = (props) => {
  return (
    <SignupFrame>
      <SignupTitle>회원가입</SignupTitle>
      <SignupBox>
        <InputRow>
          <TextBox>이메일 (아이디)</TextBox>
          <Input placeholder="예) kukkka@kukka.kr" />
        </InputRow>
        <InputRow>
          <TextBox>비밀번호</TextBox>
          <Input placeholder="비밀번호를 입력해주세요" />
        </InputRow>
        <InputRow>
          <TextBox>비밀번호 확인</TextBox>
          <Input placeholder="비밀번호를 한 번 더 입력해주세요" />
        </InputRow>
        <Button
          is_header
          text="회원가입"
          width="100%"
          bg="#ECECEC"
          color="#333333"
        />
        <Text>지금 회원가입 하시면 1,000p 바로 지급!</Text>
      </SignupBox>
    </SignupFrame>
  );
};

// 회원가입 전체적인 윤곽
const SignupFrame = styled.div`
  padding: 0 60px;
  text-align: center;
`;

// 회원가입 타이틑 들어갈 곳
const SignupTitle = styled.h2`
  padding: 40px 0;
  margin: 0;
  font-size: 30px;
  border-bottom: 1px solid #ececec;
`;

// 회원가입 박스
const SignupBox = styled.div`
  height: 624px;
  width: 620px;
  padding: 70px 20px 60px 20px;
  max-width: 620px;
  margin: auto;
`;

const InputRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TextBox = styled.div`
  width: 200px;
  text-align: left;
  display: flex;
  align-items: center;
`;

export default Signup;
