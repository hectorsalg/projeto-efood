import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { add, open } from '../../store/reducers/cart';
import { Dish } from '../../utils/data';
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
import { parseToBRL } from '../../utils/functions';

type ProductCardProps = {
  id: number;
  image: string;
  title: string;
  description: string;
  price: number;
  portion: string;
};

const ProductCard: React.FC<ProductCardProps> = ({ id, title, description, image, price, portion }) => {
  const [modalEstaAberto, setModalEstaAberto] = useState(false);

  const dispatch = useDispatch();
  
  const addToCart = () => {
    const prato: Dish = {
      id,
      nome: title,
      descricao: description,
      foto: image,
      preco: price,
      porcao: portion,
    };
    
    dispatch(add(prato));
    dispatch(open());
    setModalEstaAberto(false);
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
        <Button title='Mais detalhes' type='button' onClick={() => setModalEstaAberto(true)}>Mais detalhes</Button>
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
                <Button title='Adicionar ao carrinho' type='button' onClick={addToCart}> Adicionar ao carrinho - {parseToBRL(price)} </Button>
              </div>
            </ModalContent>
          </ModalContainer>
        </ModalOverlay>
      )}
    </>
  );
};

export default ProductCard;