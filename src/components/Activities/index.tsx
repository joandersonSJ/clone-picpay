import React from 'react';
import * as S from './styles';
import { Feather, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import avatar from '../../images/avatar.png';

const Activities: React.FC = () => {
  return (
    <S.Container>
      <S.Header>
        <S.Title>Atividade</S.Title>
      </S.Header>

      <S.Card>
        <S.CardHeader>
          <S.Avatar source={avatar} />
          <S.Description>
            <S.Bold>Você</S.Bold> pagou a <S.Bold>@Allan Neto</S.Bold>
          </S.Description>
        </S.CardHeader>

        <S.CardBody>
          <S.UserName>Joanderson Santos</S.UserName>
        </S.CardBody>

        <S.CardFooter>
          <S.Details>
            <S.Value>R$ 480,00</S.Value>
            <S.Divider />
              <Feather name="lock" color="#f5f5f5" size={14}/>
            <S.Date>há 2 anos</S.Date>
          </S.Details>

          <S.Actions>
            <S.Option>
              <MaterialCommunityIcons name="comment-outline" size={14} color="#f5f5f5" />
              <S.OptionLabel>0</S.OptionLabel>
            </S.Option>
            <S.Option>
              <AntDesign name="hearto" size={14} color="#f5f5f5" />
              <S.OptionLabel>0</S.OptionLabel>
            </S.Option>
          </S.Actions>
        </S.CardFooter>
      </S.Card>
    </S.Container>
  );
}

export default Activities;