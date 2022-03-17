import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 0px var(--paddingMain);
  flex-direction: column;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 65px;
  overflow-y: hidden;
  overflow-x: clip;
`;

export const Subtitle = styled.h2`
  font-size: var(--fontMedium);
  color: var(--terceary);
  margin-bottom: 35px;
`;
