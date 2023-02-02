import styled from 'styled-components';

export const StyledButton = styled.button`
  width: 8rem;
  height: 3rem;

  background-color: ${({ color }) => color};
  border: none;
  border-radius: 8px;
  cursor: pointer;

  letter-spacing: 0.1em;
  font-weight: 700;

  transition: transform 0.3s ease-in;
  &:hover {
    transform: scale(1.05);
  }
`;
