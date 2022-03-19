import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px var(--paddingMain);
  margin-bottom: 75px;
`;

export const Label = styled.label`
  font-size: var(--fontMedium);
  color: var(--tertiary);
`;

export const Input = styled.input`
  font-size: var(--fontXLarge);
  line-height: var(--fontXLarge);
  font-weight: bold;
  color: var(--secondary);
  height: 80px;
  padding-bottom: 14px;
  border: 0;
  border-bottom: 2px solid var(--secondary);
  background-color: transparent;
  color: var(--);
  outline: 0;
  padding-left: 10px;
`;
