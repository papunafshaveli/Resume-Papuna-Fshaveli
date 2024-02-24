import {
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

import { RxHamburgerMenu } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import { BiHomeSmile } from "react-icons/bi";
import { MdOutlineLightMode } from "react-icons/md";
import { FcNightPortrait } from "react-icons/fc";
import { BiSolidHomeHeart } from "react-icons/bi";

import { useDimensions } from "../../hooks/useDimensions";

import { ThemesContext } from "../App/App";
import {
  BurgerContainer,
  HeaderContainer,
  HomeIconWrapper,
  StyledNav,
  StyledNavLink,
} from "./styles";
import styled from "styled-components";

const Header = ({
  isDarkMode,
  setIsDarkMode,
}: {
  isDarkMode: boolean;
  setIsDarkMode: Dispatch<SetStateAction<boolean>>;
}) => {
  const navigate = useNavigate();

  const [burgerIsVisible, setBurgerIsVisible] = useState(true);
  const [navIsVisible, setNavIsVisible] = useState(false);

  const { width } = useDimensions();

  useEffect(() => {
    if (width > 640) {
      setNavIsVisible(true);
      setBurgerIsVisible(false);
    }
  }, [width, navIsVisible, burgerIsVisible]);

  const themes = useContext(ThemesContext);

  return (
    <HeaderContainer $themes={themes}>
      <ThemeChangerContainer>
        {themes ? (
          <MdOutlineLightMode
            size={40}
            onClick={() => {
              setIsDarkMode(!isDarkMode);
            }}
          />
        ) : (
          <FcNightPortrait
            size={40}
            onClick={() => {
              setIsDarkMode(!isDarkMode);
            }}
          />
        )}
      </ThemeChangerContainer>

      {navIsVisible && (
        <div>
          <StyledNav>
            <StyledNavLink $themes={themes} to="/">
              {
                <HomeIconWrapper>
                  {themes ? (
                    <BiHomeSmile size={30} onClick={() => navigate("/")} />
                  ) : (
                    <BiSolidHomeHeart
                      style={{ fill: "black" }}
                      size={30}
                      onClick={() => navigate("/")}
                    />
                  )}
                </HomeIconWrapper>
              }
            </StyledNavLink>
            <StyledNavLink $themes={themes} to="/about">
              About
            </StyledNavLink>
            <StyledNavLink $themes={themes} to="/skills">
              Skills
            </StyledNavLink>
            <StyledNavLink $themes={themes} to="/projects">
              Projects
            </StyledNavLink>
            <StyledNavLink $themes={themes} to="/github">
              Github
            </StyledNavLink>
            <StyledNavLink $themes={themes} to="/resume">
              Resume
            </StyledNavLink>
          </StyledNav>
        </div>
      )}

      {burgerIsVisible && (
        <BurgerContainer onClick={() => setNavIsVisible(!navIsVisible)}>
          <RxHamburgerMenu size={40} />
        </BurgerContainer>
      )}
    </HeaderContainer>
  );
};

export default Header;

const ThemeChangerContainer = styled.div``;
