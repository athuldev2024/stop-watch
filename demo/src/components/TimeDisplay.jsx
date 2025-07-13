// components/TimeDisplay.jsx
import styled from "styled-components";

const TimeContainer = styled.div`
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

function TimeDisplay({ time }) {
  const formatTime = () => {
    const getTwoDigits = (num) => String(num).padStart(2, "0");

    const minutes = getTwoDigits(Math.floor(time / 60000) % 60);
    const seconds = getTwoDigits(Math.floor(time / 1000) % 60);
    const milliseconds = getTwoDigits(Math.floor((time % 1000) / 10));

    return `${minutes}:${seconds}.${milliseconds}`;
  };

  return <TimeContainer>{formatTime()}</TimeContainer>;
}

export default TimeDisplay;
