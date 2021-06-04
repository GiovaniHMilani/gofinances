import React, { useState } from "react";
import { CategorySelect } from "../CategorySelect";
import { Keyboard, Modal, TouchableWithoutFeedback, Alert } from "react-native";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  Container,
  Header,
  Title,
  Form,
  Fields,
  TransactionTypes,
} from "./styles";

interface FormData {
  name: string;
  amount: string;
}

import { InputForm } from "../../components/Form/InputForm";
import { Button } from "../../components/Form/Button";
import { TransactionTypeButton } from "../../components/Form/TransactionTypeButton";
import { CategorySelectButton } from "../../components/Form/CategorySelectButton";

import { Category } from "../CategorySelect";

const schema = Yup.object().shape({
  name: Yup.string().required("Nome é obrigatório"),
  amount: Yup.number()
    .typeError("Informe um valor númerico")
    .positive("O Valor não pode ser negativo"),
});

export function Register() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [category, setCategory] = useState({
    key: "category",
    name: "Categoria",
  });

  const [transactionType, setTransactionType] =
    useState<"UP" | "DOWN" | "">("");

  const [modalCategory, setModalCategory] = useState(false);

  function handleChangeCategory(isCategory: Category) {
    setCategory(isCategory);
  }

  function handleRegister(form: FormData) {
    if (!transactionType) {
      return Alert.alert("Selecione o tipo da transação");
    }

    if (category.key === "category") {
      return Alert.alert("Selecione a categoria");
    }

    const data = {
      name: form.name,
      amount: form.amount,
      transactionType,
      category: category.key,
    };

    console.log(data);
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Header>
          <Title>Cadastro</Title>
        </Header>
        <Form>
          <Fields>
            <InputForm
              control={control}
              name="name"
              placeholder="Nome"
              autoCorrect={false}
              autoCapitalize="sentences"
              error={errors.name && errors.name.message}
            />
            <InputForm
              control={control}
              name="amount"
              placeholder="Preço"
              keyboardType="numeric"
              error={errors.amount && errors.amount.message}
            />
            <TransactionTypes>
              <TransactionTypeButton
                onPress={() => setTransactionType("UP")}
                type="UP"
                title="Entrada"
                isActive={transactionType === "UP"}
                activeOpacity={0.7}
              />
              <TransactionTypeButton
                onPress={() => setTransactionType("DOWN")}
                type="DOWN"
                title="Saída"
                isActive={transactionType === "DOWN"}
              />
            </TransactionTypes>
            <CategorySelectButton
              onPress={() => setModalCategory(true)}
              title={category.name}
            />
          </Fields>
          <Button
            text="Enviar"
            onPress={handleSubmit(handleRegister)}
            activeOpacity={0.7}
          />
        </Form>
        <Modal animationType="slide" visible={modalCategory}>
          <CategorySelect
            category={category}
            setCategory={handleChangeCategory}
            closeSelectCategory={() => setModalCategory(false)}
          />
        </Modal>
      </Container>
    </TouchableWithoutFeedback>
  );
}
