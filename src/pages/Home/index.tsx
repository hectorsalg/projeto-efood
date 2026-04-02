import React from 'react';

import RestaurantCard from '../../components/RestaurantCard';
import { Grid } from './styles';
import { restaurants } from '../../utils/data';
import { MainContainer } from '../../styles/global';

const Home: React.FC = () => {

  return (
    <>
      <MainContainer>
        <Grid>
          {restaurants.map(restaurant => (
            <RestaurantCard 
              key={restaurant.id}
              id={restaurant.id}
              title={restaurant.title}
              rating={restaurant.rating}
              description={restaurant.description}
              image={restaurant.image}
              tags={restaurant.tags}
            />
          ))}
        </Grid>
      </MainContainer>
    </>
  );
};

export default Home;