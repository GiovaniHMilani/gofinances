import React, { useState } from "react";
import {
  Container,
  Header,
  Title,
  Form,
  Fields,
  TransactionTypes,
} from "./styles";

import { Input } from "../../components/Form/Input";
import { Button } from "../../components/Form/Button";
import { TransactionTypeButton } from "../../components/Form/TransactionTypeButton";

export function Register() {
  const [typeTransaction, setTypeTransaction] =
    useState<"UP" | "DOWN" | "">("");

  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>
      <Form>
        <Fields>
          <Input placeholder="Nome" />
          <Input placeholder="Preço" />
          <TransactionTypes>
            <TransactionTypeButton
              onPress={() => setTypeTransaction("UP")}
              type="UP"
              title="Income"
              isActive={typeTransaction === "UP"}
              activeOpacity={0.7}
            />
            <TransactionTypeButton
              onPress={() => setTypeTransaction("DOWN")}
              type="DOWN"
              title="Outcome"
              isActive={typeTransaction === "DOWN"}
            />
          </TransactionTypes>
        </Fields>
        <Button text="Enviar" activeOpacity={0.7} />
      </Form>
    </Container>
  );
}
