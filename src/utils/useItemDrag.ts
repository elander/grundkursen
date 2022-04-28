import { DragItem } from "./DragItem";
import { getEmptyImage } from "react-dnd-html5-backend";
import { setDraggedItem } from "../state/actions";
import { useAppState } from "../state/AppStateContext";
import { useDrag } from "react-dnd";
import { useEffect } from "react";

// en egen hook vi använder för att kombinera en av 
// Reacts (useEffect), en från react-dnd (useDrag)
// och en av våra egna (useAppState) och plussar på
// med ett par andra funktioner vi själva hittat på,
// samt fixar en tom bild vi kan använda som ersättning
// för preview-bilden som annars följer efter det vi lagt
// i vårt CustomDragLayer (vi petar ju in antinge en Column
// eller ett Card där).
export const useItemDrag = (item: DragItem) => {
    const { dispatch } = useAppState();
    const [, drag, preview] = useDrag({
        type: item.type,
        item: () => {
            dispatch(setDraggedItem(item));
            return item;
        },
        end: () => dispatch(setDraggedItem(null))
    })
    useEffect(() => {
        preview(getEmptyImage(), {
            captureDraggingState: true
        })
    }, [preview]);
    return { drag };
}