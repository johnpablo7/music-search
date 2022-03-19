import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 0px var(--paddingMain);
  color: var(--secondary);
  h2 {
    font-size: var(--fontSmall);
    font-weight: normal;
  }
`;

export const Image = styled.img`
  width: 7px;
  margin-right: 10px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 15px 0px 30px;
`;

export const Column = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 1fr;
  gap: 35px;
`;
