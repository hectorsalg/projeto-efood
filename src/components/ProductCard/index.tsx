import React from 'react';

import { Card, ProductImage, Title, Description, AddButton } from './styles';

type ProductCardProps = {
  image: string;
  title: string;
  description: string;
};

const ProductCard: React.FC<ProductCardProps> = ({ image, title, description }) => {
  return (
    <Card>
      <ProductImage src={image} alt={title} />
      <Title>{title}</Title>
      <Description>{description}</Description>
      <AddButton>Adicionar ao carrinho</AddButton>
    </Card>
  );
};

export default ProductCard;