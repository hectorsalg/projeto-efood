import React from 'react';
import { CartItem } from './styles';
import { Button } from '../ProductCard/styles';
import { parseToBRL } from '../../utils/functions';
import { Dish } from '../../utils/data';
import { StepType } from './index';

type Props = {
  items: Dish[];
  getTotalPrice: () => number;
  removeItem: (id: number) => void;
  setStep: (step: StepType) => void;
};

const CartItems: React.FC<Props> = ({ items, getTotalPrice, removeItem, setStep }) => {
  return (
    <>
      <ul>
        {items.map((item: Dish, index: number) => (
          <CartItem key={`${item.id}-${index}`}>
            <img src={item.foto} alt={item.nome} />
            <div>
              <h3>{item.nome}</h3>
              <span>{parseToBRL(item.preco)}</span>
            </div>
            <button onClick={() => removeItem(item.id)} type="button" aria-label="Remover item" />
          </CartItem>
        ))}
      </ul>
      <div className="total">
        <p>Valor total</p>
        <span>{parseToBRL(getTotalPrice())}</span>
      </div>
      <Button title="Continuar com a entrega" type="button" onClick={() => setStep('delivery')}>
        Continuar com a entrega
      </Button>
    </>
  );
};

export default CartItems;