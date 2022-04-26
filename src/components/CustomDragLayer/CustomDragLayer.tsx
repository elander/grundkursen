import { CustomDragLayerContainer, DragPreviewWrapper } from "../../styles";

import {Card} from "../Card/Card";
import { Column } from "../Column/Column";
import { useAppState } from "../../state/AppStateContext";
import { useDragLayer } from "react-dnd";

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