import React, { useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./Themes";
import { motion } from "framer-motion";
import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";

import { Work } from "../data/WorkData";
import Card from "../subComponents/Card";
import { Yinyang } from "./AllSvgs";
import BigTitle from "../subComponents/BigTitle";

interface WorkPageProps {}

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  height: 400vh;
  position: relative;
  display: flex;
  align-items: center;
`;

const Main = styled(motion.ul)`
  position: fixed;
  top: 12rem;
  left: calc(10rem + 15vw);
  height: 40vh;
  display: flex;
  color: white;
`;

const Rotate = styled.span`
  display: block;
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  width: 80px;
  height: 80px;
  z-index: 1;
`;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
    },
  },
};

const WorkPage: React.FC<WorkPageProps> = () => {
  const ref = React.useRef<any>(null);
  const yinyang = React.useRef<any>(null);

  useEffect(() => {
    let element = ref.current;

    const rotate = () => {
      element.style.transform = `translateX(${-window.pageYOffset}px)`;

      return (yinyang.current.style.transform =
        "rotate(" + -window.pageYOffset + "deg)");
    };

    window.addEventListener("scroll", rotate);

    return () => {
      window.removeEventListener("scroll", rotate);
    };
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <LogoComponent theme="dark" />
      <SocialIcons theme="dark" />
      <PowerButton />
      <Box>
        <Main ref={ref} variants={container} initial="hidden" animate="show">
          {Work.map((d) => (
            <Card key={d.id} data={d} />
          ))}
        </Main>
        <Rotate ref={yinyang}>
          <Yinyang width={80} height={80} fill={darkTheme.text} />
        </Rotate>

        <BigTitle text="WORK" top="75%" right="15%" left="" />
      </Box>
    </ThemeProvider>
  );
};

export default WorkPage;
