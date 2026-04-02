import React from 'react';
import { useParams } from 'react-router-dom';

import Banner from '../../components/Banner';
import ProductCard from '../../components/ProductCard';
import { restaurants } from '../../utils/data';
import { Grid } from './styles';
import { MainContainer } from '../../styles/global';

const Perfil: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const restaurant = restaurants.find(r => r.id === Number(id));

  if (!restaurant) {
    return <div>Carregando...</div>;
  }

  return (
    <>
      <Banner 
        category={restaurant.category} 
        title={restaurant.title} 
        image={restaurant.image} 
      />
      <MainContainer>
        <Grid>
          {restaurant.menu.map((dish) => (
            <ProductCard 
              key={dish.id}
              title={dish.title}
              description={dish.description}
              image={dish.image}
            />
          ))}
        </Grid>
      </MainContainer>
    </>
  );
};

export default Perfil;