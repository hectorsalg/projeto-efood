import styled from 'styled-components';

import { colors } from '../../styles/global';
import LixeiraImg from '../../assets/lixeira.png';

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${colors.black};
  opacity: 0.7;
`;

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  z-index: 10;
`;

export const Sidebar = styled.aside`
  background-color: ${colors.primary};
  z-index: 1;
  padding: 32px 8px 0 8px;
  max-width: 360px;
  width: 100%;

  ul {
    list-style: none;
    padding: 0;
  }

  .total {
    display: flex;
    justify-content: space-between;
    color: ${colors.white};
    font-weight: bold;
    font-size: 14px;
    margin-top: 40px;
    margin-bottom: 16px;
  }
`;

export const CartItem = styled.li`
  display: flex;
  background-color: ${colors.secondary};
  padding: 8px;
  position: relative;
  margin-bottom: 16px;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin-right: 8px;
  }

  h3 {
    color: ${colors.primary};
    font-size: 18px;
    margin-bottom: 16px;
    margin-top: 0;
  }

  span {
    color: ${colors.primary};
    font-size: 14px;
  }

  button {
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    bottom: 8px;
    right: 8px;
    cursor: pointer;
    background-image: url(${LixeiraImg});
    background-size: cover;
  }
`;