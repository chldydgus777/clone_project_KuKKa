import React from "react";
import styled from "styled-components";
import facebook from "../images/Sns_Facebook.png";
import instagram from "../images/Sns_Instagram.png";
import youtube from "../images/Sns_Youtube.png";
import logo from "../images/Kukka.png";

const Footer = (props) => {
  return (
    <React.Fragment>
      <FooterFrame>
        <FooterInner>
          {/* SNS Icons */}
          <FooterSNS>
            <a
              onClick={() =>
                window.open("https://ko-kr.facebook.com/kukka.kr/", "_blank")
              }
            >
              <img
                style={{
                  width: "32px",
                  height: "32px;",
                  cursor: "pointer",
                }}
                src={facebook}
              />
            </a>
            <a
              onClick={() =>
                window.open("https://www.instagram.com/kukkakorea/", "_blank")
              }
            >
              <img
                style={{
                  width: "32px",
                  height: "32px;",
                  margin: "0px 20px 0px 20px ",
                  cursor: "pointer",
                }}
                src={instagram}
              />
            </a>
            <a
              onClick={() =>
                window.open(
                  "https://www.youtube.com/channel/UC_zQakXCUPvjcfsU067zyCQ?view_as=subscriber/",
                  "_blank"
                )
              }
            >
              <img
                style={{
                  width: "32px",
                  height: "32px;",
                  cursor: "pointer",
                }}
                src={youtube}
              />
            </a>
          </FooterSNS>
          <FooterUpper>
            <FooterCS>
              <span style={{ color: "#f7f7f7", fontWeight: "bold" }}>
                꾸까 고객센터
              </span>
              <span style={{ color: "#f7f7f7", marginLeft: "10px" }}>
                1661-1031
              </span>
              <span
                style={{
                  color: "#9b9b9b",
                  fontSize: "14px",
                  padding: "16px",
                }}
              >
                (평일 10:00 - 13:00, 14:00 - 18:00 / 주말 & 공휴일 제외)
              </span>
            </FooterCS>
            <img
              style={{
                width: "150px",
                height: "63px;",
                backgroundSize: "1252px 845px",
                right: "16%",
              }}
              src={logo}
            />
          </FooterUpper>
          <FooterLower>
            <CompanyInfo>
              <p>
                상호명: 꾸까(kukka) | 사업자 등록번호: 264-81-3259 | 대표자:
                박춘화{" "}
              </p>
              <p>
                소재지: 서울시 서초구 남부순환로333길 10 kukka | 기업공시 |
                통신판매신고번호 2018-서울서초-1692
              </p>
              <p>© 2014-2021 kukka, Inc. All rights reserved.</p>
            </CompanyInfo>
            <Terms>
              <span>이용약관</span>
              <span>개인정보 처리방침</span>
              <span>제휴안내</span>
            </Terms>
          </FooterLower>
        </FooterInner>
      </FooterFrame>
    </React.Fragment>
  );
};

const FooterFrame = styled.div`
  padding: 0 60px;
  background: #222222;
`;

const FooterSNS = styled.nav`
  width: 100%;
`;

const FooterInner = styled.div`
  padding: 80px 0;
`;

const FooterUpper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px solid #ececec;
`;

const FooterLower = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
`;

const CompanyInfo = styled.div`
  width: 75%;

  & > p {
    margin: 0;
    color: #d3d3d3;
    font-size: 14px;
    line-height: 25px;
    font-weight: 300;
    letter-spacing: -0.21px;
  }
`;

const Terms = styled.div`
  width: 25%;

  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  & > span {
    margin: 0;
    color: #d3d3d3;
    font-size: 14px;
    line-height: 25px;
    font-weight: 300;
    letter-spacing: -0.21px;
  }
`;

const FooterCS = styled.div`
  width: 70%;
`;

export default Footer;
