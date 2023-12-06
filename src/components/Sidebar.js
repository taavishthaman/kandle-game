import styled from "styled-components";
import Hamburger from "./Hamburger";
import BtnContainer from "./BtnContainer";
import SideBtn from "./SideBtn";

//Importing relevant icons
import CompassIcon from "../assets/icons/compass.svg";
import ClockIcon from "../assets/icons/clock.svg";
import ControllerIcon from "../assets/icons/controller.svg";
import PortfolioIcon from "../assets/icons/portfolio.svg";
import RewardsIcon from "../assets/icons/rewards.svg";
import WinnersIcon from "../assets/icons/winners.svg";
import BadgesIcon from "../assets/icons/badges.svg";
import GiftIcon from "../assets/icons/gift.svg";
import AffiliateIcon from "../assets/icons/affiliate.svg";
import BookIcon from "../assets/icons/book.svg";
import UserGuideIcon from "../assets/icons/user_guide.svg";
import BlogIcon from "../assets/icons/blog.svg";
import HeadphoneIcon from "../assets/icons/headphones.svg";
import GlobeIcon from "../assets/icons/globe.svg";

const StyledSidebar = styled.div`
  background-color: #1a1c20;
  padding: 1rem 1.05rem;
`;

const StyledBtnDiv = styled.div`
  margin-top: 1.85rem;
`;

const BottomContainer = styled.div`
  height: 17.1rem;
`;

function Sidebar() {
  return (
    <StyledSidebar>
      <div>
        <Hamburger />
      </div>
      <>
        <StyledBtnDiv>
          <BtnContainer>
            <SideBtn text={"Explore"} icon={CompassIcon} />
            <SideBtn text={"Favorites"} icon={ClockIcon} />
          </BtnContainer>
          <BtnContainer>
            <SideBtn text={"Games"} icon={ControllerIcon} active={true} />
          </BtnContainer>
          <BtnContainer>
            <SideBtn text={"Portfolio"} icon={PortfolioIcon} />
          </BtnContainer>
          <BtnContainer>
            <SideBtn text={"Rewards"} icon={RewardsIcon} />
          </BtnContainer>
          <BtnContainer>
            <SideBtn text={"Winners"} icon={WinnersIcon} />
            <SideBtn text={"Badges"} icon={BadgesIcon} />
            <SideBtn text={"Promotions"} icon={GiftIcon} />
          </BtnContainer>
          <BtnContainer>
            <SideBtn text={"Affiliate"} icon={AffiliateIcon} />
            <SideBtn text={"Kandlepedia"} icon={BookIcon} />
            <SideBtn text={"User Guides"} icon={UserGuideIcon} />
            <SideBtn text={"Blog"} icon={BlogIcon} />
          </BtnContainer>
          <BottomContainer />
          <BtnContainer>
            <SideBtn text={"Live Support"} icon={HeadphoneIcon} />
          </BtnContainer>
          <BtnContainer>
            <SideBtn text={"Language: English"} icon={GlobeIcon} />
          </BtnContainer>
        </StyledBtnDiv>
      </>
    </StyledSidebar>
  );
}

export default Sidebar;
