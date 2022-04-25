import './App.css';

import {
  AppContainer,
  CardContainer,
  ColumnContainer,
  ColumnTitle
} from './styles';

import React from 'react';

function App() {

  return (
    <AppContainer>
      <ColumnContainer>
      <ColumnTitle>Första kolumnen</ColumnTitle>
      <Card>Första kortet</Card>
      <Card>Andra kortet</Card>
      </ColumnContainer>
    </AppContainer>
  );
}

export default App;
