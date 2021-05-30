import styled from "styled-components/native";
import { TextInput } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";


export const Container = styled(TextInput)`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.shape};
  color: ${({ theme }) => theme.colors.text};

  padding: 18px 16px;
  border-radius: 5px;

  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};

  margin-bottom: 8px;
`
