import React from 'react';
import * as S from './styles';


import img13 from '../../images/13.png'

const Banner: React.FC = () => {
  return(
    <S.Container>
      <S.Detail>
        <S.Title>Cobre um amigo</S.Title>

        <S.Description>
          Mantenha suas parcerias em dia, use
          o PicPay para fazer uma cobranças.
        </S.Description>
      
      </S.Detail>
      <S.Image source={img13}/>
    </S.Container>
  ) 
}

export default Banner;