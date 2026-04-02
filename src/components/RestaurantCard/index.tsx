import React from 'react';

import { Card, ImageContainer, TagsContainer, Tag, Content, HeaderRow, Description, ButtonLink } from './styles';

type RestaurantCardProps = {
  id: number;
  title: string;
  rating: string | number;
  description: string;
  image: string;
  tags: string[];
};

const RestaurantCard: React.FC<RestaurantCardProps> = ({ id, title, rating, description, image, tags }) => {
  return (
    <Card>
      <ImageContainer>
        <img src={image} alt={title} />
        <TagsContainer>
          {tags.map(tag => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </TagsContainer>
      </ImageContainer>
      <Content>
        <HeaderRow>
          <h3>{title}</h3>
          <span>{rating}</span>
        </HeaderRow>
        <Description>{description}</Description>
        <ButtonLink to={`/perfil/${id}`}>Saiba mais</ButtonLink>
      </Content>
    </Card>
  );
};

export default RestaurantCard;