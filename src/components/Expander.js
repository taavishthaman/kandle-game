import styled from "styled-components";
import RulesIcon from "../assets/icons/rules.svg";
import ExpandIcon from "../assets/icons/expand.svg";
import ContractIcon from "../assets/icons/contract.svg";
import PlayIcon from "../assets/icons/play.svg";
import { useState } from "react";

const StyledExpander = styled.div`
  padding: 1.6rem 2.4rem;
  background-color: #1c1e22;
  margin: 2.4rem 0;
  width: calc(100% - 10.2rem);
  margin-left: 5.1rem;
  border-radius: 4px;
`;

const ExpanderHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const RulesContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: center;
`;

const RulesImg = styled.img`
  cursor: pointer;
`;

const RulesText = styled.div`
  color: #9ca4ab;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px; /* 112.5% */
  letter-spacing: 0.16px;
`;

const OpenContainer = styled.div`
  display: flex;
  margin-top: 2rem;
  justify-content: space-between;
  align-items: flex-start;
`;

const PointTxt = styled.ol`
  color: #cfd8df;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 26px; /* 185.714% */
  padding-left: 1.8rem;
  width: 59.6rem;
`;

const VideoBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1rem 1.6rem 1rem 1.4rem;
  background-color: #2d3035;
  border-radius: 6.6rem;
  cursor: pointer;
`;

const VideoTxt = styled.div`
  color: #cfd8df;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

function Expander() {
  const [open, setOpen] = useState(false);
  return (
    <StyledExpander>
      <ExpanderHeader>
        <RulesContainer>
          <RulesImg src={RulesIcon} />
          <RulesText>Game Rules</RulesText>
        </RulesContainer>
        <RulesImg
          src={open ? ContractIcon : ExpandIcon}
          onClick={() => setOpen(!open)}
        />
      </ExpanderHeader>
      {open && (
        <OpenContainer>
          <PointTxt>
            <li>
              You have to select 5 coins to make your own virtual portfolio.
            </li>
            <li>
              Proceed to submit your portfolio and pay the entry fee for the
              league.
            </li>
            <li>Once all spots in the league are filled, all submitted.</li>
            <li>
              You have to select 5 coins to make your own virtual portfolio.
              Proceed to submit your portfolio and pay the entry fee for the
              league.
            </li>
            <li>Once all spots in the league are filled, all submitted.</li>
          </PointTxt>
          <VideoBtn>
            <RulesImg src={PlayIcon} />
            <VideoTxt>Watch Guide</VideoTxt>
          </VideoBtn>
        </OpenContainer>
      )}
    </StyledExpander>
  );
}

export default Expander;
