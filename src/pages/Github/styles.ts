import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const GithubContainer = styled.div`
  max-width: 800px;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 60px 10px;

  h2 {
    margin-bottom: 60px;
    font-size: 3.4rem;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  thead {
    background-color: #948484;
  }
  tr {
    &:nth-child(even) {
      background-color: #5d5656;
    }
  }
  td {
    padding: 10px;
  }
  th {
    font-size: 2.4rem;
    text-align: left;
    &:last-child {
      text-align: right;
    }
  }
`;

export const StyledNavlink = styled(NavLink)`
  color: #8b9503;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
