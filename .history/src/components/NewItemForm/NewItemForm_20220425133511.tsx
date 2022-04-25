import { NewItemButton, NewItemFormContainer, NewItemInput } from "../../styles";

import { useFocus } from "../../utils/useFocus";
import { useState } from "react";

type NewItemFormProps = {
    onAdd(text: string): void
};

export const NewItemForm = ({onAdd}: NewItemFormProps) => {
    const inputRef = useFocus();
    const [text, setText] = useState("");
    return (
        <NewItemFormContainer>
            <NewItemInput 
            ref={inputRef}
            value={text}
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