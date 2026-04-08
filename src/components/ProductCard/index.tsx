import React, { useState } from 'react';

import { 
  Card, 
  Image, 
  Title, 
  Description, 
  Button, 
  ModalOverlay, 
  ModalContainer, 
  ModalContent, 
  CloseIcon, 
  ModalImage 
} from './styles';

import CloseImg from '../../assets/close.png';

type ProductCardProps = {
  image: string;
  title: string;
  description: string;
  price: number;
  portion: string;
};

const ProductCard: React.FC<ProductCardProps> = ({ title, description, image, price, portion }) => {
  const [modalEstaAberto, setModalEstaAberto] = useState(false);

  const formatarPreco = (preco: number) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(preco);
  };

  const getDescricaoCurta = (texto: string) => {
    if (texto.length > 150) {
      return texto.slice(0, 147) + '...';
    }
    return texto;
  };

  return (
    <>
      <Card>
        <Image src={image} alt={title} />
        <Title>{title}</Title>
        <Description>{getDescricaoCurta(description)}</Description>
        <Button onClick={() => setModalEstaAberto(true)}>Mais detalhes</Button>
      </Card>

      {modalEstaAberto && (
        <ModalOverlay onClick={() => setModalEstaAberto(false)}>
          <ModalContainer onClick={(e) => e.stopPropagation()}>
            <CloseIcon src={CloseImg} alt="Fechar" onClick={() => setModalEstaAberto(false)} />
            <ModalContent>
              <ModalImage src={image} alt={title} />
              <div className="infos">
                <h4>{title}</h4>
                <p>{description}</p>
                <p>Serve: {portion}</p>
                <Button>Adicionar ao carrinho - {formatarPreco(price)}</Button>
              </div>
            </ModalContent>
          </ModalContainer>
        </ModalOverlay>
      )}
    </>
  );
};

export default ProductCard;