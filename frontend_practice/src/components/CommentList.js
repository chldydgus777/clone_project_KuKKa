import React, { useState } from "react";
import styled from "styled-components";
import Comment from "./Comment";
import { useSelector } from "react-redux";
import Rating from "../elements/Rating";
import Modal from "react-modal";
import Input from "../elements/Input";

const CommentList = (props) => {
  //const is_login = useSelector((state) => state.user.is_login);

  const is_login = true;
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // modal operation
  // Open modal
  const openModal = (e) => {
    console.log(e);
    setModalIsOpen(true);
  };
  // Close modal
  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <Review_Frame>
      <Review_Header>
        <Review_Title>
          리뷰 <span>리뷰 작성 시 200P 적립 (사진 등록 시 300P)</span>
        </Review_Title>
        {is_login && <button onClick={openModal}>리뷰쓰기</button>}
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

      <ModalFrame>
        <Modal isOpen={modalIsOpen} className="Modal">
          <ModalTitle>리뷰 작성하기</ModalTitle>
          <Rating></Rating>
          <ElTextarea placeholder="리뷰 작성" rows={5} />
          <ModalBtn className="ModalBtn">
            <BtnInModal className="BtnInModal">작성 완료</BtnInModal>
            <BtnInModal className="BtnInModal" onClick={closeModal}>
              닫기
            </BtnInModal>
          </ModalBtn>
        </Modal>
      </ModalFrame>
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

// Comment Modal
const ModalFrame = styled.div`
  max-width: 400px;
  max-height: 400px;
`;

const BtnInModal = styled.button`
  padding: 15px 15px 15px 15px;
  margin-top: 18px;
  border: none;
  border-radius: 10px;
  background: white;
  color: black;
  font-weight: bolder;
  :hover {
    transform: scale(1.1);
    transition: transform 200ms ease-in-out;
    cursor: pointer;
  }
  :focus {
    outline: none;
  }
`;

const ModalBtn = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const ModalTitle = styled.h2`
  color: black;
  background: white;
  text-align: center;
  width: 80%;
  padding: 20px;
  border-radius: 10px;
`;

const ElTextarea = styled.textarea`
  border: 1px solid #212121;
  border-radius: 4px;
  width: 90%;
  padding: 12px 4px;
  box-sizing: border-box;
`;
export default CommentList;
