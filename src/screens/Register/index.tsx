import React, { useState } from "react";
import { CategorySelect } from "../CategorySelect";
import { Modal } from "react-native";

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
import { CategorySelectButton } from "../../components/Form/CategorySelectButton";

import { Category } from '../CategorySelect'

export function Register() {
  const [category, setCategory] = useState({
    key: "category",
    name: "Categoria",
  });

  const [typeTransaction, setTypeTransaction] =
    useState<"UP" | "DOWN" | "">("");
  const [modalCategory, setModalCategory] = useState(false);

  function handleChangeCategory(isCategory: Category) {
    setCategory(isCategory);
  }

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
              title="Entrada"
              isActive={typeTransaction === "UP"}
              activeOpacity={0.7}
            />
            <TransactionTypeButton
              onPress={() => setTypeTransaction("DOWN")}
              type="DOWN"
              title="Saída"
              isActive={typeTransaction === "DOWN"}
            />
          </TransactionTypes>
          <CategorySelectButton
            onPress={() => setModalCategory(true)}
            title={category.name}
          />
        </Fields>
        <Button text="Enviar" activeOpacity={0.7} />
      </Form>
      <Modal animationType="slide" visible={modalCategory}>
        <CategorySelect
          category={category}
          setCategory={handleChangeCategory}
          closeSelectCategory={() => setModalCategory(false)}
        />
      </Modal>
    </Container>
  );
}
