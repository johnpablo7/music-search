import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: var(--${(props: { size: string }) => props.size});
  height: var(--${(props: { size: string }) => props.size});
  text-align: center;
`;

export const Image = styled.img`
  width: var(--${(props: { imgSize: string }) => props.imgSize});
  height: var(--${(props: { imgSize: string }) => props.imgSize});
`;

export const Title = styled.h3`
  font-size: var(--fontSmall);
  color: var(--tertiary);
  margin: 10px;
`;

export const Description = styled.h4`
  font-size: var(--fontSmall);
  color: var(--secondary);
`;
