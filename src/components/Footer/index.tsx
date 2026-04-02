import React from 'react';
import { Link } from 'react-router-dom';
import { TiSocialInstagram, TiSocialFacebook, TiSocialTwitter } from "react-icons/ti";

import LogoImg from '../../assets/logo.png';
import { FooterContainer, Logo, SocialLinks, Disclaimer, NavLink } from './styles';

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <Link to="/" target="_blank" rel="noopener noreferrer">
        <Logo src={LogoImg} alt="Logo" />
      </Link>

      <SocialLinks>
        <div title="Instagram">
          <NavLink to="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <TiSocialInstagram size={20} />
          </NavLink>
        </div>

        <div title="Facebook">
          <NavLink to="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <TiSocialFacebook size={20} />
          </NavLink>
        </div>

        <div title="Twitter">
          <NavLink to="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
            <TiSocialTwitter size={20} />
          </NavLink>
        </div>
      </SocialLinks>

      <Disclaimer>
        A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade
        dos produtos é toda do estabelecimento contratado.
      </Disclaimer>
    </FooterContainer>
  );
};

export default Footer;