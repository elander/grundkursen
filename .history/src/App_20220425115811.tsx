import './App.css';

import {
  AppContainer,
  CardContainer,
  ColumnContainer,
  ColumnTitle
} from './styles';

import { Column } from './components/Column/Column';
import React from 'react';

function App() {

  return (
    <AppContainer>
      <Column text='Testkolumn' />
      <Add
    </AppContainer>
  );
}

export default App;
