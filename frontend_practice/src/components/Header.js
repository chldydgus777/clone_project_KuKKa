import React, { useRef } from "react";
import styled from "styled-components";
import LogoPic from "../images/LogoPhoto.png";
import "../shared/mystyle.css";
import { history } from "../redux/configureStore";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

import Cart from "../images/func_cart.png";
import Mypage from "../images/func_my.png";

const Header = (props) => {
  const ref = useRef(null);
  const handleScroll = () => {
    if (ref.current) {
      if (ref.current.offsetTop < window.pageYOffset) {
        ref.current.classList.add("sticky");
      } else {
        ref.current.classList.remove("sticky");
      }
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    };
  }, []);

  const dispatch = useDispatch();
  const is_login = useSelector((state) => state.user.is_login);

  if (is_login) {
    return (
      <React.Fragment>
        <HeaderFrame>
          {/* 로그인, 회원가입, 기업제휴 */}
          <PageMoving>
            <PageMoving_Ul>
              <PageMoving_list className="greeting">
                <button>{localStorage.getItem("nick")}</button>
              </PageMoving_list>
              <PageMoving_list className="toMyInfo">
                <button>내정보</button>
              </PageMoving_list>
              <PageMoving_list className="toSignOut">
                <button
                  onClick={() => {
                    dispatch(userActions.logOutDB());
                  }}
                >
                  로그아웃
                </button>
              </PageMoving_list>
            </PageMoving_Ul>
          </PageMoving>
          {/* Navbar */}
          <Navbar id="navbar">
            {/* 로고 들어가는 곳 */}
            <LogoBox>
              <button
                onClick={() => {
                  history.push("/");
                }}
              ></button>
            </LogoBox>
            {/* Nav 버튼들 들어가는 곳 */}
            <NavbarBtn_Ul>
              <NavbarBtn_list>
                <button>꽃 정기구독</button>
              </NavbarBtn_list>
              <NavbarBtn_list>
                <button>꽃다발</button>
              </NavbarBtn_list>
              <NavbarBtn_list>
                <button>당일배송</button>
              </NavbarBtn_list>
              <NavbarBtn_list>
                <button>플라워클래스</button>
              </NavbarBtn_list>
              <NavbarBtn_list>
                <button>소품샵</button>
              </NavbarBtn_list>
              <NavbarBtn_list>
                <button>이벤트</button>
              </NavbarBtn_list>
            </NavbarBtn_Ul>
            {/* 아이콘 박스 */}
            <IconBox>
              <Icon>
                <button>
                  <i className="fas fa-user"></i>
                </button>
              </Icon>
              <Icon>
                <button>
                  <i className="fas fa-shopping-bag"></i>
                </button>
              </Icon>
            </IconBox>
          </Navbar>
        </HeaderFrame>
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      <HeaderFrame>
        {/* 로그인, 회원가입, 기업제휴 */}
        <PageMoving>
          <PageMoving_Ul>
            <PageMoving_list className="toLogin">
              <button
                onClick={() => {
                  history.push("/login");
                }}
              >
                로그인
              </button>
            </PageMoving_list>
            <PageMoving_list className="toSignup">
              <button
                onClick={() => {
                  history.push("/signup");
                }}
              >
                회원가입(1000포인트 지급!)
              </button>
            </PageMoving_list>
            <PageMoving_list className="toCompany">
              <button>기업제휴</button>
            </PageMoving_list>
          </PageMoving_Ul>
        </PageMoving>
        {/* Navbar */}
        <Navbar ref={ref}>
          {/* 로고 들어가는 곳 */}
          <LogoBox>
            <button
              onClick={() => {
                history.push("/");
              }}
            ></button>
          </LogoBox>
          {/* Nav 버튼들 들어가는 곳 */}
          <NavbarBtn_Ul>
            <NavbarBtn_list>
              <button>꽃 정기구독</button>
            </NavbarBtn_list>
            <NavbarBtn_list>
              <button>꽃다발</button>
            </NavbarBtn_list>
            <NavbarBtn_list>
              <button>당일배송</button>
            </NavbarBtn_list>
            <NavbarBtn_list>
              <button>플라워클래스</button>
            </NavbarBtn_list>
            <NavbarBtn_list>
              <button>소품샵</button>
            </NavbarBtn_list>
            <NavbarBtn_list>
              <button>이벤트</button>
            </NavbarBtn_list>
          </NavbarBtn_Ul>
          {/* 아이콘 박스 */}
          <IconBox>
            <Icon>
              <button>
                <img src={Mypage}></img>
              </button>
            </Icon>
            <Icon>
              <button>
                <img src={Cart}></img>
              </button>
            </Icon>
          </IconBox>
        </Navbar>
      </HeaderFrame>
    </React.Fragment>
  );
};

// 가장 바깥 헤더 프레임
const HeaderFrame = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 0 60px;
  color: #222222;
  font-size: 18px;
  font-weight: 600;
  text-decoration: none solid rgb(34, 34, 34);
`;

// 로그인, 회원가입, 기업제휴 부분들
const PageMoving = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  font-size: 14px;
  font-weight: 300;
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
  & > button {
    width: 100%;
    height: 100%;
  }
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
  & > button {
    font-size: 18px;
    padding-bottom: 10px;
    border-bottom: 5px solid white;
    box-sizing: border-box;
  }

  & > button:hover {
    border-bottom: 5px solid #fed049;
  }
`;

// 내 정보 & 장바구니 버튼

const IconBox = styled.div`
  display: flex;
  align-items: center;
`;

const Icon = styled.div`
  background: white;
  margin-right: 20px;
  & > button {
    font-size: 24px;
  }
`;

// sticky header

export default Header;
