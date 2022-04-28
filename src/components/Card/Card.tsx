import { moveTask, setDraggedItem } from "../../state/actions";

import { CardContainer } from "../../styles";
import { isHidden } from "../../utils/isHidden";
import { useAppState } from "../../state/AppStateContext";
import { useDrop } from "react-dnd";
import { useItemDrag } from "../../utils/useItemDrag";
import { useRef } from "react";

type CardProps = {
    id: string
    text: string
    columnId: string
    isPreview?: boolean
}

export const Card = ({
    text,
    id,
    columnId,
    isPreview
    }: CardProps) => {
      // Vi hämtar två saker från vårt globala objekt AppState:
      // draggedItem som talar om ifall det finns ett objekt som
      // användaren håller på att dra runt, och dispatch som är den 
      // funktion som skickar in actions till AppStateReducer
        const { draggedItem, dispatch } = useAppState();

        // en referens för att identifiera den CardContainer som innehåller
        // texten i vårt Card.
        const ref = useRef<HTMLDivElement>(null);

        // drag är en funktion vi får från react-dnd, via vår egen hook
        // useItemDrag 
        // drag används för att göra objekt draggable
        const { drag } = useItemDrag({ type: "CARD", id, text, columnId });

        // drop är också en funktion från react-dnd, via hooken useDrop
    const [, drop] = useDrop(
        () => ({
          accept: "CARD",
          hover() {
            if (!draggedItem) {
              return
            }
            if (draggedItem.type !== "CARD") {
              return
            }
            if (draggedItem.id === id) {
              return
            }
            // dispatch är funktionen som skickar data till AppStateReducer
            // moveTask är en "action creator" som vi definierat i actions.ts
            dispatch(
              moveTask(draggedItem.id, id, draggedItem.columnId, columnId)
            )
            // setDraggedItem är en "action creator" som vi definierat i actions.ts
            dispatch(setDraggedItem({ ...draggedItem, columnId }))
          }
        }),
        [draggedItem] // den här arrayen är en "dependency array" som
        // säger till React att bevaka de objekt den innehåller. Används för
        // memoization och prestandaoptimering.
      )
      // till slut kör vi funktionen drop, som tar referensen till vår
      // CardContainer, och använder resultatet som parameter till funktionen
      // drag:
    drag(drop(ref));

    return (
        <CardContainer
        isHidden={isHidden(draggedItem, "CARD", id, isPreview)}
        isPreview={isPreview}
        ref={ref}
        >
            {text}
        </CardContainer>)
}