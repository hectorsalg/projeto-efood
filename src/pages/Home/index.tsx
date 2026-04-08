import React, { useEffect, useState } from 'react';

import RestaurantCard from '../../components/RestaurantCard';
import { Grid } from './styles';
import { Restaurant } from '../../utils/data';
import { MainContainer } from '../../styles/global';

const Home: React.FC = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  useEffect(() => {
    fetch('https://api-ebac.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((data) => setRestaurants(data))
      .catch((error) => console.error('Erro ao carregar os restaurantes:', error));
  }, []);

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