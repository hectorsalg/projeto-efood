import React from 'react';
import { useParams } from 'react-router-dom';
import { ClockLoader } from 'react-spinners';

import Banner from '../../components/Banner';
import ProductCard from '../../components/ProductCard';
import { Grid } from './styles';
import { colors, MainContainer, Message } from '../../styles/global';
import { useGetRestauranteByIdQuery } from '../../services/api';

const Perfil: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  const { data: restaurant, isLoading, error } = useGetRestauranteByIdQuery(id as string);

  if (isLoading) return <Message><ClockLoader color={colors.primary} /></Message>;
  if (error || !restaurant) return <Message>Erro ao carregar o restaurante.</Message>;

  const cardapio = restaurant.cardapio || [];

  return (
    <>
      <Banner 
        category={restaurant.tipo.charAt(0).toUpperCase() + restaurant.tipo.slice(1)}
        title={restaurant.titulo}
        image={restaurant.capa}
      />
      <MainContainer>
        <Grid>
          {cardapio.map((dish) => (
            <ProductCard 
              key={dish.id}
              id={dish.id}
              title={dish.nome}
              description={dish.descricao}
              image={dish.foto}
              price={dish.preco}
              portion={dish.porcao}
            />
          ))}
        </Grid>
      </MainContainer>
    </>
  );
};

export default Perfil;