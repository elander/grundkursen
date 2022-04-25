import './App.css';

import {
  AppContainer,
  CardContainer,
  ColumnContainer,
  ColumnTitle
} from './styles';

import { Column } from './components/Column/Column';
import React from 'react';
import { AddNewItem } from './components/AddNewItem/AddNewItem';

function App() {

  return (
    <AppContainer>
      <Column text='Testkolumn' />
      <AddNewItem
      toggleButtonText='Add column'
      onAdd={console.log}
    </AppContainer>
  );
}

export default App;
