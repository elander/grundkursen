import { NewItemButton, NewItemFormContainer, NewItemInput } from "../../styles";
import React, { useState } from "react";

import { useFocus } from "../../utils/useFocus";

type NewItemFormProps = {
    onAdd(text: string): void
};

export const NewItemForm = ({onAdd}: NewItemFormProps) => {
    // useFocus har vi fixat själva, en hook som kombinerar
    // Reacts "useRef" och "useEffect" för att dels returnera en
    // referens vi kan använda för att märka ut vår input
    // och dels sätta fokus i den märkta inputen när den visas
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