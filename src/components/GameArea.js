import styled from "styled-components";
import Header from "./Header";
import GameAreaDesign from "../assets/designs/game_area_design.svg";
import CoinCard from "./CoinCard";
import BoltIcon from "../assets/icons/bolt.svg";
import ArrowIcon from "../assets/icons/arrow.svg";
import AddIcon from "../assets/icons/add.svg";
import SubtractIcon from "../assets/icons/subtract.svg";
import ArrowsIcon from "../assets/icons/arrows.svg";
import Expander from "./Expander";
import { data } from "../data/data";
import { useState } from "react";

const StyledGameArea = styled.div`
  height: 100vh;
  background-color: #24262b;
`;

const GameOuterContainer = styled.div`
  margin: 3.2rem 5.1rem;
  background-color: #1c1e22;
  border-radius: 4px;
  padding: 2.4rem;
`;

const GameHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1.6rem;
  border-bottom: 1px solid rgba(101, 110, 120, 0.5);
  padding-bottom: 3.4rem;
  position: relative;
`;

const GameText = styled.div`
  color: #b5bec6;
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const GameSubText = styled.div`
  color: #57ae10;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const HeaderBtnContainer = styled.div`
  display: flex;
  position: absolute;
  background-color: #24262b;
  border-radius: 8px;
  padding: 5px;
  gap: 5px;
  align-items: center;
  justify-content: center;
  right: 2.4rem;
`;

const HeaderBtn = styled.div`
  padding: 1rem 2.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background-color: ${(props) => props.active && "#1E8139"};
  color: ${(props) => (props.active ? "#FFF" : "#CFD8DF")};
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  cursor: pointer;
`;

const StyledGameField = styled.div`
  height: 58.3rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 42.6rem;
  border-radius: 4px;
  background-color: #292c31;
  margin-top: 2.4rem;
  overflow: hidden;
  position: relative;
  margin-bottom: 1.6rem;
`;

const GameAreaImg = styled.img`
  position: absolute;
  left: -4rem;
`;

const GameFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.6rem;
  padding-top: 1.6rem;
  border-top: 1px solid rgba(101, 110, 120, 0.5);
`;

const Players = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  background-color: #24262b;
  padding: 1.2rem 1.6rem;
  border-radius: 4px;
`;

const Player = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;
`;

const PlayerBg = styled.div`
  height: 4.8rem;
  width: 4.8rem;
  background-color: #2d3035;
  border-radius: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PlayerText = styled.div`
  color: #cfd8df;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: capitalize;
`;

const PlayerImg = styled.img`
  height: 4.8rem;
`;

const PlayerImgNtwrk = styled.img`
  height: 3.6rem;
`;

const BoltImg = styled.img``;

const SelectCoinBtn = styled.div`
  display: flex;
  height: 7.2rem;
  padding: 0px 3.4rem;
  justify-content: center;
  align-items: center;
  gap: 1.4rem;
  border-radius: 4px;
  background: #1e8139;
  cursor: pointer;
  margin-left: 3rem;
`;

const CoinBtnText = styled.div`
  color: #fff;
  text-align: center;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 19px; /* 126.667% */
  width: 12.2rem;
`;

const ControlPanel = styled.div`
  display: flex;
  padding: 10px 14px;
  align-items: center;
  gap: 14px;
  align-self: stretch;
  border-radius: 4px;
  background: #24262b;
`;

const StakeControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;
`;

const StakeText = styled.div`
  color: #b5bec6;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  width: 8rem;
`;

const StakeTextRes = styled.div`
  color: #b5bec6;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  width: 4rem;
`;

const CurrencyMeter = styled.div`
  display: flex;
  width: 8rem;
  padding-left: 16px;
  justify-content: space-between;
  align-items: center;
  background-color: #2d3035;
  height: 4.8rem;
  border-radius: 4px;
  overflow: hidden;
`;

const CurrencyText = styled.div`
  color: #cfd8df;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const CounterBtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

const CounterBtn = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  width: 2.4rem;
  height: 2.4rem;
  background-color: #656974;
  display: flex;
  align-self: center;
  justify-content: center;
`;

const AddImg = styled.img``;

const GloryBtn = styled.div`
  display: flex;
  height: 48px;
  padding: 0px 10px;
  align-items: center;
  gap: 27px;
  border-radius: 5px;
  background-color: #2d3035;
  cursor: pointer;
`;

const GloryText = styled.div`
  color: #1eaf76;
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

function GameArea() {
  const [allCoinData] = useState(data["data"]);
  const [index, setIndex] = useState(0);
  console.log(allCoinData);

  return (
    <StyledGameArea>
      <Header imgSrc={allCoinData[index]["usersData"][0]["profilePicture"]} />
      <GameOuterContainer>
        <GameHeader>
          <GameText>{allCoinData[index]["name"]}</GameText>
          <GameSubText>{allCoinData[index]["title"]}</GameSubText>
          <HeaderBtnContainer>
            <HeaderBtn active={index === 0} onClick={() => setIndex(0)}>
              Practice
            </HeaderBtn>
            <HeaderBtn
              active={index > 0}
              onClick={() => setIndex((index) => (index === 0 ? 1 : index))}
            >
              Paid
            </HeaderBtn>
          </HeaderBtnContainer>
        </GameHeader>
        <StyledGameField>
          <GameAreaImg src={GameAreaDesign} />
          <CoinCard type={"opponent"} />
          <CoinCard data={allCoinData[index]["usersData"][0]} />
        </StyledGameField>
        <GameFooter>
          <Players>
            <Player>
              <PlayerBg>
                <PlayerImg
                  src={
                    "https://s3-alpha-sig.figma.com/img/e80c/1a17/3fac0d5683ab8f75e1ba01d458d6c261?Expires=1702857600&Signature=YCgUN-PZmJnD0O-kHxmi1h5s7rLqHjMQTquPAY9YuDY4yjYVQTgyjgJjlEnhUvWEOVbqi6~uPoCc9tSCAshvzYDip8~foFBnzStCWdoGgidpQv4CSzGBV2O9JdCyqCMlcoBaG~MhNGMa5wT4b2tn~30yxjlN0eTJYmsse3G56vsGjVx~RBd8o61GUwosr~NKXRWBOI4MqUbt4Aj4jqYGjscWtmK01vt3J7Qao5sOsljYJa8SvfqHA9NO3Zv3zKjyZI4Dud5wuJ1dBCesPfVCszNxqNuJWrdUZvZuvKe7Y3xZdjYiLYcmSE4bPFltAIml~EDLRc3mQx5ZpCngQGzrXA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                  }
                />
              </PlayerBg>
              <PlayerText>Player 1</PlayerText>
            </Player>
            <BoltImg src={BoltIcon} />
            <Player>
              <PlayerBg>
                <PlayerImgNtwrk
                  src={allCoinData[index]["usersData"][0]["avatarImageUrl"]}
                />
              </PlayerBg>
              <PlayerText>
                {allCoinData[index]["usersData"][0]["userName"]} 🇮🇳
              </PlayerText>
            </Player>
          </Players>
          <SelectCoinBtn>
            <CoinBtnText>Select a coin to enter the battle</CoinBtnText>
            <BoltImg src={ArrowIcon} />
          </SelectCoinBtn>
          <ControlPanel>
            <StakeControls>
              <StakeText>how much you stake</StakeText>
              <CurrencyMeter>
                <CurrencyText>${+allCoinData[index]["entryFee"]}</CurrencyText>
                <CounterBtnContainer>
                  <CounterBtn
                    disabled={index === allCoinData.length - 1}
                    onClick={() => {
                      setIndex((index) => index + 1);
                    }}
                  >
                    <AddImg src={AddIcon} />
                  </CounterBtn>
                  <CounterBtn
                    disabled={index === 0}
                    onClick={() => {
                      setIndex((index) => index - 1);
                    }}
                  >
                    <AddImg src={SubtractIcon} />
                  </CounterBtn>
                </CounterBtnContainer>
              </CurrencyMeter>
            </StakeControls>
            <BoltImg src={ArrowsIcon} />
            <StakeControls>
              <StakeTextRes>
                ${+allCoinData[index]["totalPoolSize"]}
              </StakeTextRes>
              <GloryBtn>
                <GloryText>Glory</GloryText>
              </GloryBtn>
            </StakeControls>
          </ControlPanel>
        </GameFooter>
      </GameOuterContainer>
      <Expander />
    </StyledGameArea>
  );
}

export default GameArea;
