import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { PowerBtn } from "../components/AllSvgs";

type PowerButtonProps = {};

const Power = styled.button`
  position: fixed;
  top: 2rem;
  left: 50%;
  transform: translate(-50%, 0);
  background-color: #fcf6f4;
  padding: 0.3rem;
  border-radius: 50%;
  border: 1px solid #000;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 255, 0, 0.4);
    box-shadow: 0 0 8px 6px rgba(0, 255, 0, 0.2);
  }
  & > *:first-child {
    text-decoration: none;
    color: inherit;
  }
`;

const PowerButton: React.FC<PowerButtonProps> = () => {
  return (
    <NavLink to="/">
      <Power>
        <PowerBtn width={30} height={30} fill="currentColor" />
      </Power>
    </NavLink>
  );
};

export default PowerButton;
