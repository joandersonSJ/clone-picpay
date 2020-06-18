import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

interface IOption{
  bgColor?: string;
}

export const Container = styled.ScrollView.attrs(()=>({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    paddingLeft: 16
  }
}))`
  margin-top: 26px;
`;

export const Title = styled.Text`
  color: #f5f5f5;
  font-size: 16px;
  font-weight: bold;
`;

export const Image = styled.Image`
  align-self: center;
`;

export const Option = styled(TouchableOpacity)<IOption>`
  background: ${({ bgColor }) => bgColor};
  width: 150px;
  height: 230px;
  border-radius: 8px;
  padding: 15px;
  justify-content: space-between;
  margin-right: 16px;
`;