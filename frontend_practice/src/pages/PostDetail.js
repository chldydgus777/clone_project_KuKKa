import React from "react";
import styled from "styled-components";
import Text from "../elements/Text";
import Button from "../elements/Button";
import CommentList from "../components/CommentList";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as productActions } from "../redux/modules/post";

const PostDetail = (props) => {
  const dispatch = useDispatch();
  const id = props.match.params.id;
  const data = useSelector((state) => state.post.flower);
  let index;
  let post;
  let discountRate;
  let percentage;
  let number;
  let oldPrice;

  React.useEffect(() => {
    // start when data's length is 0
    if (data.length === 0) {
      dispatch(productActions.getProductsAPI());
    }
  }, []);
  // start setting values into the variables when data's length is equal to / longer than 1.
  if (data.length >= 1) {
    index = data.findIndex((d) => d.id === parseInt(id));

    post = data[index];
    if (post?.per != " ") {
      discountRate = post?.per.split("");
      percentage = discountRate.pop();
      number = discountRate.join("");
    } else {
      percentage = "";
      number = "";
    }
    let oldPrice;

    if (post?.oldPrice == " ") {
      oldPrice = "";
    } else {
      oldPrice = post?.oldPrice;
    }
  }

  return (
    <React.Fragment>
      {data && (
        <React.Fragment>
          {/* PostDetail Header */}
          <PostDetail_Header>
            <Text>
              Home {">"} 꽃다발 {">"} {post?.flower}
            </Text>
          </PostDetail_Header>
          {/* PostDetail frame */}
          <PostDetail_Frame>
            <Detail_Wrapping_Box>
              {/* PostDetail ImgBox */}
              <PostDetail_ImgBox>
                <img src={post?.mainImage}></img>
              </PostDetail_ImgBox>
              {/* PostDetail InfoBox */}
              <PostDetail_InfoBox>
                {/* Summary Box */}
                <Summary_Box>
                  <Summary_Text>{post?.summary}</Summary_Text>
                  <Flower_Name>{post?.flower}</Flower_Name>
                  <Per_Discount>
                    <span>{number}</span>
                    {percentage}
                  </Per_Discount>
                  <Old_Price>{oldPrice}</Old_Price>
                  <Price>{post?.price}</Price>
                </Summary_Box>
                {/* Notice Box */}
                <Notice_Box>
                  <Notice_Fresh>{post?.notice}</Notice_Fresh>
                </Notice_Box>
                {/* Field Set */}
                <Field_Set>
                  <Field_Set_Row>
                    <Field_Set_Title>수령일</Field_Set_Title>
                    <Field_Set_Date
                      type="date"
                      placeholder="수령일을 선택해주세요"
                    ></Field_Set_Date>
                  </Field_Set_Row>
                  <Field_Set_Row>
                    <Field_Set_Title>수량</Field_Set_Title>
                    <Field_Set_Btn>
                      <button>
                        <i className="fas fa-minus-circle"></i>
                      </button>
                      <span>1</span>
                      <button>
                        <i className="fas fa-plus-circle"></i>
                      </button>
                    </Field_Set_Btn>
                  </Field_Set_Row>
                </Field_Set>
                {/* Price Info Box */}
                <Price_InfoBox>
                  <Delivery_Type>
                    <span>{post?.delivery}</span>
                  </Delivery_Type>
                  <Total_Price_Title>총 주문금액</Total_Price_Title>
                  <Total_Price>{post?.price}</Total_Price>
                </Price_InfoBox>
                {/* Purchase Button Box */}
                <Btn_Box>
                  <Button
                    is_header
                    text="장바구니"
                    width="200px"
                    bg="#ECECEC"
                    color="#1b1b1b"
                  />
                  <Button
                    is_header
                    text="바로구매"
                    width="200px"
                    bg="#FFCD32"
                    color="#1b1b1b"
                  />
                </Btn_Box>
              </PostDetail_InfoBox>
            </Detail_Wrapping_Box>
            {/* Product Detail Info */}
            <Detail_Info_Header>
              <Text size="16px" margin="0">
                상품설명
              </Text>
            </Detail_Info_Header>
            {/* Product Detail Info Frame*/}
            <Detail_Info_Frame>
              <Detail_Info_Box>
                <img src={post?.imageDetail}></img>
                <Detail_Info_Title>{post?.titleDetail}</Detail_Info_Title>
                {/* forces to change a string into a html component */}
                <Detail_Info_Text
                  dangerouslySetInnerHTML={{ __html: post?.contentsDetail }}
                ></Detail_Info_Text>
              </Detail_Info_Box>
            </Detail_Info_Frame>
            {/* CommentList */}
            <CommentList id={id} />
          </PostDetail_Frame>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

PostDetail.defaultProps = {
  mainImage:
    "https://kukka-2-media-123.s3.amazonaws.com/media/class-name/Contents/2356/0_1.jpg",
  summary: "행복을 전하는 밝은 기운",
  flower: "딜라잇 에디션",
  per: "10%",
  oldPrice: "59,900원 ->",
  price: "53,900원",
  delivery: "무료배송",
  notice: "3만원 이상 구매 시, 무료배송!",
  imageDetail:
    "https://kukka-2-media-123.s3.amazonaws.com/media/class-name/Contents/2356/0_1.jpg",
  titleDetail: "행복을 전하는 밝은 기운, 딜라잇 에디션",
  contentsDetail: `<span>형형색색 다채로운 컬러를 자랑하며,</span><br><span>보기만 해도 눈과 마음에 즐거움을 주는</span><br><span>딜라잇 에디션을 만나보세요.</span><br><span></span><br><span>포인트가 되는 노란빛의 거베라와</span><br><span>푸른 꽃송이가 만개한 델피늄을 함께 담아</span><br><span>행복이 피어나는 봄을 표현한 꽃다발이랍니다.</span>`,
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
  padding: 0 0 20px;
`;

const Summary_Text = styled.p`
  font-size: 16px;
  line-height: 24px;
  font-weight: 100;
  letter-spacing: -0.24px;
  color: #787878;
`;

const Flower_Name = styled.p`
  font-size: 26px;
  line-height: 38px;
  font-weight: 700;
  letter-spacing: -0.39px;
  color: #222;
`;

const Per_Discount = styled.span`
  font-size: 16px;
  line-height: 24px;
  font-weight: 300;
  letter-spacing: -0.24px;
  color: #ff4e50;
  & > span {
    font-weight: bold;
  }
  margin-right: 5px;
`;

const Old_Price = styled.span`
  font-size: 16px;
  line-height: 24px;
  font-weight: 100;
  letter-spacing: -0.24px;
  color: #787878;
`;

const Price = styled.span`
  font-size: 26px;
  line-height: 38px;
  font-weight: 500;
  letter-spacing: -0.39px;
  color: #222222;
`;

// Notice Box

const Notice_Box = styled.div`
  padding: 20px 0;
  border-top: 1px solid #ececec;
  border-bottom: 1px solid #ececec;
  & > span {
    color: #46cfa7;
  }
`;

const Notice_Fresh = styled.p`
  text-align: left;
  font-size: 16px;
  line-height: 24px;
  font-weight: 300;
  letter-spacing: -0.24px;
  color: #222;
`;

// Field Set
const Field_Set = styled.div``;

const Field_Set_Row = styled.div`
  display: flex;
`;

const Field_Set_Title = styled.div`
  text-align: left;
  width: 150px;
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  letter-spacing: -0.24px;
  color: #222222;
  display: flex;
  align-items: center;
`;

const Field_Set_Date = styled.input`
  width: 50%;
  font-size: 20px;
  border-radius: 4px;
  padding: 5px 0%;
  border: 1px solid #ececec;
  color: #ececec;
`;

const Field_Set_Btn = styled.div`
  width: 30%;
  padding: 10px 10px;
  display: flex;
  & > button {
    color: #ececec;
    font-size: 18px;
    margin: 0 10px;
  }
`;

// Price Info

const Price_InfoBox = styled.div`
  text-align: right;
`;

const Delivery_Type = styled.p`
  & > span {
    border-radius: 10px;
    border: #ececec 1px solid;
    background: #ececec;
    font-size: 9px;
    line-height: 18px;
    font-weight: 400;
    letter-spacing: -0.14px;
    padding: 5px;
    color: #0d0d0d;
  }
`;

const Total_Price_Title = styled.span`
  display: inline-block;
  float: none;
  margin-right: 20px;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  letter-spacing: -0.21px;
  color: #222;
`;

const Total_Price = styled.span`
  display: inline-block;
  float: none;
  margin-top: -6px;
  font-size: 26px;
  line-height: 38px;
  font-weight: 500;
  letter-spacing: -0.39px;
  color: #222;
`;

// Button Box

const Btn_Box = styled.div`
  text-align: right;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

// Detail Info Box

const Detail_Info_Header = styled.div`
  text-align: center;
  padding: 40px 0 0 0;
  box-sizing: border-box;
  font-weight: 500;
  border-bottom: 1px solid #ececec;
  & > p {
    font-size: 24px;
    border-top: 2px solid #ffcd32;
    vertical-align: middle;
    padding: 10px 0;
    width: 100%;
  }
`;

const Detail_Info_Frame = styled.div`
  box-sizing: border-box;
  padding: 0 60px;
`;

const Detail_Info_Box = styled.div`
  padding: 70px 0 80px;
  margin: 0 81.3333px;
  & > img {
    width: 100%;
  }
`;

// 그 다음 이미지 들어가고 (사이즈 740 * 740)

const Detail_Info_Title = styled.p`
  margin: 40px 0 0;
  font-size: 30px;
  line-height: 45px;
  font-weight: 700;
  letter-spacing: -0.45px;
  color: #222;
`;

const Detail_Info_Text = styled.p`
  margin: 20px 0 0;
  font-size: 18px;
  line-height: 30px;
  font-weight: 300;
  letter-spacing: -0.27px;
  color: #222;
`;

export default PostDetail;
