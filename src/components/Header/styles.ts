import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { device } from "../../device/device";

//Header
export const HeaderContainer = styled.div<{ themes: boolean }>`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${(props) => (props.themes ? "#6a6d70" : "#839192")};
  padding: 10px 5px;

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

  display: none;

  cursor: pointer;

  @media ${device.tabletS} {
    display: block;
  }
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

  gap: 15px;

  @media ${device.tabletS} {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const StyledNavLink = styled(NavLink)<{ themes: boolean }>`
  text-decoration: none;
  font-family: "Russo One", sans-serif;
  letter-spacing: 1px;
  font-size: 1.8rem;

  color: ${(props) => (props.themes ? "white" : "black")};

  &:focus {
    text-decoration: underline;
  }

  cursor: pointer;

  &:hover {
    text-decoration: underline;
    text-decoration-color: bisque;
    text-decoration-thickness: 2px;
  }
`;
