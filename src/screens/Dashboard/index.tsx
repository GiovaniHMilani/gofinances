import React from "react";

import {
  Container,
  HeaderContainer,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  UserWrapper,
  Icon
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
    </Container>
  );
}
