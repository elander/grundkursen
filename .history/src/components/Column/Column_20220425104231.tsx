import { CardContainer, ColumnContainer, ColumnTitle } from "../../styles";

type ColumnProps = {
    text: string
    children?: React.ReactNode
};

export const Column = ({text}: ColumnProps) => {
    return (
        <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      <CardContainer>Första kortet</CardContainer>
      <CardContainer>Andra kortet</CardContainer>
      </ColumnContainer>
    )
};