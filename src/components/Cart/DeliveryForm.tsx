import React from 'react';
import { IMaskInput } from 'react-imask';
import { InputGroup, Row } from './styles';
import { Button } from '../ProductCard/styles';
import { StepType } from './index';

type Props = {
  formik: any;
  setStep: (step: StepType) => void;
};

const DeliveryForm: React.FC<Props> = ({ formik, setStep }) => {
  return (
    <form className="delivery-form" onSubmit={formik.handleSubmit}>
      <h2>Entrega</h2>
      
      <InputGroup>
        <label htmlFor="receiver">Quem irá receber</label>
        <input 
          type="text" id="receiver" name="receiver" 
          value={formik.values.receiver} onChange={formik.handleChange}
          className={formik.errors.receiver && formik.touched.receiver ? 'error' : ''}
        />
        {formik.errors.receiver && formik.touched.receiver && (
          <span className="error-message">{formik.errors.receiver}</span>
        )}
      </InputGroup>
      
      <InputGroup>
        <label htmlFor="address">Endereço</label>
        <input 
          type="text" id="address" name="address" 
          value={formik.values.address} onChange={formik.handleChange}
          className={formik.errors.address && formik.touched.address ? 'error' : ''}
        />
        {formik.errors.address && formik.touched.address && (
          <span className="error-message">{formik.errors.address}</span>
        )}
      </InputGroup>
      
      <InputGroup>
        <label htmlFor="city">Cidade</label>
        <input 
          type="text" id="city" name="city" 
          value={formik.values.city} onChange={formik.handleChange}
          className={formik.errors.city && formik.touched.city ? 'error' : ''}
        />
        {formik.errors.city && formik.touched.city && (
          <span className="error-message">{formik.errors.city}</span>
        )}
      </InputGroup>
      
      <Row>
        <InputGroup>
          <label htmlFor="zipCode">CEP</label>
          <IMaskInput 
            type="text" id="zipCode" name="zipCode" mask="00000-000"
            value={formik.values.zipCode} onAccept={(value) => formik.setFieldValue('zipCode', value)}
            className={formik.errors.zipCode && formik.touched.zipCode ? 'error' : ''}
          />
          {formik.errors.zipCode && formik.touched.zipCode && (
            <span className="error-message">{formik.errors.zipCode}</span>
          )}
        </InputGroup>
        
        <InputGroup>
          <label htmlFor="number">Número</label>
          <input 
            type="text" id="number" name="number" 
            value={formik.values.number} onChange={formik.handleChange}
            className={formik.errors.number && formik.touched.number ? 'error' : ''}
          />
          {formik.errors.number && formik.touched.number && (
            <span className="error-message">{formik.errors.number}</span>
          )}
        </InputGroup>
      </Row>
      
      <InputGroup>
        <label htmlFor="complement">Complemento (opcional)</label>
        <input 
          type="text" id="complement" name="complement" 
          value={formik.values.complement} onChange={formik.handleChange}
        />
      </InputGroup>
      
      <div className="button-group">
        <Button type="submit">Continuar com o pagamento</Button>
        <Button type="button" onClick={() => setStep('cart')}>Voltar para o carrinho</Button>
      </div>
    </form>
  );
};

export default DeliveryForm;