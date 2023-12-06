import styled from "styled-components";
import KandleIcon from "../assets/icons/kandle-logo.svg";
import ProfileTextIcon from "../assets/icons/profile_text.svg";
import ChatIcon from "../assets/icons/chat.svg";
import DotIcon from "../assets/icons/dot.svg";

const StyledHeader = styled.div`
  height: 6.5rem;
  background-color: #2d3035;
  display: flex;
  justify-content: space-between;
  padding: 0 6.7rem;
  align-items: center;
`;

const StyledLogo = styled.img`
  height: 2.4rem;
  width: 8.98rem;
`;

const StyledBalanceContainer = styled.div`
  display: flex;
  height: 4.2rem;
  background-color: #1e2024;
  width: 18rem;
  border-radius: 4px;
  justify-content: space-between;
  overflow: hidden;
`;

const StyledBalance = styled.div`
  height: 4.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  margin-left: 1.8rem;
`;

const ProfileTextImg = styled.img`
  height: 2.4rem;
  width: 2.133rem;
  clip-path: circle();
`;

const BalanceBtn = styled.div`
  height: 4.2rem;
  width: 7rem;
  background-color: #1e8139;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
`;

const BalText = styled.div`
  color: #fff;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  opacity: 0.9;
`;

const WalletText = styled.div`
  color: #fff;
  font-size: 12.5px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  opacity: 0.9;
`;

const StyledProfileContainer = styled.div`
  display: flex;
  height: 4.5rem;
  gap: 2.4rem;
  align-items: center;
`;

const ProfileIcon = styled.div`
  height: 4.5rem;
  width: 4.5rem;
  border-radius: 5rem;
  background-color: #24262b;
`;

const ProfileImg = styled.img`
  height: 4.5rem;
  cursor: pointer;
`;

const ChatDiv = styled.div`
  height: 4.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
`;

const ChatImg = styled.img``;

const Dot = styled.img`
  position: absolute;
  top: 5px;
  right: 0;
`;

function Header({ imgSrc }) {
  return (
    <StyledHeader>
      <StyledLogo src={KandleIcon} />
      <StyledBalanceContainer>
        <StyledBalance>
          <BalText>0.0000</BalText>
          <ProfileTextImg src={imgSrc ? imgSrc : ProfileTextIcon} />
        </StyledBalance>
        <BalanceBtn>
          <WalletText>Wallet</WalletText>
        </BalanceBtn>
      </StyledBalanceContainer>
      <StyledProfileContainer>
        <ProfileIcon>
          <ProfileImg
            src={
              "https://s3-alpha-sig.figma.com/img/933e/5d6d/724f0823923b8bfdcb018a0a98a965ef?Expires=1702857600&Signature=mvWQIE36bWfSwuvhvAmsDIlt5OmNTkqay78dCmPR0hRXsd4QcdzaNJJv1Ct99wA3lbc8meYhfyO8E9C~wC4vdikkn9dOyxQIo3qNyOeIkEJaCqSBGlk3uK7SgVpIgCWDBazS7CjQPFKSX2XIzVaiak87X6HESZSB8NU-gPjW-k0yFADHWZsiiV-OtL-DCO34pPU7~~kHQmdBbv0Ank4Sa3nvqLASBZvYZkj8giY7lupnBJh34rBIm9DL9E6fg1ujBz3nm9k75fZV-eBISw4irz0rCp742JBhApvXqfn~H59gn421Y8Ki8OW-CewweRtXTe63h~3u9qglUNw6gaVU4w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            }
          />
        </ProfileIcon>
        <ChatDiv>
          <ChatImg src={ChatIcon} />
          <Dot src={DotIcon} />
        </ChatDiv>
      </StyledProfileContainer>
    </StyledHeader>
  );
}

//https://s3-alpha-sig.figma.com/img/933e/5d6d/724f0823923b8bfdcb018a0a98a965ef?Expires=1702857600&Signature=mvWQIE36bWfSwuvhvAmsDIlt5OmNTkqay78dCmPR0hRXsd4QcdzaNJJv1Ct99wA3lbc8meYhfyO8E9C~wC4vdikkn9dOyxQIo3qNyOeIkEJaCqSBGlk3uK7SgVpIgCWDBazS7CjQPFKSX2XIzVaiak87X6HESZSB8NU-gPjW-k0yFADHWZsiiV-OtL-DCO34pPU7~~kHQmdBbv0Ank4Sa3nvqLASBZvYZkj8giY7lupnBJh34rBIm9DL9E6fg1ujBz3nm9k75fZV-eBISw4irz0rCp742JBhApvXqfn~H59gn421Y8Ki8OW-CewweRtXTe63h~3u9qglUNw6gaVU4w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4

export default Header;
