import { AddItemButton } from "../AddItemButton/AddItemButton";
import {NewItemForm} from "../NewItemForm/NewItemForm";
import { useState } from "react";

type AddNewItemProps = {
    onAdd(text: string): void
    toggleButtonText: string
    dark?: boolean
}

export const AddNewItem = (props: AddNewItemProps) => {
    // Här har vi ett tillstånd (showForm) som inte
    // behövs utanför den här komponenten, så vi använder
    // bara useState, och struntar i Context och annat.
    const [showForm, setShowForm] = useState(false);

    // det andra tillståndet (dark) får vi utifrån, från den
    // omgivande komponenten (antingen en Column eller 
    // AppContainer), därifrån får vi också callback-funktionen
    // onAdd, och texten som ska visas i knappen (toggleButtonText)
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