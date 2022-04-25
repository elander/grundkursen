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
      <CardContainer>Första kortet</CardContainer>
      <CardContainer>Andra kortet</CardContainer>
      </ColumnContainer>
      <ColumnContainer>
      <ColumnTitle>Andra kolumnen</ColumnTitle>
      <CardContainer>Tredje kortet</CardContainer>
      <CardContainer>Fjärde kortet</CardContainer>
      </ColumnContainer>
    </AppContainer>
  );
}

export default App;
