import { ColumnContainer, ColumnTitle } from "../../styles";
import { addTask, moveList, moveTask, setDraggedItem } from "../../state/actions";

import { AddNewItem } from "../AddNewItem/AddNewItem";
import { Card } from "../Card/Card";
import { isHidden } from "../../utils/isHidden";
import { useAppState } from "../../state/AppStateContext";
import { useDrop } from "react-dnd";
import { useItemDrag } from "../../utils/useItemDrag";
import { useRef } from "react";

type ColumnProps = {
    id: string
    text: string
    children?: React.ReactNode
    isPreview?: boolean
};

export const Column = ({text, children, id, isPreview}: ColumnProps) => {
    const {draggedItem , getTasksByListId, dispatch} = useAppState();
    const tasks = getTasksByListId(id);
    const ref = useRef<HTMLDivElement>(null);
    const {drag} = useItemDrag({ type: "COLUMN", id, text});
    const [, drop] = useDrop({
      accept: ["COLUMN", "CARD"],
      hover: () => {
          if(!draggedItem) return;
          if(draggedItem.type === "COLUMN") {
          if (draggedItem.id === id) {
              return
          }
          dispatch(moveList(draggedItem.id, id))
          } else {
              if(draggedItem.columnId === id) {
                return
              }
              if(tasks.length) {
                  return
              }
              dispatch(moveTask(draggedItem.id, id, draggedItem.columnId, id))
              dispatch(setDraggedItem({ ...draggedItem, columnId: id }))
          }
      }
  });

    drag(drop(ref));



    return (
        <ColumnContainer 
        ref={ref} 
        isPreview={isPreview}
        isHidden={isHidden(draggedItem, "COLUMN", id, isPreview)}
        >
      <ColumnTitle>{text}</ColumnTitle>
        {tasks.map((task)=> (
            <Card 
            key={task.id}
            text={task.text} 
            id={task.id}
            columnId={id} 
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