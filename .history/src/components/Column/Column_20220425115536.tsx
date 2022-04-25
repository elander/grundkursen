import { ColumnContainer, ColumnTitle } from "../../styles";

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
      </ColumnContainer>
      
    )
};