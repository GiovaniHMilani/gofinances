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
        <HighlightCard />
        <HighlightCard />
        <HighlightCard />
      </HighlightCards>
    </Container>
  );
}
