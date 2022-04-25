import { ColumnContainer, ColumnTitle } from "../../styles";

import { AddNewItem } from "../AddNewItem/AddNewItem";
import { Card } from "../Card/Card";
import { addTask } from "../../state/actions";
import { useAppState } from "../../state/AppStateContext";

type ColumnProps = {
    id: string
    text: string
    children?: React.ReactNode
};

export const Column = ({text, children, id}: ColumnProps) => {
    const { getTasksByListId, dispatch} = useAppState();
    const tasks = getTasksByListId(id);

    return (
        <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
        {tasks.map((task)=> (
            <Card 
            key={task.id}
            text={task.text} 
            id={task.id} 
            />
        ))}
      <AddNewItem
      toggleButtonText="Add Card"
      onAdd={(text) => dispatch(addTask(text, id))}
      dark
      />
      </ColumnContainer>
    )
};