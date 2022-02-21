import React from "react";
import styled from "styled-components";

interface BigTitleProps {
  top: string;
  left: string;
  right: string;
  text?: string;
}

const Text = styled.h1<BigTitleProps>`
  position: fixed;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  color: ${(props) => `rgba(${props.theme.textRgba},0.1)`};
  font-size: calc(5rem + 5vw);
  z-index: 0;
`;

const BigTitle: React.FC<BigTitleProps> = ({ top, left, right, text }) => {
  return (
    <Text top={top} left={left} right={right}>
      {text}
    </Text>
  );
};

export default BigTitle;
