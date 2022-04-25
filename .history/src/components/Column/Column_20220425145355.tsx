import { useAppState } from "../../state/AppStateContext";
import { ColumnContainer, ColumnTitle } from "../../styles";

import { AddNewItem } from "../AddNewItem/AddNewItem";
import { Card } from "../Card/Card";

type ColumnProps = {
    id: string
    text: string
    children?: React.ReactNode
};

export const Column = ({text, children, id}: ColumnProps) => {
    const { getTasksByListId} = useAppState();
    const tasks = getTasksByListId(id);

    return (
        <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
        {tasks.map((task)=> {
            <Card 
            text={task.text} 
            id={task.id} 
            onAdd={console.log}
            dark
            />
        }))}
      <AddNewItem
      toggleButtonText="Add Card"
      onAdd={console.log}
      dark
      />
      </ColumnContainer>
    )
};