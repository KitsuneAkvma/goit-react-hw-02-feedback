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
