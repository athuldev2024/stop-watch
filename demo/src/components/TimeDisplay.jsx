import React from "react";
import styled from "styled-components";

const TimeContainer = styled.div`
  width: 24rem;
  height: 8rem;
  font-family: "Orbitron", sans-serif;
  font-size: 5rem;
  color: #000;
  background-color: #e6f2ff;
  padding: 1rem 2rem;
  border-radius: 8px;
  display: inline-block;
  box-shadow: inset 0 0 4px #aaa;
  text-align: center;
  letter-spacing: 0.15rem;
`;

function TimeDisplay({ displayTime }) {
  return <TimeContainer>{displayTime}</TimeContainer>;
}

export default React.memo(TimeDisplay, (prevProps, nextProps) => {
  prevProps.displayTime === nextProps.displayTime;
});
