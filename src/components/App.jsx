import React from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from './Global.styled';

import { Container } from './Container/Container.styled';
import FeedbackForm from './FeedbackForm/FeedbackForm';
import Statistics from './Statistics/Statistics';

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
          <Statistics />
        </Container>
      </>
    </ThemeProvider>
  );
};

export default App;
