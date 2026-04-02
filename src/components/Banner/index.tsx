import React from 'react';

import { BannerContainer, Content, Category, Title } from './styles';

type BannerProps = {
  category: string;
  title: string;
  image: string;
};

const Banner: React.FC<BannerProps> = ({ category, title, image }) => {
  return (
    <BannerContainer bgImage={image}>
      <Content>
        <Category>{category}</Category>
        <Title>{title}</Title>
      </Content>
    </BannerContainer>
  );
};

export default Banner;