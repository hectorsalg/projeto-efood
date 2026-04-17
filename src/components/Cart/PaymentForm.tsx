import React from 'react';
import { IMaskInput } from 'react-imask';
import { InputGroup, Row } from './styles';
import { Button } from '../ProductCard/styles';
import { StepType } from './index';
import { parseToBRL } from '../../utils/functions';

type Props = {
  formik: any;
  setStep: (step: StepType) => void;
  getTotalPrice: () => number;
  isPurchasing: boolean;
};

const PaymentForm: React.FC<Props> = ({ formik, setStep, getTotalPrice, isPurchasing }) => {
  return (
    <form className="delivery-form" onSubmit={formik.handleSubmit}>
      <h2>Pagamento - Valor a pagar {parseToBRL(getTotalPrice())}</h2>
      
      <InputGroup>
        <label htmlFor="cardName">Nome no cartão</label>
        <input 
          type="text" id="cardName" name="cardName" 
          value={formik.values.cardName} onChange={formik.handleChange}
          className={formik.errors.cardName && formik.touched.cardName ? 'error' : ''}
        />
        {formik.errors.cardName && formik.touched.cardName && (
          <span className="error-message">{formik.errors.cardName}</span>
        )}
      </InputGroup>

      <Row>
        <InputGroup style={{ flex: 3 }}>
          <label htmlFor="cardNumber">Número do cartão</label>
          <IMaskInput 
            type="text" id="cardNumber" name="cardNumber" mask="0000 0000 0000 0000"
            value={formik.values.cardNumber} onAccept={(value) => formik.setFieldValue('cardNumber', value)}
            className={formik.errors.cardNumber && formik.touched.cardNumber ? 'error' : ''}
          />
          {formik.errors.cardNumber && formik.touched.cardNumber && (
            <span className="error-message">{formik.errors.cardNumber}</span>
          )}
        </InputGroup>
        
        <InputGroup style={{ flex: 1 }}>
          <label htmlFor="cardCode">CVV</label>
          <IMaskInput 
            type="text" id="cardCode" name="cardCode" mask="000"
            value={formik.values.cardCode} onAccept={(value) => formik.setFieldValue('cardCode', value)}
            className={formik.errors.cardCode && formik.touched.cardCode ? 'error' : ''}
          />
          {formik.errors.cardCode && formik.touched.cardCode && (
            <span className="error-message">{formik.errors.cardCode}</span>
          )}
        </InputGroup>
      </Row>

      <Row>
        <InputGroup>
          <label htmlFor="expiresMonth">Mês de vencimento</label>
          <IMaskInput 
            type="text" id="expiresMonth" name="expiresMonth" mask="00"
            value={formik.values.expiresMonth} onAccept={(value) => formik.setFieldValue('expiresMonth', value)}
            className={formik.errors.expiresMonth && formik.touched.expiresMonth ? 'error' : ''}
          />
          {formik.errors.expiresMonth && formik.touched.expiresMonth && (
            <span className="error-message">{formik.errors.expiresMonth}</span>
          )}
        </InputGroup>
        
        <InputGroup>
          <label htmlFor="expiresYear">Ano de vencimento</label>
          <IMaskInput 
            type="text" id="expiresYear" name="expiresYear" mask="00"
            value={formik.values.expiresYear} onAccept={(value) => formik.setFieldValue('expiresYear', value)}
            className={formik.errors.expiresYear && formik.touched.expiresYear ? 'error' : ''}
          />
          {formik.errors.expiresYear && formik.touched.expiresYear && (
            <span className="error-message">{formik.errors.expiresYear}</span>
          )}
        </InputGroup>
      </Row>

      <div className="button-group">
        <Button type="submit" disabled={isPurchasing}>
          {isPurchasing ? 'Finalizando...' : 'Finalizar pagamento'}
        </Button>
        <Button type="button" onClick={() => setStep('delivery')}>Voltar para a edição de endereço</Button>
      </div>
    </form>
  );
};

export default PaymentForm;