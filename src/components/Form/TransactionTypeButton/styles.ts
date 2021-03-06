import styled, { css } from "styled-components/native";
import { TouchableOpacity } from "react-native";

import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

interface ContainerProps {
  type: "UP" | "DOWN";
  isActive: boolean;
}

export const Container = styled(TouchableOpacity)<ContainerProps>`
  width: 49%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 0.5px solid ${(porps) => porps.theme.colors.text};
  border-radius: 5px;
  padding: 16px;

  ${({ isActive, type, theme }) =>
    isActive &&
    type === "UP" &&
    css`
      background-color: ${theme.colors.success_light};
      border: 0px;
    `}

  ${({ isActive, type, theme }) =>
    isActive &&
    type === "DOWN" &&
    css`
      background-color: ${theme.colors.attention_light};
      border: 0px;
    `}
`;

interface IconProps {
  type: "UP" | "DOWN";
}

export const Icon = styled(Feather)<IconProps>`
  font-size: ${RFValue(24)}px;
  margin-right: 12px;
  color: ${({ theme, type }) =>
    type === "UP" ? theme.colors.success : theme.colors.attention};
`;

export const Title = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.title};
`;
