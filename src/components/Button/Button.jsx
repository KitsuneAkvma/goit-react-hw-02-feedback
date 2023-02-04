import React, { useState } from 'react';

import { StyledButton } from './Button.styled';

export default function Button({ text, color }) {
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
    <StyledButton color={color} onClick={handleClick}>
      {text}
    </StyledButton>
  );
}
