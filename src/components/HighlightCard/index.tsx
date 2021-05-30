import React from "react";

import {
  Container,
  Header,
  Title,
  Icon,
  Footer,
  Amount,
  LastTransaction,
  Value,
} from "./styles";

interface HighlightCardProps {
  type: "UP" | "DOWN" | "TOTAL";
  amount: string;
  lastTransaction: string;
}

const title = {
  UP: "Entrada",
  DOWN: "Saídas",
  TOTAL: "Total",
};

const icon = {
  UP: "arrow-up-circle",
  DOWN: "arrow-down-circle",
  TOTAL: "dollar-sign",
};

export function HighlightCard({
  type,
  amount,
  lastTransaction,
}: HighlightCardProps) {
  return (
    <Container type={type}>
      <Header>
        <Title type={type}>{title[type]}</Title>
        <Icon name={icon[type]} type={type} />
      </Header>
      <Footer>
        <Amount type={type}>{amount}</Amount>
        <LastTransaction type={type}>{lastTransaction}</LastTransaction>
      </Footer>
    </Container>
  );
}
