import React from 'react';

import { StyledButton } from './Button.styled';

export default function Button({ text, color }) {
  return <StyledButton color={color}>{text}</StyledButton>;
}
