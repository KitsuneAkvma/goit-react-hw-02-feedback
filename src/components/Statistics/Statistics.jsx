import React from 'react';

import { StyledStatistics } from './Statistics.styled';

export default function Statistics() {


  
  return (
    <StyledStatistics>
      <ul>
        <li>Good: <span>22</span> </li>
        <li>Neutral: <span>22</span> </li>
        <li>Bad: <span>22</span> </li>
        <li>Total: <span>22</span> </li>
        <li>Positive feedback: {'x'}%</li>
      </ul>
    </StyledStatistics>
  );
}
