import React, { useState } from 'react';

import { StyledFeedbackForm, Button } from './FeedbackForm.styled';
import { StyledStatistics } from 'components/Statistics/Statistics.styled';

export let feedbackData = {
  good: 0,
  neutral: 0,
  bad: 0,
  total: 0,
};

export function FeedbackForm() {
  const [goodFeedback, setGoodFeedback] = useState(0);
  const [neutralFeedback, setNeutralFeedback] = useState(0);
  const [badFeedback, setBadFeedback] = useState(0);
  let totalFeedback = goodFeedback + neutralFeedback + badFeedback;
  let positiveFeedback = Math.floor((goodFeedback / totalFeedback) * 100);

  const handleClick = evnt => {
    evnt.preventDefault();
    console.log('clicked ' + evnt.currentTarget.innerHTML);
    console.log(' ');

    switch (evnt.currentTarget.innerHTML) {
      case 'Good':
        setGoodFeedback(prevFeedback => prevFeedback + 1);
        console.log('Good Feedback: ' + goodFeedback);
        break;
      case 'Neutral':
        setNeutralFeedback(prevFeedback => prevFeedback + 1);
        console.log('Neutral Feedback: ' + neutralFeedback);
        break;
      case 'Bad':
        setBadFeedback(prevFeedback => prevFeedback + 1);
        console.log('Bad Feedback: ' + badFeedback);
        break;
      default:
        console.log('Incorrect feedback option!');
        return;
    }
  };

  return (
    <>
      <StyledFeedbackForm>
        <h2>Please leave feedback</h2>
        <ul>
          <li>
            <Button color="#40e143da" onClick={handleClick}>
              Good
            </Button>
          </li>
          <li>
            <Button color="#e1d140f9" onClick={handleClick}>
              Neutral
            </Button>
          </li>
          <li>
            <Button color="#e15540f4" onClick={handleClick}>
              Bad
            </Button>
          </li>
        </ul>
      </StyledFeedbackForm>
      <StyledStatistics>
        <ul>
          <li>
            Good: <span>{goodFeedback}</span>{' '}
          </li>
          <li>
            Neutral: <span>{neutralFeedback}</span>{' '}
          </li>
          <li>
            Bad: <span>{badFeedback}</span>{' '}
          </li>
          <li>
            Total: <span>{totalFeedback}</span>{' '}
          </li>
          <li>
            Positive feedback: {isNaN(positiveFeedback) ? 0 : positiveFeedback}%
          </li>
        </ul>
      </StyledStatistics>
    </>
  );
}
