import React from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from './Global.styled';

import { Container } from './Container/Container.styled';
import { FeedbackForm, Statistics } from './FeedbackForm/FeedbackForm';

const theme = {
  colors: { header: '#ebfbff', body: '#fff', footer: '#003333' },
};

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Container>
          <GlobalStyles />
          <FeedbackForm />
        </Container>
      </>
    </ThemeProvider>
  );
};

export default App;
