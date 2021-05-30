import React from "react";

import { HighlightCard } from "../../components/HighlightCard";
import {
  TransactionCard,
  TransactionCardProps,
} from "../../components/TransactionCard";

import {
  Container,
  HeaderContainer,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  UserWrapper,
  Icon,
  HighlightCards,
  Transactions,
  Title,
  TransactionList,
} from "./styles";

export interface DataListProps extends TransactionCardProps {
  id: string;
}

export function Dashboard() {
  const data: DataListProps[] = [
    {
      id: "1",
      title: "Desenvolvimento de site",
      amount: "R$ 12.000,00",
      date: "13/04/2020",
      category: {
        name: "Vendas",
        icon: "dollar-sign",
      },
      type: "UP",
    },
    {
      id: "2",
      title: "Hamburgueria Pizzy",
      amount: "R$ 59,00",
      date: "13/04/2020",
      category: {
        name: "Alimentação",
        icon: "coffee",
      },
      type: "DOWN",
    },
    {
      id: "3",
      title: "Aluguel do apartamento",
      amount: "R$ 1.200,00",
      date: "13/04/2020",
      category: {
        name: "Casa",
        icon: "home",
      },
      type: "DOWN",
    },
  ];

  return (
    <Container>
      <HeaderContainer>
        <UserWrapper>
          <UserInfo>
            <Photo
              source={{
                uri: "https://avatars.githubusercontent.com/u/48066516",
              }}
            />
            <User>
              <UserGreeting>Olá, </UserGreeting>
              <UserName>Giovani</UserName>
            </User>
          </UserInfo>
          <Icon name="power" />
        </UserWrapper>
      </HeaderContainer>

      <HighlightCards>
        <HighlightCard
          type="UP"
          amount="R$ 17.400,00"
          lastTransaction="Última entrada dia 13 de abril"
        />
        <HighlightCard
          type="DOWN"
          amount="R$ 1.259,00"
          lastTransaction="Última saída dia 03 de abril"
        />
        <HighlightCard
          type="TOTAL"
          amount="R$ 16.141,00"
          lastTransaction="01 à 16 de abril"
        />
      </HighlightCards>

      <Transactions>
        <Title>Listagem</Title>

        <TransactionList
          keyExtractor={(item) => item.id}
          data={data}
          renderItem={({ item }) => <TransactionCard data={item} />}
        />
      </Transactions>
    </Container>
  );
}
