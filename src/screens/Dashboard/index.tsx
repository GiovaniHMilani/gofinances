import React from "react";
import { HighlightCard } from "../../components/HighlightCard";

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
} from "./styles";

export function Dashboard() {
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
    </Container>
  );
}
