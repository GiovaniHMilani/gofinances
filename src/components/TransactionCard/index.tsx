import React from "react";
import {
  Container,
  Title,
  Amount,
  TransactionInfo,
  Type,
  Date,
  Category,
  Icon,
} from "./styles";

interface TransactionCard {
  type: "UP" | "DOWN";
}

export function TransactionCard({ type }: TransactionCard) {
  return (
    <Container>
      <Title>Desenvolvimento de site</Title>
      <Amount type={type}>R$ 12.000,00</Amount>
      <TransactionInfo>
        <Category>
          <Icon name="dollar-sign" />
          <Type>Vendas</Type>
        </Category>
        <Date>13/04/2020</Date>
      </TransactionInfo>
    </Container>
  );
}
