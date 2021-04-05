import React from "react";
import styled from "styled-components";
import "../shared/App.css";
import Grid from "../elements/Grid";

const Post = (props) => {
  const { summary, name, per, old_price, price, size, text, delivery } = props;

  return (
    <Grid>
      <Item>
        <MainImage>
          <img
            src="https://kukka-2-media-123.s3.amazonaws.com/media/class-name/Contents/2356/category.jpg"
            style={{ height: "265px", width: "100%", overflow: "hidden" }}
          ></img>
        </MainImage>
        <Detail>
          <Summary>{summary}</Summary>
          <Name style={{ cursor: "pointer" }}>{name}</Name>
          <br />
          <Per>{per}</Per>
          <Old_price>{old_price}</Old_price>
          <Price>{price}</Price>
          <br />
          <Size>{size}</Size>
          <Text>{text}</Text>
          <Delivery>{delivery}</Delivery>
        </Detail>
      </Item>
    </Grid>
  );
};

Post.defaultProps = {
  summary: "수선화로 표현한 봄의 무드",
  name: "수채화 에디션",
  per: "10%",
  old_price: "59,900원 ->",
  price: "53,900원",
  size: "XL",
  text: "size",
  delivery: "무료배송",
};

const Item = styled.div`
  padding: 0px 10px;
`;

const MainImage = styled.a`
  :hover {
    transform: scale(1.05);
    transition: transform 0.7s;
  }
`;

const Detail = styled.div`
  display: block;
  padding: 10px 0 0;
`;

const Summary = styled.div`
  color: #787878;
  font-size: 14px;
  line-height: 20px;
  font-weight: 100;
  letter-spacing: -0.18px;
`;

const Name = styled.a`
  font-weight: bold;
  margin: 3px 0px;
  :hover {
    text-decoration: underline;
  }
`;

const Per = styled.span`
  color: #ff4e50;
  margin-right: 5px;
  font-size: 14px;
  line-height: 24px;
  font-weight: bold;
  letter-spacing: -0.21px;
`;

const Old_price = styled.span`
  text-decoration: line-through;
  color: #787878;
  font-family: Roboto;
`;

const Price = styled.span`
  font-size: 14px;
  line-height: 20px;
  font-weight: bold;
  letter-spacing: -0.24px;
  color: #222;
  margin-left: 10px;
`;

const Size = styled.div`
  display: inline-block;
  min-width: 16px;
  height: 16px;
  padding: 0 4px;
  border-radius: 8px;
  font-size: 10px;
  background: #ffcd32;
  line-height: 16px;
  font-weight: 500;
  letter-spacing: -0.15px;
  color: #fff;
  vertical-align: middle;
  text-align: center;
`;

const Text = styled.span`
  display: inline-block;
  vertical-align: 0;
  margin-right: 10px;
  font-size: 12px;
  line-height: 15px;
  font-weight: 100;
  letter-spacing: -0.18px;
  color: #656565;
`;

const Delivery = styled.span`
  display: inline-block;
  height: 20px;
  padding: 0 8px;
  margin-right: 4px;
  border: #ececec 1px solid;
  background: #ececec;
  font-size: 9px;
  line-height: 18px;
  font-weight: 300;
  letter-spacing: -0.14px;
  color: #0d0d0d;
  border-radius: 10px;
  vertical-align: middle;
`;
export default Post;
