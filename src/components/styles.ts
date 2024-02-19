import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { device } from "../device/device";

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeaderContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: #6a6d70;
  padding: 10px 0;

  @media ${device.mobileL} {
    padding: 10px 30px;
  }

  @media ${device.tabletS} {
    padding: 30px 120px;
  }
`;

export const HomeIconWrapper = styled.div`
  width: 40px;
  height: 40px;

  cursor: pointer;
`;

export const BurgerContainer = styled.div`
  width: 40px;
  height: 40px;

  cursor: pointer;
  @media ${device.tabletS} {
    display: none;
  }
`;

export const StyledNav = styled.nav`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  gap: 10px;

  @media ${device.tabletS} {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-size: 1.8rem;

  cursor: pointer;
`;
