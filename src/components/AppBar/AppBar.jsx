import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Navigation, NavList, Header, NavItem } from "./AppBar.styled";
import Logo from "../Logo/Logo";
const StyledLink = styled(NavLink)`
  font-size: 24px;
  color: #3470ff;
  text-decoration: none;

  &:hover {
    color: #0b44cd;
  }
`;
const AppBar = () => {
  return (
    <Header>
      <Navigation>
        <Logo />
        <NavList>
          <NavItem>
            <StyledLink to="/favorites">Favorites</StyledLink>
          </NavItem>
          <NavItem>
            <StyledLink to="/catalog">Catalog</StyledLink>
          </NavItem>
        </NavList>
      </Navigation>
    </Header>
  );
};

export default AppBar;
