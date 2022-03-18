import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px var(--paddingMain);
  margin-bottom: 80px;
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  gap: 65px;
  overflow-x: clip;
`;

export const Subtitle = styled.h2`
  font-size: var(--fontMedium);
  color: var(--terceary);
  margin-bottom: 35px;
`;
