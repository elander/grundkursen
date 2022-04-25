import { AddItemButton } from "../AddItemButton/AddItemButton";
import { useState } from "react";

type AddNewItemProps = {
    onAdd(text: string): void
    toggleButtonText: string
    dark?: boolean
}

export const AddNewItem = (props: AddNewItemProps) => {
    const [showForm, setShowForm] = useState(false);
    
    
}