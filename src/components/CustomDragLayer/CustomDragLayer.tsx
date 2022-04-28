import { CustomDragLayerContainer, DragPreviewWrapper } from "../../styles";

import {Card} from "../Card/Card";
import { Column } from "../Column/Column";
import { useAppState } from "../../state/AppStateContext";
import { useDragLayer } from "react-dnd";

// Det här är en komponent som skapar ett extra UI-lager som svävar
// ovanför resten av appen. I det lagret visar vi det användaren 
// håller på och släpar runt på sidan. Vi använder två styled components,
// CustomDragLayerContainer med ett högt z-index för att hamna "ovanför" 
// allt annat och DragPreviewWrapper för att följa efter musen
// musens koordinater får vi via useDragLayer som currentOffset


export const CustomDragLayer = () => {
    const { draggedItem } = useAppState();
    const { currentOffset } = useDragLayer((monitor) => ({
        currentOffset: monitor.getSourceClientOffset()
    }));
    return draggedItem && currentOffset ?(
        <CustomDragLayerContainer>
            <DragPreviewWrapper position = {currentOffset} >
                {draggedItem.type === "COLUMN" ? (
                    <Column
                        text={draggedItem.text}
                        id={draggedItem.id}
                        isPreview
                        />) : (
                    <Card
                        text={draggedItem.text}
                        id={draggedItem.id}
                        columnId={draggedItem.columnId}
                        isPreview
                        />
                        )                   
                }
                </DragPreviewWrapper>
        </CustomDragLayerContainer>
    ) : null;
}