import React from 'react';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

import Suggestions from '../../components/Suggestions';
import Activities from '../../components/Activities';

import * as S from './styles';

const Home: React.FC = () => {
  return (
    <S.Container>
      <S.ScrollView>
        
        <S.Header>
          <MaterialCommunityIcons name="qrcode-scan" size={30} color="#10c68e"/>
        
          <S.BalanceContainer>
            <S.BalanceTitle>Meu saldo:</S.BalanceTitle>
            <S.Balance>R$ 100,00</S.Balance>
          </S.BalanceContainer>

          <AntDesign name="gift" size={30} color="#10c68e"/>
        </S.Header>

        <Suggestions />
        <Activities />
      </S.ScrollView>
    </S.Container>
  );
}

export default Home;