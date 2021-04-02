import React from "react";
import styled from "styled-components";

const Text = (props) => {
  const { bold, color, size, children, margin, text_align } = props;

  const styles = {
    margin: margin,
    bold: bold,
    color: color,
    size: size,
    text_align: text_align,
  };

  return <P {...styles}>{children}</P>;
};

Text.defaultProps = {
  children: null,
  bold: false,
  color: "#222831",
  size: "14px",
};

const P = styled.p`
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => (props.bold ? "600" : "400")};
  ${(props) => (props.margin ? `margin: ${props.margin}` : "")};
  text-align: ${(props) => props.text_align};
`;

export default Text;
