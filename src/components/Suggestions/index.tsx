import React from 'react';
import * as S from './styles'

import img1 from '../../images/01.png';
import img2 from '../../images/02.png';
import img3 from '../../images/03.png';
import img4 from '../../images/04.png';
import img5 from '../../images/05.png';
import img6 from '../../images/06.png';
import img7 from '../../images/07.png';



const items = [
  {
    key: String(Math.random()),
    img: img1,
    label: 'Doações'
  },
  {
    key: String(Math.random()),
    img: img2,
    label: 'Doações'
  },
  {
    key: String(Math.random()),
    img: img3,
    label: 'Doações'
  },
  {
    key: String(Math.random()),
    img: img4,
    label: 'Doações'
  },
  {
    key: String(Math.random()),
    img: img5,
    label: 'Doações'
  },
  {
    key: String(Math.random()),
    img: img6,
    label: 'Doações'
  },
  {
    key: String(Math.random()),
    img: img7,
    label: 'Doações'
  },
]

const Suggestions: React.FC = () => {
  return (
    <S.Container>
        { items.map((item) => (
          <S.Option key={item.key}>
            <S.Image source={item.img} />
            <S.Label>{item.label}</S.Label>
          </S.Option> 
        )) }
    </S.Container>
  )
}

export default Suggestions;