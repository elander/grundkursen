import { ColumnContainer, ColumnTitle } from "../../styles";

import { AddNewItem } from "../AddNewItem/AddNewItem";
import { Card } from "../Card/Card";

type ColumnProps = {
    id: string
    text: string
    children?: React.ReactNode
};

export const Column = ({text, children}: ColumnProps) => {
    return (
        <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      {children}
      <AddNewItem
      toggleButtonText="Add Card"
      onAdd={console.log}
      dark
      />
      </ColumnContainer>
    )
};