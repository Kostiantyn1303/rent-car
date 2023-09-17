import LogoImage from "../../images/car.svg";
import { LogoContainer, LogoText } from "./Logo.styled";
const Logo = () => {
  return (
    <LogoContainer>
      <LogoText href="#">
        {" "}
        <img src={LogoImage} alt="logo" /> Rent.UA
      </LogoText>
    </LogoContainer>
  );
};

export default Logo;
