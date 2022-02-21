import React, { useEffect } from "react";
import styled from "styled-components";
import { Anchor, Link } from "../components/AllSvgs";

type AnchorComponentProps = {
  numbers: number;
};

const Container = styled.div`
  position: relative;
`;

const Slider = styled.div`
  position: fixed;
  top: 0;
  right: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transform: translateY(-100%);

  .chain {
    transform: rotate(135deg);
  }
`;

const PreDisplay = styled.div`
  position: absolute;
  top: 0;
  right: 2rem;
`;

const AnchorComponent: React.FC<AnchorComponentProps> = ({ numbers }) => {
  // need to sort out this typing, cant just use any
  const ref = React.useRef<any>(null);
  const hiddenRef = React.useRef<any>(null);

  useEffect(() => {
    const handleScroll = () => {
      let scrollPosition = window.pageYOffset;
      let windowSize = window.innerHeight;
      let bodyHeight = document.body.offsetHeight;

      let diff = Math.max(bodyHeight - (scrollPosition + windowSize));
      let diffP = (diff * 100) / (bodyHeight - windowSize);

      ref.current.style.transform = `translateY(${-diffP}%)`;

      if (window.pageYOffset > 5) {
        hiddenRef.current.style.display = "none";
      } else {
        hiddenRef.current.style.display = "block";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Container>
      <PreDisplay ref={hiddenRef} className="hidden">
        <Anchor width={70} height={70} fill="currentColor" />
      </PreDisplay>
      <Slider ref={ref}>
        {[...Array(numbers)].map((x, id) => {
          return (
            <Link key={id} width={25} fill="currentColor" className="chain" />
          );
        })}
        <Anchor width={70} height={70} fill="currentColor" />
      </Slider>
    </Container>
  );
};

export default AnchorComponent;
