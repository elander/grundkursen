import { AddItemButton } from "../AddItemButton/AddItemButton";
import {NewItemForm} from "../NewItemForm/NewItemForm";
import { useState } from "react";

type AddNewItemProps = {
    onAdd(text: string): void
    toggleButtonText: string
    dark?: boolean
}

export const AddNewItem = (props: AddNewItemProps) => {
    const [showForm, setShowForm] = useState(false);
    const { onAdd, toggleButtonText, dark} = props;

    if(showForm){
        return <NewItemForm
        onAdd={(text) => {
            onAdd(text)
            setShowForm(false);
        }}
        />
    }

    return (
        <AddItemButton dark={dark}
        onClick={() => setShowForm(true)}>
            {toggleButtonText}
        </AddItemButton>
    )
    
}