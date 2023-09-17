import { HomePageContainer } from "./HomePage.styled";
import AppBar from "../components/AppBar/AppBar";

import HomePageText from "../components/HomePageText.jsx/HomePageText";
const HomePage = () => {
  return (
    <>
      <HomePageContainer>
        <AppBar />
        <HomePageText />
      </HomePageContainer>
    </>
  );
};
export default HomePage;
