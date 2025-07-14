import React, { useContext } from "react";
import styled from "styled-components";
import COLORS from "@constants/colors";
import { StartButton, PauseButton, ResetButton } from "@components/buttons";
import { StopWatchContext } from "@context";

const ButtonContainerStyleComp = styled.div`
  width: 18rem;
  height: 6rem;
  border-radius: 0.5rem;
  box-shadow: 0 6px 16px rgba(29, 4, 4, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

function ButtonContainer({ onStart, onPause, onReset }) {
  const { isRunning } = useContext(StopWatchContext);

  return (
    <ButtonContainerStyleComp>
      {!isRunning && (
        <StartButton data-testid="start-button" onClick={onStart} />
      )}
      {isRunning && (
        <PauseButton data-testid="pause-button" onClick={onPause} />
      )}
      <ResetButton
        onClick={onReset}
        data-testid="reset-button"
        disabled={isRunning}
      />
    </ButtonContainerStyleComp>
  );
}

export default ButtonContainer;
