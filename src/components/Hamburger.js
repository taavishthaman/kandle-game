import styled from "styled-components";
import HamburgerIcon from "../assets/icons/hamburger.svg";

const StyledHamburger = styled.div`
  height: 4.5rem;
  width: 4.5rem;
  background-color: #24262b;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const HamburgerImage = styled.img``;

function Hamburger() {
  return (
    <StyledHamburger>
      <HamburgerImage src={HamburgerIcon} />
    </StyledHamburger>
  );
}

export default Hamburger;
