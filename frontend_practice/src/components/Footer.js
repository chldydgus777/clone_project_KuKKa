import React from "react";
import styled from "styled-components";
import facebook from "../images/Sns_Facebook.png";
import instagram from "../images/Sns_Instagram.png";
import youtube from "../images/Sns_Youtube.png";
import logo from "../images/Kukka.png";

const Footer = (props) => {
    
    return(
        <React.Fragment>
            <FooterFrame>
            <div style={{background:"#222", maxWidth:"1240px",margin:"0 auto", padding:"0 60px"}}>
            <Icon>
            <a onClick={() => window.open('https://ko-kr.facebook.com/kukka.kr/', '_blank')} ><img style={{width:"32px", height:"32px;", cursor:'pointer' }} src={facebook} /></a>
            <a onClick={() => window.open('https://www.instagram.com/kukkakorea/', '_blank')} ><img style={{width:"32px", height:"32px;", margin : "0px 20px 0px 20px ", cursor:'pointer' }} src={instagram} /></a>
            <a onClick={() => window.open('https://www.youtube.com/channel/UC_zQakXCUPvjcfsU067zyCQ?view_as=subscriber/', '_blank')} ><img style={{width:"32px", height:"32px;", cursor:'pointer' }} src={youtube} /></a>
            </Icon>
            <Sc>
                <p style={{color: "#f7f7f7", fontWeight:"bold"}}>꾸까 고객센터</p>
                <p style={{color: "#f7f7f7", marginLeft : "10px" }}>1661-1031</p>
                <p style ={{color:"#9b9b9b", fontSize:"14px", padding:"16px" }}>(평일 10:00 - 13:00, 14:00 - 18:00 / 주말 & 공휴일 제외)</p>
                
                <img style={{width:"150px", height:"63px;",backgroundSize:"1252px 845px", position:"absolute", right:"16%" }} src={logo} />
               <Button_1 style={{fontSize:"13px", fontWeight:"bold" }}>
                    자주 묻는 질문
               </Button_1>

            </Sc>
            
                <hr Color="#444444" />
            <CI>
            <span style={{color:"#D3D3D3"}}>상호명: 꾸까(kukka) | 사업자 등록번호: 264-81-3259 |  대표자: 박춘화 </span>
            <span style={{color:"#D3D3D3"}}>소재지: 서울시 서초구 남부순환로333길 10 kukka  |  기업공시 | 통신판매신고번호 2018-서울서초-1692      </span>
            <span style={{color:"#D3D3D3"}}>© 2014-2021 kukka, Inc. All rights reserved.</span>         
            <Tems>
            <p>이용약관</p>         
            <p>개인정보 처리방침</p>         
            <p>제휴안내</p>  
            </Tems>
            </CI>
            
            </div>
            </FooterFrame>
        </React.Fragment>

    );
} ;

const FooterFrame = styled.div` 
max-width : 100%;
margin : 0 auto;
magin-top : 100px;
padding : 60px;
background : #222222;
`;


const Icon = styled.nav`
color : white;
display :block;
box-sizing: border-box;
text-align : left;

`;


// Service Center
const Sc = styled.div`
display : flex;
font-size : 22px;
line-height: 33px
float : left;
font-weight : bold;
height : 100%
`;

//Company Imformation 
const CI = styled.div`
margin: 25px 0px;
display : flex;
font-size : 14px;
font-weight : bold;;
flex-direction: column;
text-align : left;
line-height: 19px
letter-spacing: -.5px;
outline-width: 1px;

`

const Button_1 = styled.button`
border: #9b9b9b 10px solid
padding : 0px 20px 0px 20px;
border-radius: 18px;
cursor : pointer;
font-size: 13px;
line-height : 36px;
font-weight : 300;

`;

const Tems= styled.div`
display : flex;
flex-direction: row;
float : right;
text-align : right;

`


export default Footer;