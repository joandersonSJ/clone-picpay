import styled from 'styled-components/native';

// attrs permite que eu acesse as propriedades default do componente
export const Container = styled.ScrollView.attrs(() => ({
  horizontal: true,
  contentContainerStyle: {
    alignItems: "center",
    paddingLeft: 16
  },
}))`
  height: 130px;
  background: #1e222b;
`;

// Suggestions
export const Option = styled.TouchableOpacity`
  width: 80px;
  margin-right: 16px;
  align-items: center;
`;
export const Image = styled.Image``;
export const Label = styled.Text`
  color: #f5f5f5;
  font-weight: bold;
  margin-top: 8px;
  font-size: 14px;
`;