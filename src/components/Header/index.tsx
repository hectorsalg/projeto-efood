import React from 'react';

import LogoImg from '../../assets/logo.png';
import { CartText, HeaderBackground, HomeContainer, HomeTitle, Logo, NavLink, ProfileContainer } from './styles';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <HeaderBackground>
      {isHome ? (
        <HomeContainer>
          <Logo src={LogoImg} alt="logo" />
          <HomeTitle>Viva experiências gastronômicas no conforto da sua casa</HomeTitle>
        </HomeContainer>
      ) : (
        <ProfileContainer>
          <NavLink to="/">Restaurantes</NavLink>
          <Link to="/"><Logo src={LogoImg} alt="logo" /></Link>
          <CartText>0 produto(s) no carrinho</CartText>
        </ProfileContainer>
      )}
    </HeaderBackground>
  );
};

export default Header;