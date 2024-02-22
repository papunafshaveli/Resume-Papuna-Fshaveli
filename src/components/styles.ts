import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { device } from "../device/device";
//app
export const AppContainer = styled.div<{ isDarkMode: boolean }>`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) =>
    props.isDarkMode ? "rgb(18, 18, 18);" : "#CFCBCA"};
  transition: background-color 0.5s ease;
`;
//Header
export const HeaderContainer = styled.div<{ themes: boolean }>`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${(props) => (props.themes ? "#6a6d70" : "#839192")};
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

export const StyledNavLink = styled(NavLink)<{ themes: boolean }>`
  text-decoration: none;
  font-size: 1.8rem;
  color: ${(props) => (props.themes ? "white" : "black")};

  cursor: pointer;

  &:hover {
    text-decoration: underline;
    text-decoration-color: bisque;
    text-decoration-thickness: 2px;
  }
`;

// Projects

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  border: 1px solid grey;
  border-radius: 8px;

  width: 250px;
  height: 500px;

  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
    rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
    rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px,
    rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,
    rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
  background-color: #202225;

  position: relative;
`;

export const StyledHeader = styled.header`
  img {
    width: 100%;
    height: 250px;

    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
`;
export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 10px;
  gap: 15px;
  p {
    text-align: center;
    font-size: 1.4rem;
  }
`;

export const Buttons = styled.div`
  display: flex;
  gap: 30px;
  button {
    width: 80px;

    background-color: black;
    color: white;

    border: none;
    border-radius: 5px;
    padding: 5px 10px;

    cursor: pointer;

    &:hover {
      background-color: white;
      color: black;
    }
  }
`;
export const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-around;
  align-items: center;

  background-color: black;

  border-radius: 5px;
  width: 100%;
  position: absolute;
  bottom: 0;

  img {
    width: 40px;
  }
`;
