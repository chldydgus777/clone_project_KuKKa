import React from "react";
import styled from "styled-components";

const Grid = (props) => {
    const { is_flex, width, min_height ,margin, padding, bg, display,flex_direction, children, height} = props;

    const styles = {
        is_flex : is_flex,
        width : width,
        margin : margin ,
        padding : padding,
        bg : bg, 
        display  : display,
        flex_direction : flex_direction,
        height : height ,
        min_height : min_height
    };
    return (
        <React.Fragment>
            <GridBox {...styles}>{children}</GridBox>
        </React.Fragment>
    );

    };

Grid.defaultProps = {
    children : null,
    is_flex : false,
    width : "100%",
    padding : false, 
    margin : false,
    bg : false,
    dispaly : "none",
    flex_direction : "none",
    height:"100%",
    min_height : "100%"
};

const GridBox = styled.div`
    width: ${(props) => props.width};
    display: ${(props) => props.display};
    flex-direction : ${(props) => props.flex_direction};
    min-height : ${(props) => props.min_height};
    height: 100%;
    box-sizing: border-box;
    ${(props) => (props.padding ? `padding: ${props.padding};` : "")}
    ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
    ${(props) => (props.bg ? `background-color: ${props.bg};` : "")}
    ${(props) => props.is_flex? `display: flex; align-items: center; justify-content: space-between; `: ""}   
    `;

export default Grid;