import styled from "styled-components";
import LTCIcon from "../assets/icons/ltc.svg";
import ChartDesign from "../assets/designs/chart_design.svg";
import UnknownIcon from "../assets/icons/unknown.svg";

const StyledCoinCard = styled.div`
  width: 15.6rem;
  padding: 1.3rem 1.56rem 2.6rem 1.56rem;
  background: linear-gradient(180deg, #24262b 0%, #2d3035 100%);
  z-index: 2;
  border: 1px solid rgba(101, 110, 120, 0.5);
  border-radius: 4px;
  height: 19.75rem;
`;

const StyledUnknownCoinCard = styled.div`
  width: 15.6rem;
  padding: 4rem 1.56rem 4rem 1.56rem;
  background: linear-gradient(180deg, #24262b 0%, #2d3035 100%);
  z-index: 2;
  border: 1px solid rgba(101, 110, 120, 0.5);
  border-radius: 4px;
  height: 19.75rem;
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CoinTextSm = styled.div`
  color: #cfd8df;
  text-align: center;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: uppercase;
`;

const ViewChartTxt = styled.div`
  color: #9ca4ab;
  text-align: center;
  font-size: 10.4px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const CardBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 7.8px;
  margin-top: 2.08rem;
`;

const UnknownCardBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
`;

const CoinImg = styled.img`
  height: 4.16rem;
`;

const CoinText = styled.div`
  color: #cfd8df;
  text-align: center;
  font-size: 12.743px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const ChartImg = styled.img``;

const CoinStatusTxtContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3px;
`;

const CoinStatusTxt = styled.div`
  color: #df424e;
  text-align: center;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const CoinStatusPrcnt = styled.div`
  color: #df424e;
  font-size: 10.4px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const UnknownImg = styled.img``;

const UnknownTxt = styled.div`
  color: #dbb42d;
  text-align: center;
  font-size: 13.5px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const PlayerStatus = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem;
  gap: 1.2rem;
  margin-top: 3.2rem;
`;

const PlayerBg = styled.div`
  height: 6.4rem;
  width: 6.4rem;
  border-radius: 64px;
  background-color: rgb(13, 13, 13, 0.4);
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PlayerImg = styled.img`
  height: 6.4rem;
`;

const PlayerImgNtwrk = styled.img`
  height: 4.2rem;
`;

const CoinCardContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const PlayerText = styled.div`
  color: #fff;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  z-index: 2;
`;

function CoinCard({ type, data }) {
  if (type === "unknown") {
    return (
      <CoinCardContainer>
        <StyledUnknownCoinCard>
          <CardHeader></CardHeader>
          <UnknownCardBody>
            <UnknownImg src={UnknownIcon} />
            <UnknownTxt>Select a coin</UnknownTxt>
          </UnknownCardBody>
        </StyledUnknownCoinCard>
        <PlayerStatus>
          <PlayerBg>
            <PlayerImg
              src={
                "https://s3-alpha-sig.figma.com/img/e80c/1a17/3fac0d5683ab8f75e1ba01d458d6c261?Expires=1702857600&Signature=YCgUN-PZmJnD0O-kHxmi1h5s7rLqHjMQTquPAY9YuDY4yjYVQTgyjgJjlEnhUvWEOVbqi6~uPoCc9tSCAshvzYDip8~foFBnzStCWdoGgidpQv4CSzGBV2O9JdCyqCMlcoBaG~MhNGMa5wT4b2tn~30yxjlN0eTJYmsse3G56vsGjVx~RBd8o61GUwosr~NKXRWBOI4MqUbt4Aj4jqYGjscWtmK01vt3J7Qao5sOsljYJa8SvfqHA9NO3Zv3zKjyZI4Dud5wuJ1dBCesPfVCszNxqNuJWrdUZvZuvKe7Y3xZdjYiLYcmSE4bPFltAIml~EDLRc3mQx5ZpCngQGzrXA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              }
            />
          </PlayerBg>
          <PlayerText>You 🇮🇳</PlayerText>
        </PlayerStatus>
      </CoinCardContainer>
    );
  }

  if (type === "opponent") {
    return (
      <CoinCardContainer>
        <StyledCoinCard>
          <CardHeader>
            <CoinTextSm>LTC</CoinTextSm>
            <ViewChartTxt>view chart</ViewChartTxt>
          </CardHeader>
          <CardBody>
            <CoinImg src={LTCIcon} />
            <CoinText>Litecoin</CoinText>
            <ChartImg src={ChartDesign} />
            <CoinStatusTxtContainer>
              <CoinStatusTxt>$27167.99</CoinStatusTxt>
              <CoinStatusPrcnt>(0.000%)</CoinStatusPrcnt>
            </CoinStatusTxtContainer>
          </CardBody>
        </StyledCoinCard>
        <PlayerStatus>
          <PlayerBg>
            <PlayerImg
              src={
                "https://s3-alpha-sig.figma.com/img/e80c/1a17/3fac0d5683ab8f75e1ba01d458d6c261?Expires=1702857600&Signature=YCgUN-PZmJnD0O-kHxmi1h5s7rLqHjMQTquPAY9YuDY4yjYVQTgyjgJjlEnhUvWEOVbqi6~uPoCc9tSCAshvzYDip8~foFBnzStCWdoGgidpQv4CSzGBV2O9JdCyqCMlcoBaG~MhNGMa5wT4b2tn~30yxjlN0eTJYmsse3G56vsGjVx~RBd8o61GUwosr~NKXRWBOI4MqUbt4Aj4jqYGjscWtmK01vt3J7Qao5sOsljYJa8SvfqHA9NO3Zv3zKjyZI4Dud5wuJ1dBCesPfVCszNxqNuJWrdUZvZuvKe7Y3xZdjYiLYcmSE4bPFltAIml~EDLRc3mQx5ZpCngQGzrXA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              }
            />
          </PlayerBg>
          <PlayerText>Player 1</PlayerText>
        </PlayerStatus>
      </CoinCardContainer>
    );
  }
  return (
    <CoinCardContainer>
      <StyledCoinCard>
        <CardHeader>
          <CoinTextSm>{data["coinSymbolId"]}</CoinTextSm>
          <ViewChartTxt>view chart</ViewChartTxt>
        </CardHeader>
        <CardBody>
          <CoinImg src={data["coinImage"]} />
          <CoinText>{data["selectedCoin"]}</CoinText>
          <ChartImg src={ChartDesign} />
          <CoinStatusTxtContainer>
            <CoinStatusTxt>$27167.99</CoinStatusTxt>
            <CoinStatusPrcnt>(0.000%)</CoinStatusPrcnt>
          </CoinStatusTxtContainer>
        </CardBody>
      </StyledCoinCard>
      <PlayerStatus>
        <PlayerBg>
          <PlayerImgNtwrk src={data["avatarImageUrl"]} />
        </PlayerBg>
        <PlayerText>{data["userName"]}</PlayerText>
      </PlayerStatus>
    </CoinCardContainer>
  );
}

export default CoinCard;
