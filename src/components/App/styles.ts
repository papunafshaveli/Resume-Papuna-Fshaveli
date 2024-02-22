import styled from "styled-components";

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
