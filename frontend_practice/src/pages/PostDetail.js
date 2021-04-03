import React from "react";
import styled from "styled-components";
import Text from "../elements/Text";
import Button from "../elements/Button";

const PostDetail = (props) => {
  return (
    <React.Fragment>
      {/* PostDetail Header */}
      <PostDetail_Header>
        <Text>
          Home {">"} 꽃다발 {">"} 딜라잇 에디션
        </Text>
      </PostDetail_Header>
      {/* PostDetail frame */}
      <PostDetail_Frame>
        <Detail_Wrapping_Box>
          {/* PostDetail ImgBox */}
          <PostDetail_ImgBox>
            <img src="https://kukka-2-media-123.s3.amazonaws.com/media/class-name/Contents/2356/0_1.jpg"></img>
          </PostDetail_ImgBox>
          {/* PostDetail InfoBox */}
          <PostDetail_InfoBox>
            {/* Summary Box */}
            <Summary_Box>
              <Summary_Text>행복을 전하는 밝은 기운</Summary_Text>
              <Flower_Name>딜라잇 에디션</Flower_Name>
              <Per_Discount>10%</Per_Discount>
              <Old_Price>42,900원 {"->"}</Old_Price>
              <Price>37,900원</Price>
            </Summary_Box>
            {/* Notice Box */}
            <Notice_Box>
              <Notice_Fresh>3만원 이상 구매 시, 무료배송!</Notice_Fresh>
            </Notice_Box>
            {/* Field Set */}
            <Field_Set>
              <Field_Set_Row>
                <Field_Set_Title>수령일</Field_Set_Title>
                <Field_Set_Date type="date"></Field_Set_Date>
              </Field_Set_Row>
              <Field_Set_Row>
                <Field_Set_Title>수량</Field_Set_Title>
                <Field_Set_Btn>123</Field_Set_Btn>
              </Field_Set_Row>
            </Field_Set>
            {/* Price Info Box */}
            <Price_InfoBox>
              <Delivery_Type>무료배송</Delivery_Type>
              <Total_Price_Title>총 주문금액</Total_Price_Title>
              <Total_Price>37,900원</Total_Price>
            </Price_InfoBox>
            {/* Purchase Button Box */}
            <Btn_Box>
              <Button
                is_header
                text="장바구니"
                width="100%"
                bg="#ECECEC"
                color="#1b1b1b"
              />
              <Button
                is_header
                text="바로구매"
                width="100%"
                bg="#FFCD32"
                color="#1b1b1b"
              />
            </Btn_Box>
          </PostDetail_InfoBox>
        </Detail_Wrapping_Box>
        {/* Product Detail Info */}
        <Detail_Info_Header>
          <Text size="16px">상품설명</Text>
        </Detail_Info_Header>
        {/* Product Detail Info Frame*/}
        <Detail_Info_Frame>
          <Detail_Info_Box>
            <img src="https://kukka-2-media-123.s3.amazonaws.com/media/class-name/ContentsBlocks/2021/03/25/2_1_td8IBoZ.jpg"></img>
            <Detail_Info_Title>
              행복을 전하는 밝은 기운, 딜라잇 에디션
            </Detail_Info_Title>
            <Detail_Info_Text>
              형형색색 다채로운 컬러를 자랑하며, <br /> 보기만 해도 눈과 마음에
              즐거움을 주는 <br />
              딜라잇 에디션을 만나보세요.
              <br />
              <br />
              포인트가 되는 노란빛의 거베라와
              <br /> 푸른 꽃송이가 만개한 델피늄을 함께 담아
              <br /> 행복이 피어나는 봄을 표현한 꽃다발이랍니다.
              <br />
            </Detail_Info_Text>
          </Detail_Info_Box>
        </Detail_Info_Frame>
      </PostDetail_Frame>
    </React.Fragment>
  );
};

// PostDetail Header
// Home > 꽃다발 > 해당 포스트 이름

const PostDetail_Header = styled.div`
  width: 100%;
  padding: 40px 60px 0;
  box-sizing: border-box;
`;
// PostDetail Frame
const PostDetail_Frame = styled.div`
  width: 100%;
  padding: 0 60px;
  background: red;
  box-sizing: border-box;
`;
// Detail Wrapping Box
const Detail_Wrapping_Box = styled.div`
  display: flex;
`;

// PostDetail Image Box
const PostDetail_ImgBox = styled.div`
  width: 50%;
  & > img {
    width: 100%;
  }
`;

// PostDetail Info
const PostDetail_InfoBox = styled.div`
  width: 50%;
  padding-left: 70px;
`;

// Summary Box
const Summary_Box = styled.div`
  border-bottom: 1px solid #ececec;
  background: yellow;
  padding: 0 0 20px;
`;

const Summary_Text = styled.p``;

const Flower_Name = styled.p``;

const Per_Discount = styled.span``;

const Old_Price = styled.span``;

const Price = styled.span``;

// Notice Box

const Notice_Box = styled.div`
  padding: 20px 0;
  background: lightblue;
  border-top: 1px solid #ececec;
  border-bottom: 1px solid #ececec;
`;

const Notice_Fresh = styled.p``;

// Field Set
const Field_Set = styled.div`
  background: green;
`;

const Field_Set_Row = styled.div`
  display: flex;
`;

const Field_Set_Title = styled.div``;

const Field_Set_Date = styled.input``;

const Field_Set_Btn = styled.div`
  background: pink;
`;

// Price Info

const Price_InfoBox = styled.div`
  background: orange;
`;

const Delivery_Type = styled.p``;

const Total_Price_Title = styled.span``;

const Total_Price = styled.span``;

// Button Box

const Btn_Box = styled.div`
  display: flex;
`;

// Detail Info Box

const Detail_Info_Header = styled.div`
  text-align: center;
  padding: 40px 60px 0;
  box-sizing: border-box;
  background: yellow;
`;

const Detail_Info_Frame = styled.div`
  box-sizing: border-box;
  padding: 0 60px;
  background: gray;
`;

const Detail_Info_Box = styled.div`
  padding: 70px 0 80px;
  margin: 0 81.3333px;
`;

// 그 다음 이미지 들어가고 (사이즈 740 * 740)

const Detail_Info_Title = styled.p`
  margin: 40px 0 0;
`;

const Detail_Info_Text = styled.p`
  margin: 20px 0 0;
`;

export default PostDetail;
