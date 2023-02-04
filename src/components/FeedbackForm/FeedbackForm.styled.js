import styled from 'styled-components';

export const StyledFeedbackForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 3em;
    font-weight: 900;
    letter-spacing: 0.05em;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    padding: 0;

    list-style: none;
  }
`;
export const Button = styled.button`
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
