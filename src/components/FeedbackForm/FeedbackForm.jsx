import React, { useState } from 'react';

import { StyledFeedbackForm } from './FeedbackForm.styled';
import Button from 'components/Button/Button';

export default function FeedbackForm() {
  const [goodFeedback, setGoodFeedback] = useState(0);
  const [neutralFeedback, setNeutralFeedback] = useState(0);
  const [badFeedback, setBadFeedback] = useState(0);

  const handleClick = evnt => {
    evnt.preventDefault();
    console.log('clicked ' + evnt.currentTarget.innerHTML);
    setGoodFeedback(prevFeedback => prevFeedback + 1);
    setNeutralFeedback(prevFeedback => prevFeedback + 1);
    setBadFeedback(prevFeedback => prevFeedback + 1);
    console.log('Good Feedback: ' + goodFeedback);
    console.log('Neutral Feedback: ' + neutralFeedback);
    console.log('Bad Feedback: ' + badFeedback);
    // switch (({ text }) => text) {
    //   case 'Good':
    //     setFeedback(prevFeedback => ({
    //       ...(prevFeedback.good = prevFeedback.good + 1),
    //     }));
    //     break;
    //   case 'Neutral':
    //     break;
    //   case 'Bad':
    //     break;
    //   default:
    //     console.log('Incorrect feedback option!');
    // }
  };

  return (
    <StyledFeedbackForm>
      <h2>Please leave feedback</h2>
      <ul>
        <li>
          <Button text="Good" color="#40e143da" onClick={handleClick} />
        </li>
        <li>
          <Button text="Neutral" color="#e1d140f9" onClick={handleClick} />
        </li>
        <li>
          <Button text="Bad" color="#e15540f4" onClick={handleClick} />
        </li>
      </ul>
    </StyledFeedbackForm>
  );
}
