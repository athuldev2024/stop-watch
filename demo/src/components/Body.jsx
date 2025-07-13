import React, { useState } from "react";
import styled from "styled-components";
import COLORS from "@constants/colors";
import ButtonContainer from "@components/buttons/ButtonContainer";
import TimeDisplay from "@components/TimeDisplay";

const BodyContainer = styled.div`
  background-color: ${() => COLORS.PRIMARY};
  padding: 1rem;
  width: 100%;
`;

function Body() {
  const [time, setTime] = useState(0);

  return (
    <BodyContainer>
      <TimeDisplay time={time} />
      <ButtonContainer setTime={setTime} />
    </BodyContainer>
  );
}

export default Body;
