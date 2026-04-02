import styled from 'styled-components';

import Fundo from '../../assets/fundo.png';
import { Link } from 'react-router-dom';
import { colors } from '../../styles/global';

export const Logo = styled.img`
    width: 125px;
    margin: 0 auto;
`;

export const HeaderBackground = styled.header`
  background-image: url(${Fundo});
  background-size: contain;
`;

export const HomeContainer = styled.div`
  text-align: center;
  padding: 40px 0;
  margin-bottom: 20px;
`;

export const HomeTitle = styled.h2`
  font-size: 36px;
  font-weight: 900;
  max-width: 540px;
  margin: 0 auto;
  margin-top: 136px;
  line-height: 1;
`;

export const ProfileContainer = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 40px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 24px;
  }
`;

export const NavLink = styled(Link)`
  font-size: 18px;
  font-weight: 900;
  color: ${colors.primary};
`;

export const CartText = styled.span`
  font-size: 18px;
  font-weight: 900;
  cursor: pointer;
`;