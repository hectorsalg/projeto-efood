import styled from 'styled-components';

import { colors } from '../../styles/global';

export const BannerContainer = styled.div<{ bgImage: string }>`
  width: 100%;
  height: 280px;
  background-image: url(${props => props.bgImage});
  background-size: cover;
  background-position: center;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

export const Content = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 24px 20px 32px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  z-index: 1; /* Fica acima da máscara escura */
  color: ${colors.white};
`;

export const Category = styled.p`
  font-size: 32px;
  font-weight: 100; /* Fino */
`;

export const Title = styled.h2`
  font-size: 32px;
  font-weight: 900; /* Negrito */
`;