import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { colors } from '../../styles/global';
import EstrelaImg from '../../assets/estrela.png';

export const Card = styled.div`
  background-color: ${colors.white};
  border: 1px solid ${colors.primary};
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 217px;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const TagsContainer = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  gap: 8px;
`;

export const Tag = styled.span`
  background-color: ${colors.primary};
  color: ${colors.secondary};
  font-size: 12px;
  font-weight: bold;
  padding: 6px 10px;
`;

export const Content = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;

  h3 {
    font-size: 18px;
    font-weight: bold;
  }

  span {
    font-size: 18px;
    font-weight: bold;
    display: flex;
    align-items: center;
    gap: 8px;

    &::after {
      content: '';
      width: 20px;
      height: 20px;
      background-image: url(${EstrelaImg});
      background-size: contain;
      background-repeat: no-repeat;
      display: inline-block;
    }
  }
`;

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 16px;
  flex: 1;
`;

export const ButtonLink = styled(Link)`
  background-color: ${colors.primary};
  color: ${colors.secondary};
  font-size: 14px;
  font-weight: bold;
  text-decoration: none;
  padding: 8px;
  width: max-content;
  cursor: pointer;
  display: inline-block;
`;