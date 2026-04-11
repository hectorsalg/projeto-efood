import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

import LogoImg from '../../assets/logo.png';
import { CartText, HeaderBackground, HomeContainer, HomeTitle, Logo, NavLink, ProfileContainer } from './styles';
import { RootReducer } from '../../store';
import { open } from '../../store/reducers/cart';

const Header: React.FC = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  
  const dispatch = useDispatch();
  const { items } = useSelector((state: RootReducer) => state.cart);

  const openCart = () => {
    dispatch(open());
  };

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
          <CartText onClick={() => {openCart()}}>{items.length} produto(s) no carrinho</CartText>
        </ProfileContainer>
      )}
    </HeaderBackground>
  );
};

export default Header;