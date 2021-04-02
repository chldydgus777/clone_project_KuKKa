import React from "react";
import styled from "styled-components";

const Button = (props) => {
  const {
    is_header,
    is_footer,
    text,
    color,
    bg,
    width,
    padding,
    border,
    border_Radius,
    children,
  } = props;

  const styles = {
    color: color,
    bg: bg,
    width: width,
    padding: padding,
    border: border,
    border_Radius: border_Radius,
  };

  if (is_header) {
    return (
      <React.Fragment>
        <HeaderBtn {...styles}>{text ? text : children}</HeaderBtn>
      </React.Fragment>
    );
  }
  return <React.Fragment {...styles}>{text ? text : children}</React.Fragment>;
};

Button.defaultProps = {
  text: "버튼",
  children: null,
  color: "white",
  bg: "black",
  width: "100px",
  padding: "12px",
  border: "none",
  border_Radius: "4px",
};

const HeaderBtn = styled.button`
  color: ${(props) => props.color};
  background: ${(props) => props.bg};
  width: ${(props) => props.width};
  padding: ${(props) => props.padding};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.border_Radius};
`;

export default Button;
