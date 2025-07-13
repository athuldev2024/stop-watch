import React from "react";
import styled from "styled-components";
import COLORS from "@constants/colors";
import { currentDate } from "@utils/date-utils";

const FooterContainer = styled.footer`
  background-color: ${() => COLORS.SECONDARY};
  color: white;
  text-align: center;
  padding: 0.75rem;
  position: fixed;
  bottom: 0;
  width: 100%;
  font-family: "Poppins", sans-serif;
  font-size: 0.85rem;
`;

function Footer() {
  return (
    <FooterContainer>
      &copy; ${currentDate()} Stopwatch application
    </FooterContainer>
  );
}

export default Footer;
