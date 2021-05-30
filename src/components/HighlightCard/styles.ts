import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { Feather } from "@expo/vector-icons";

interface Props {
  type: "UP" | "DOWN" | "TOTAL";
}

export const Container = styled.View<Props>`
  background-color: ${({ theme, type }) =>
    type === "TOTAL" ? theme.colors.secondary : theme.colors.shape};
  width: ${RFValue(300)}px;
  border-radius: 5px;
  padding: 19px 23px;
  padding-bottom: ${RFValue(42)}px;
  margin-right: 16px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text<Props>`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: ${({ theme, type }) =>
    type === "TOTAL" ? theme.colors.shape : theme.colors.title};
`;

export const Icon = styled(Feather)<Props>`
  font-size: ${RFValue(40)}px;
  color: ${({ theme }) => theme.colors.success};

  ${({ type }) =>
    type === "TOTAL" &&
    css`
      color: ${({ theme }) => theme.colors.shape};
    `}

  ${({ type }) =>
    type === "DOWN" &&
    css`
      color: ${({ theme }) => theme.colors.attention};
    `}
`;

export const Footer = styled.View``;

export const Amount = styled.Text<Props>`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(32)}px;
  color: ${({ theme, type }) =>
    type === "TOTAL" ? theme.colors.shape : theme.colors.title};
  margin-top: 38px;
`;

export const Value = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
`;

export const LastTransaction = styled.Text<Props>`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  color: ${({ theme, type }) =>
    type === "TOTAL" ? theme.colors.shape : theme.colors.text};
`;
