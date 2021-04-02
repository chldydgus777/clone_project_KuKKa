import React from "react";
import styled from "styled-components";
import Button from "../elements/Button";

const Header = (props) => {
  return (
    <React.Fragment>
      <HeaderFrame>
        안녕 난 헤더
        <Button is_header>버튼</Button>
      </HeaderFrame>
    </React.Fragment>
  );
};

const HeaderFrame = styled.nav`
  width: 100%;
  padding: 20px 12px;
  background: yellow;
`;

export default Header;
