import { NewItemButton, NewItemFormContainer, NewItemInput } from "../../styles";

type NewItemFormProps = {
    onAdd(text: string): void
};

export const NewItemForm = ({onAdd}: NewItemFormProps) => {

    return (
        <NewItemFormContainer>
            <NewItemInput />
            <NewItemButton>
                Create
            </NewItemButton>
        </NewItemFormContainer>
    )


}