import './App.css';

import { AddNewItem } from './components/AddNewItem/AddNewItem';
import { AppContainer } from './styles';
import { Card } from './components/Card/Card';
import { Column } from './components/Column/Column';
import React from 'react';

function App() {

  return (
    <AppContainer>
      <Column text='Testkolumn' >
      <Card text="Första 'riktiga' kortet" />
      <Card text="Andra kortet" />
      </Column>
      <AddNewItem
      toggleButtonText='Add column'
      onAdd={console.log}
      />
    </AppContainer>
  );
}

export default App;
