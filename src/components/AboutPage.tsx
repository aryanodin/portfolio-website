import React from "react";
import styled, { keyframes, ThemeProvider } from "styled-components";
import { darkTheme } from "./Themes";
import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";
import ParticleComponent from "../subComponents/ParticleComponent";
import JB from "../assets/images/spaceman.png";
import BigTitle from "../subComponents/BigTitle";

interface AboutPageProps {}

const Above = styled.div`
  position: absolute;
  z-index: 1;
`;

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }
`;

const Spaceman = styled.div`
  position: absolute;
  top: 10%;
  right: 5%;
  width: 20vw;
  animation: ${float} 4s ease infinite;
  z-index: 2;

  img {
    width: 100%;
    height: auto;
  }
`;

const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
  backdrop-filter: blur(4px);
  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
  font-family: "Ubuntu Mono", monospace;
  font-style: italic;
`;

const AboutPage: React.FC<AboutPageProps> = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Above>
        <ParticleComponent theme="dark" />
      </Above>
      <LogoComponent theme="dark" />
      <SocialIcons theme="dark" />
      <PowerButton />
      <Box>
        <Spaceman>
          <img src={JB} alt="spaceman" />
        </Spaceman>
        <Main>Lorem Ipsum</Main>
        <BigTitle text="ABOUT" top="10%" left="5%" right="" />
      </Box>
    </ThemeProvider>
  );
};

export default AboutPage;
