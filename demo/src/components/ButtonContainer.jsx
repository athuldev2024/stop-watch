import React from "react";
import styled from "styled-components";
import COLORS from "@constants/colors";
import { StartButton, PauseButton, ResetButton } from "@components/buttons";

const ButtonContainerStyleComp = styled.div`
  width: 18rem;
  height: 6rem;
  border-radius: 0.5rem;
  box-shadow: 0 6px 16px rgba(29, 4, 4, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

function ButtonContainer() {
  return (
    <ButtonContainerStyleComp>
      <StartButton />
      <PauseButton />
      <ResetButton />
    </ButtonContainerStyleComp>
  );
}

export default ButtonContainer;
