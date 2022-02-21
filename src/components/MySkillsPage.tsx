import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme } from "./Themes";
import { Design, Develope } from "./AllSvgs";
import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";
import { motion } from "framer-motion";
import ParticleComponent from "../subComponents/ParticleComponent";
import BigTitle from "../subComponents/BigTitle";

interface MySkillsPageProps {}

const Above = styled.div`
  position: absolute;
  z-index: 1;
`;

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Main = styled(motion.div)`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  padding: 2rem;
  width: 30vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  cursor: pointer;
  font-family: "Ubuntu Mono", monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
    transition: all 0.3s ease;
  }
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);
  ${Main}:hover & {
    & > * {
      fill: ${(props) => props.theme.body};
    }
  }
  & > *:first-child {
    margin-right: 1rem;
  }
`;

const Description = styled.div`
  color: ${(props) => props.theme.text};
  font-size: calc(0.6em + 1vw);
  padding: 0.5rem 0;
  ${Main}:hover & {
    color: ${(props) => props.theme.body};
  }
  strong {
    margin-bottom: 1rem;
    text-transform: uppercase;
  }
  ul,
  p {
    margin-left: 2rem;
  }
`;

const MySkillsPage: React.FC<MySkillsPageProps> = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Above>
        <ParticleComponent theme="light" />
      </Above>
      <LogoComponent theme="light" />
      <SocialIcons theme="light" />
      <PowerButton />
      <Box>
        <Main>
          <Title>
            <Design width={40} height={40} /> Designer
          </Title>
          <Description>Lorem Ipsum</Description>
          <Description>
            <strong>Lorem Ipsum</strong>
            <ul>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
            </ul>
          </Description>
          <Description>
            <strong>Lorem Ipsum</strong>
            <ul>
              <li>Lorem Ipsum</li>
            </ul>
          </Description>
        </Main>
        <Main>
          <Title>
            <Develope width={40} height={40} /> Software Developer
          </Title>
          <Description>Lorem Ipsum</Description>
          <Description>
            <strong>Lorem Ipsum</strong>
            <p>Lorem Ipsum</p>
          </Description>
          <Description>
            <strong>Lorem Ipsum</strong>
            <p>Lorem Ipsum</p>
          </Description>
        </Main>
        <BigTitle text="SKILLS" top="80%" right="35%" left="" />
      </Box>
    </ThemeProvider>
  );
};

export default MySkillsPage;
