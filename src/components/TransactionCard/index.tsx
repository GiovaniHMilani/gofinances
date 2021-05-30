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

interface Category {
  name: string;
  icon: string;
}

export interface TransactionCardProps {
  type: "UP" | "DOWN";
  title: string;
  amount: string;
  category: Category;
  date: string;
}

interface Props {
  data: TransactionCardProps;
}

export function TransactionCard({ data }: Props) {
  return (
    <Container>
      <Title>{data.title}</Title>
      <Amount type={data.type}>
        {data.type === "DOWN" && "- "}
        {data.amount}
      </Amount>
      <TransactionInfo>
        <Category>
          <Icon name={data.category.icon} />
          <Type>{data.category.name}</Type>
        </Category>
        <Date>{data.date}</Date>
      </TransactionInfo>
    </Container>
  );
}
