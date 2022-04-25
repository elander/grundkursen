import { NewItemButton, NewItemFormContainer, NewItemInput } from "../../styles";
import React, { useState } from "react";

import { useFocus } from "../../utils/useFocus";

type NewItemFormProps = {
    onAdd(text: string): void
};

export const NewItemForm = ({onAdd}: NewItemFormProps) => {
    const inputRef = useFocus();
    const [text, setText] = useState("");

    const handleAddText = ( 
        event: React.KeyboardEvent<HTMLInputElement>) => {
            if(event.key === "Enter") {
                onAdd(text);
            }
        }

    return (
        <NewItemFormContainer>
            <NewItemInput 
            ref={inputRef}
            value={text}
            onKeyPress = {handleAddText}
            onChange={e => setText(e.target.value)}
            />
            <NewItemButton
            onClick={() => {onAdd(text)}}
            >
                Create
            </NewItemButton>
        </NewItemFormContainer>
    )


}