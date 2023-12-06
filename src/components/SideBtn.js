import styled from "styled-components";

const StyledSideBtn = styled.div`
  padding: 1.2rem 1.6rem;
  display: flex;
  gap: 1.2rem;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  background-color: #24262b;
  align-items: center;
  cursor: pointer;
  color: ${(props) => (!props.active ? "rgba(122, 135, 146, 0.9)" : "#fff")};
`;

const IconImg = styled.img``;

function SideBtn({ text, icon, active = false }) {
  return (
    <StyledSideBtn active={active}>
      <IconImg src={icon} />
      <div>{text}</div>
    </StyledSideBtn>
  );
}

export default SideBtn;
