import { NewItemButton, NewItemFormContainer, NewItemInput } from "../../styles";
import { useRef, useState } from "react";

type NewItemFormProps = {
    onAdd(text: string): void
};

export const NewItemForm = ({onAdd}: NewItemFormProps) => {
    const inputRef = useRef(null);
    const [text, setText] = useState(initialState)
    return (
        <NewItemFormContainer>
            <NewItemInput />
            <NewItemButton>
                Create
            </NewItemButton>
        </NewItemFormContainer>
    )


}