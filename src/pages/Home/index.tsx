import React from 'react';

import RestaurantCard from '../../components/RestaurantCard';
import { Grid } from './styles';
import { Restaurant } from '../../utils/data';
import { MainContainer, Message } from '../../styles/global';
import { useGetRestaurantesQuery } from '../../services/api';

const Home: React.FC = () => {
  const { data: restaurants, isLoading, error } = useGetRestaurantesQuery();

  if (isLoading) return <Message>Carregando restaurantes...</Message>;
  if (error || !restaurants) return <Message>Erro ao carregar os restaurantes.</Message>;

  const getTags = (restaurant: Restaurant) => {
    const tags = [];
    if (restaurant.destacado) {
      tags.push('Destaque da semana');
    }
    if (restaurant.tipo) {
      tags.push(restaurant.tipo.charAt(0).toUpperCase() + restaurant.tipo.slice(1));
    }
    return tags;
  };

  return (
    <>
      <MainContainer>
        <Grid>
          {restaurants.map(restaurant => (
            <RestaurantCard 
              key={restaurant.id}
              id={restaurant.id}
              title={restaurant.titulo}
              rating={restaurant.avaliacao}
              description={restaurant.descricao}
              image={restaurant.capa}
              tags={getTags(restaurant)}
            />
          ))}
        </Grid>
      </MainContainer>
    </>
  );
};

export default Home;