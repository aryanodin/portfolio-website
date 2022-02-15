import React from "react";
import styled from "styled-components";
import { darkTheme } from "../components/Themes";

interface LogoComponentProps {
  theme: any;
}

const Logo = styled.h1`
  display: inline-block;
  color: ${(props) =>
    props.color === "dark" ? darkTheme.text : darkTheme.body};
  font-family: "Pacifico", cursive;
  position: fixed;
  left: 2rem;
  top: 2rem;
  z-index: 3;
`;

const LogoComponent: React.FC<LogoComponentProps> = (props) => {
  return <Logo color={props.theme}>AB</Logo>;
};

export default LogoComponent;
