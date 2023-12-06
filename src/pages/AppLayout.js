import styled from "styled-components";
import Sidebar from "../components/Sidebar";
import GameArea from "../components/GameArea";

const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 24rem 1fr;
`;

function AppLayout() {
  return (
    <AppContainer>
      <Sidebar />
      <GameArea />
    </AppContainer>
  );
}

export default AppLayout;
