import { AddNewItem } from './components/AddNewItem/AddNewItem';
import { AppContainer } from './styles';
import { Card } from './components/Card/Card';
import { Column } from './components/Column/Column';
import React from 'react';
import { addList } from './state/actions';
import { useAppState } from './state/AppStateContext';

function App() {
  const {lists, dispatch} = useAppState();

  return (
    <AppContainer>
      {lists.map((list) => (
        <Column key={list.id} text={list.text} id={list.id} />
      ))}
      <AddNewItem
      toggleButtonText='Add column'
      onAdd={(text) => dispatch(addList(text))}
      />
    </AppContainer>
  );
}

export default App;
