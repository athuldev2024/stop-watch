import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStopwatch } from "@fortawesome/free-solid-svg-icons";
import COLORS from "@constants/colors";

const HeaderContainer = styled.header`
  background-color: ${() => COLORS.SECONDARY};
  color: white;
  padding: 1rem;
  font-family: "Poppins", sans-serif;
  top: 0;
  width: 100%;
  position: fixed;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 2.8rem;
  font-weight: 600;
`;

function Header() {
  return (
    <HeaderContainer>
      <Title>
        <FontAwesomeIcon icon={faStopwatch} style={{ marginRight: "8px" }} />
      </Title>
    </HeaderContainer>
  );
}

export default Header;
