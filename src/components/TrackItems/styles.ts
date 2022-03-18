import styled from "styled-components";

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
`;

export const Item = styled.li`
  list-style: none;
  display: flex;
  justify-content: space-between;
  color: var(--secondary);
  margin-bottom: 25px;
  strong {
    display: block;
    width: 30px;
  }
  span {
    display: block;
    width: 100%;
    text-align: left;
  }
  time {
    display: block;
    width: 35px;
  }
`;
