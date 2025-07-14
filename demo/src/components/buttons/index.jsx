import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faRotateLeft,
} from "@fortawesome/free-solid-svg-icons";
import COLORS from "@constants/colors";

const BaseButton = styled.button`
  padding: 0.6rem 1.2rem;
  margin: 0.5rem;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  font-family: "Poppins", sans-serif;
  cursor: pointer;
  color: white;
  transition: background 0.2s ease-in-out;
  &:hover {
    opacity: 0.9;
  }
  &:active {
    opacity: 0.7;
    transform: scale(0.98);
  }
`;

function StartButton({ onClick }) {
  return (
    <BaseButton style={{ backgroundColor: COLORS.START }} onClick={onClick}>
      <FontAwesomeIcon icon={faPlay} />
    </BaseButton>
  );
}

function PauseButton({ onClick }) {
  return (
    <BaseButton style={{ backgroundColor: COLORS.PAUSE }} onClick={onClick}>
      <FontAwesomeIcon icon={faPause} />
    </BaseButton>
  );
}

function ResetButton({ onClick }) {
  return (
    <BaseButton style={{ backgroundColor: COLORS.RESET }} onClick={onClick}>
      <FontAwesomeIcon icon={faRotateLeft} />
    </BaseButton>
  );
}

export { StartButton, PauseButton, ResetButton };
