import { CardContainer, ColumnContainer, ColumnTitle } from "../../styles";

type ColumnProps = {
    text: string
};

export const Column = ({text}: ColumnProps) => {
    return (
        <ColumnContainer>
      <ColumnTitle>Första kolumnen</ColumnTitle>
      <CardContainer>Första kortet</CardContainer>
      <CardContainer>Andra kortet</CardContainer>
      </ColumnContainer>
    )
};