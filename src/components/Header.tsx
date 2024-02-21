import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import { BiHomeSmile } from "react-icons/bi";

import { useDimensions } from "../hooks/useDimensions";
import {
  BurgerContainer,
  HeaderContainer,
  HomeIconWrapper,
  StyledNav,
  StyledNavLink,
} from "./styles";

const Header = () => {
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

  return (
    <HeaderContainer>
      <HomeIconWrapper>
        <BiHomeSmile size={40} onClick={() => navigate("/")} />
      </HomeIconWrapper>

      {navIsVisible && (
        <div>
          <StyledNav>
            <StyledNavLink to="/">Home</StyledNavLink>
            <StyledNavLink to="/about">About</StyledNavLink>
            <StyledNavLink to="/skills">Skills</StyledNavLink>
            <StyledNavLink to="/projects">Projects</StyledNavLink>
            <StyledNavLink to="/resume">Resume</StyledNavLink>
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
