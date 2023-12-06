import styled from "styled-components";

const StyledBtnContainer = styled.div`
  background-color: #24262b;
  border-radius: 4px;
  overflow: hidden;
  margin-top: 0.8rem;
`;

function BtnContainer({ children }) {
  return <StyledBtnContainer>{children}</StyledBtnContainer>;
}

export default BtnContainer;
