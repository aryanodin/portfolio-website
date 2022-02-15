import React from "react";
import { NavLink } from "react-router-dom";
import { Facebook, Github, Twitter, Youtube } from "../components/AllSvgs";
import styled from "styled-components";
import { darkTheme } from "../components/Themes";

interface SocialIconsProps {
  theme: any;
}

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 2rem;
  z-index: 3;
  & > *:not(:last-child) {
    margin: 0.5rem 0;
  }
`;

// got to fix the colour of the line

const Line = styled.span<SocialIconsProps>`
  width: 2px;
  height: 8rem;
  background-color: ${(props) =>
    props.color === "dark" ? darkTheme.text : darkTheme.body};
`;

const SocialIcons: React.FC<SocialIconsProps> = (props) => {
  return (
    <Icons>
      <div>
        <NavLink
          style={{ color: "inherit" }}
          target="_blank"
          to={{ pathname: "https://github.com/aryanodin" }}
        >
          <Github
            width={25}
            height={25}
            fill={props.theme === "dark" ? darkTheme.text : darkTheme.body}
          />
        </NavLink>
      </div>
      <div>
        <NavLink
          style={{ color: "inherit" }}
          target="_blank"
          to={{ pathname: "https://twitter.com/aryanodin" }}
        >
          <Twitter
            width={25}
            height={25}
            fill={props.theme === "dark" ? darkTheme.text : darkTheme.body}
          />
        </NavLink>
      </div>
      <div>
        <NavLink
          style={{ color: "inherit" }}
          target="_blank"
          to={{ pathname: "" }}
        >
          <Facebook
            width={25}
            height={25}
            fill={props.theme === "dark" ? darkTheme.text : darkTheme.body}
          />
        </NavLink>
      </div>
      <div>
        <NavLink
          style={{ color: "inherit" }}
          target="_blank"
          to={{ pathname: "https://www.youtube.com/OdinEdits" }}
        >
          <Youtube
            width={25}
            height={25}
            fill={props.theme === "dark" ? darkTheme.text : darkTheme.body}
          />
        </NavLink>
      </div>

      <Line color={props.theme} />
    </Icons>
  );
};

export default SocialIcons;
