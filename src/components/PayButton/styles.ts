import styled from "styled-components/native";
import { LinearGradient } from 'expo-linear-gradient'

export const Button = styled(LinearGradient)`
  height: 60px;
  width: 60px;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
`;

type TextType = {
  focused: boolean
}
export const Label = styled.Text<TextType>`
  color: ${({focused}) => focused ? '#000' : '#fff'};
  font-size: 12px
`;