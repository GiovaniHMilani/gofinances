import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";
import { Feather } from "@expo/vector-icons";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.shape};
  padding: 17px 24px;
  border-radius: 5px;
  margin-bottom: 16px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  line-height: ${RFValue(21)}px;
`;

interface AmountProps {
  type: "UP" | "DOWN";
}

export const Amount = styled.Text<AmountProps>`
  color: ${({ theme, type }) =>
    type === "UP" ? theme.colors.success : theme.colors.attention};
  font-size: ${RFValue(20)}px;
  line-height: ${RFValue(30)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  margin-top: 2px;
`;

export const TransactionInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 19px;
`;

export const Category = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.text};
  margin-right: 17px;
`;

export const Type = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(14)}px;
  line-height: ${RFValue(21)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const Date = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(14)}px;
  line-height: ${RFValue(21)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;
