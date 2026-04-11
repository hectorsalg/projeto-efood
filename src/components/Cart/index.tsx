import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootReducer } from '../../store';
import { close, remove } from '../../store/reducers/cart';
import { Overlay, CartContainer, Sidebar, CartItem } from './styles';
import { Dish } from '../../utils/data';
import { formataPreco } from '../ProductCard';
import { Button } from '../ProductCard/styles';

const Cart: React.FC = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart);
  const dispatch = useDispatch();

  const closeCart = () => dispatch(close());

  const removeItem = (id: number) => {
    dispatch(remove(id));
  };

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => acumulador += valorAtual.preco, 0);
  };

  if (!isOpen) return null;
  return (
    <CartContainer>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {items.map((item: Dish) => (
            <CartItem key={item.id}>
              <img src={item.foto} alt={item.nome} />
              <div>
                <h3>{item.nome}</h3>
                <span>{formataPreco(item.preco)}</span>
              </div>
              <button onClick={() => removeItem(item.id)} type="button" aria-label="Remover item" />
            </CartItem>
          ))}
        </ul>
        <div className="total">
          <p>Valor total</p>
          <span>{formataPreco(getTotalPrice())}</span>
        </div>
        <Button title="Continuar com a entrega" type="button">
          Continuar com a entrega
        </Button>
      </Sidebar>
    </CartContainer>
  );
};

export default Cart;