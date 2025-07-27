import React, { useState, useRef, useMemo } from "react";
import styled from "styled-components";
import COLORS from "@constants/colors";
import ButtonContainer from "@components/buttons/ButtonContainer";
import TimeDisplay from "@components/TimeDisplay";
import { formattedTime } from "@utils/date-utils";
import { StopWatchContext } from "@context";

const BodyContainer = styled.div`
  background-color: ${() => COLORS.PRIMARY};
  padding: 1rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 1rem;
`;

function Body() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const displayTime = useMemo(() => formattedTime(time), [time]);

  const onStart = () => {
    if (isRunning) {
      return;
    }

    setIsRunning(true);

    intervalRef.current = setInterval(() => {
      setTime((prevTime) => prevTime + 10);
    }, 10);
  };

  const onPause = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
  };

  const onReset = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setTime(0);
  };

  return (
    <BodyContainer>
      <StopWatchContext.Provider value={{ isRunning }}>
        <TimeDisplay displayTime={displayTime} />
        <ButtonContainer {...{ onStart, onPause, onReset }} />
      </StopWatchContext.Provider>
    </BodyContainer>
  );
}

export default Body;
