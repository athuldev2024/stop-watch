import React from "react";
import styled from "styled-components";
import COLORS from "@constants/colors";
import ButtonContainer from "@components/ButtonContainer";

const BodyContainer = styled.div`
  background-color: ${() => COLORS.PRIMARY};
  padding: 1rem;
  width: 100%;
`;

function Body() {
  return (
    <BodyContainer>
      <ButtonContainer />
    </BodyContainer>
  );
}

export default Body;
