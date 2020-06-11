import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #000;
`
export const ScrollView = styled.ScrollView``;

// HEADER
export const Header = styled.View`
  height: 50px;
  padding: 0 15px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const Balance = styled.Text`
  color: #f5f5f5;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
`
export const BalanceTitle = styled.Text`
  font-size: 14px;
  text-align: center;
  color: rgba(255,255,255,0.8);
`
export const BalanceContainer = styled.SafeAreaView`
  background: #000;
`

