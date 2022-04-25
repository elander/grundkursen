import './App.css';

import { AddNewItem } from './components/AddNewItem/AddNewItem';
import { AppContainer } from './styles';
import { Column } from './components/Column/Column';
import React from 'react';

function App() {

  return (
    <AppContainer>
      <Column text='Testkolumn' />
      <AddNewItem
      toggleButtonText='Add column'
      onAdd={console.log}
      />
    </AppContainer>
  );
}

export default App;
