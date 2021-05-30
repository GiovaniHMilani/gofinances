import React from "react";
import { TouchableOpacityProps } from "react-native";
import { Container, Title, Icon } from "./styles";

const icons = {
  UP: "arrow-up-circle",
  DOWN: "arrow-down-circle",
};

interface Props extends TouchableOpacityProps {
  type: "UP" | "DOWN";
  title: string;
  isActive: boolean;
}

export function TransactionTypeButton({
  title,
  type,
  isActive,
  ...rest
}: Props) {
  return (
    <Container type={type} {...rest} isActive={isActive}>
      <Icon name={icons[type]} type={type} />
      <Title>{title}</Title>
    </Container>
  );
}
