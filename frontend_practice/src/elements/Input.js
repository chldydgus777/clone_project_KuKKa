import React from "react";
import styled from "styled-components";
import Text from "../elements/Text";

const Input = (props) => {
  const { label, placeholder, _onChange, type, padding } = props;

  return (
    <React.Fragment>
      {label && <Text margin="0px">{label}</Text>}
      <Text margin="0px"></Text>
      <ElInput
        type={type}
        placeholder={placeholder}
        onChange={_onChange}
        padding={padding}
      />
    </React.Fragment>
  );
};

Input.defaultProps = {
  label: false,
  placeholder: "텍스트를 입력해주세요.",
  _onChange: () => {},
  type: "text",
  padding: 0,
};

const ElInput = styled.input`
  border: solid 1px #d3d3d3;
  width: 100%;
  padding: 16px 20px;
  box-sizing: border-box;
  font-size: 16px;
  border-radius: 4px;
  margin-bottom: 15px;
  type : ${props => props.type}; 
`;
export default Input;
