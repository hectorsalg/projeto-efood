import React from 'react';
import { Button } from '../ProductCard/styles';

type Props = {
  orderId: string;
  finishOrder: () => void;
};

const SuccessMessage: React.FC<Props> = ({ orderId, finishOrder }) => {
  return (
    <div className="success-message">
      <h2>Pedido realizado - {orderId}</h2>
      <p>
        Estamos felizes em informar que seu pedido já está em processo de preparação e, em breve, será entregue no endereço fornecido.
      </p>
      <p>
        Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar cobranças extras.
      </p>
      <p>
        Lembre-se da importância de higienizar as mãos após o recebimento do pedido, garantindo assim sua segurança e bem-estar durante a refeição.
      </p>
      <p>
        Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. Bom apetite!
      </p>
      <div className="button-group">
        <Button type="button" onClick={finishOrder}>
          Concluir
        </Button>
      </div>
    </div>
  );
};

export default SuccessMessage;