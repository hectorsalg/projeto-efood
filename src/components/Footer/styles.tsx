import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { colors } from '../../styles/global';

export const FooterContainer = styled.footer`
  background-color: ${colors.secondary};
  text-align: center;
  padding: 40px 0;
  margin-top: 80px;
`;

export const Logo = styled.img`
  width: 125px;
  margin: 40px auto;
`;

export const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 32px;
  margin-bottom: 80px;

  div {
    width: 24px;
    height: 24px;
    background-color: ${colors.primary};
    border-radius: 50%;
    color: ${colors.secondary};
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Disclaimer = styled.p`
  font-size: 10px;
  color: ${colors.primary};
  max-width: 480px;
  margin: 0 auto;
`;

export const NavLink = styled(Link)`
  color: ${colors.secondary};
  text-decoration: none;
  display: flex;
`