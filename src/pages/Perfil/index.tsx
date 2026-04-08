import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Banner from '../../components/Banner';
import ProductCard from '../../components/ProductCard';
import { Restaurant } from '../../utils/data';
import { Grid } from './styles';
import { MainContainer } from '../../styles/global';

const Perfil: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [restaurant, setRestaurant] = useState<Restaurant>();

  useEffect(() => {
    fetch(`https://api-ebac.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((data) => setRestaurant(data))
      .catch((error) => console.error('Erro ao carregar o restaurante:', error));
  }, [id]);

  if (!restaurant) {
    return <div>Carregando...</div>;
  }

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