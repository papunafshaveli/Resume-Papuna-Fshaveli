import styled from "styled-components";

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

  &:hover {
    transform: scale(1.05);
  }
`;

export const StyledHeader = styled.header`
  img {
    width: 100%;

    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
`;
export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  padding: 0 10px;
  h1 {
    text-align: center;
  }
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
