import React from "react";
import { FlatList } from "react-native";
import { Button } from "../../components/Form/Button";
import { categories } from "../../utils/categories";

import {
  Container,
  Header,
  Title,
  Category,
  Icon,
  Name,
  Separetor,
  Footer,
} from "./styles";

export interface Category {
  key: string;
  name: string;
}

interface Props {
  category: Category;
  setCategory: (category: Category) => void;
  closeSelectCategory: () => void;
}

export function CategorySelect({
  category,
  setCategory,
  closeSelectCategory,
}: Props) {
  return (
    <Container>
      <Header>
        <Title>Categoria</Title>
      </Header>
      <FlatList
        data={categories}
        style={{ flex: 1, width: "100%" }}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => {
          const isActive = item.key === category.key;
          return (
            <Category onPress={() => setCategory(item)} isActive={isActive}>
              <Icon isActive={isActive} name={item.icon} />
              <Name isActive={isActive}>{item.name}</Name>
            </Category>
          );
        }}
        ListFooterComponent={Separetor}
        ItemSeparatorComponent={Separetor}
      />

      <Footer>
        <Button
          onPress={closeSelectCategory}
          text="Selecionar"
          activeOpacity={0.8}
        />
      </Footer>
    </Container>
  );
}
