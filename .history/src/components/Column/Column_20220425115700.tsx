import { ColumnContainer, ColumnTitle } from "../../styles";

import { AddNewItem } from "../AddNewItem/AddNewItem";
import { Card } from "../Card/Card";

type ColumnProps = {
    text: string
    children?: React.ReactNode
};

export const Column = ({text}: ColumnProps) => {
    return (
        <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      <Card text="Första 'riktiga' kortet" />
      <Card text="Andra kortet" />
      <AddNewItem
      toggleButtonText="Add Card"
      onAdd={console.log}
      dark
      />
      </ColumnContainer>
      
    )
};