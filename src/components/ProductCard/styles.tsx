import styled from 'styled-components';

import { colors } from '../../styles/global';

export const Card = styled.div`
  background-color: ${colors.primary};
  padding: 8px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
`;

export const Image = styled.img`
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

export const Button = styled.button`
  background-color: ${colors.secondary};
  color: ${colors.primary};
  font-size: 14px;
  font-weight: 900;
  border: none;
  height: 24px;
  width: 100%;
  cursor: pointer;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

export const ModalContainer = styled.div`
  background-color: ${colors.primary};
  color: ${colors.secondary};
  padding: 32px;
  position: relative;
  max-width: 1024px;
  width: 100%;
  margin: 0 24px;
`;

export const CloseIcon = styled.img`
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;
  height: 16px;
`;

export const ModalContent = styled.div`
  display: flex;
  gap: 24px;

  .infos {
    display: flex;
    flex-direction: column;

    h4 {
      font-size: 21px;
      margin-bottom: 16px;
    }

    p {
      font-size: 14px;
      line-height: 22px;
      margin-bottom: 16px;
    }

    button {
      width: 224px;
      height: 24px;
      padding: 0;
      background-color: ${colors.secondary};
      color: ${colors.primary};
      border: none;
      font-weight: bold;
      font-size: 14px;
      cursor: pointer;
    }
  }
`;

export const ModalImage = styled.img`
  width: 280px;
  height: 280px;
  object-fit: cover;
`;