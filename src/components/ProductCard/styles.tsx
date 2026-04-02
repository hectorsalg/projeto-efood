import styled from 'styled-components';

import { colors } from '../../styles/global';

export const Card = styled.div`
  background-color: ${colors.primary};
  padding: 8px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 167px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 8px;
`;

export const Title = styled.h3`
  font-size: 16px;
  font-weight: 900;
  color: ${colors.secondary};
  margin-bottom: 8px;
`;

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  color: ${colors.secondary};
  margin-bottom: 8px;
  flex: 1;
`;

export const AddButton = styled.button`
  background-color: ${colors.secondary};
  color: ${colors.primary};
  font-size: 14px;
  font-weight: 900;
  border: none;
  padding: 8px 0;
  width: 100%;
  cursor: pointer;
`;