import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { IMaskInput } from 'react-imask';
import { RootReducer } from '../../store';
import { close, remove, clear } from '../../store/reducers/cart';
import { usePurchaseMutation } from '../../services/api';
import { Overlay, CartContainer, Sidebar, CartItem, InputGroup, Row } from './styles';
import { Dish } from '../../utils/data';
import { formataPreco } from '../ProductCard';
import { Button } from '../ProductCard/styles';

const Cart: React.FC = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart);
  const dispatch = useDispatch();
  
  const [purchase, { isLoading: isPurchasing }] = usePurchaseMutation();

  const [step, setStep] = useState<'cart' | 'delivery' | 'payment' | 'success'>('cart');
  const [orderId, setOrderId] = useState('');

  const closeCart = () => {
    dispatch(close());
    setStep('cart');
  };

  const removeItem = (id: number) => {
    dispatch(remove(id));
  };

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => acumulador += valorAtual.preco, 0);
  };

  const formik = useFormik({
    initialValues: {
      receiver: '',
      address: '',
      city: '',
      zipCode: '',
      number: '',
      complement: '',
      cardName: '',
      cardNumber: '',
      cardCode: '',
      expiresMonth: '',
      expiresYear: ''
    },
    validateOnBlur: false,
    validateOnChange: false,
    validationSchema: step === 'delivery' ? Yup.object({
      receiver: Yup.string().required('O campo é obrigatório'),
      address: Yup.string().required('O campo é obrigatório'),
      city: Yup.string().required('O campo é obrigatório'),
      zipCode: Yup.string().min(9, 'CEP deve conter 9 dígitos').required('O campo é obrigatório'),
      number: Yup.string().required('O campo é obrigatório'),
    }) : Yup.object({
      cardName: Yup.string().required('O campo é obrigatório'),
      cardNumber: Yup.string().required('O campo é obrigatório'),
      cardCode: Yup.string().min(3, 'CVV deve conter 3 dígitos').required('Inválido'),
      expiresMonth: Yup.string().required('Mês inválido'),
      expiresYear: Yup.string().required('Ano inválido'),
    }),
    onSubmit: async (values) => {
      if (step === 'delivery') {
        setStep('payment');
      } else if (step === 'payment') {
        
        const payload = {
          products: items.map((item) => ({
            id: item.id,
            price: item.preco
          })),
          delivery: {
            receiver: values.receiver,
            address: {
              description: values.address,
              city: values.city,
              zipCode: values.zipCode,
              number: Number(values.number),
              complement: values.complement || ''
            }
          },
          payment: {
            card: {
              name: values.cardName,
              number: values.cardNumber,
              code: Number(values.cardCode),
              expires: {
                month: Number(values.expiresMonth),
                year: Number(values.expiresYear)
              }
            }
          }
        };

        try {
          const response = await purchase(payload).unwrap();
          
          if (response.orderId) {
            setOrderId(response.orderId);
            setStep('success');
          }
        } catch (error) {
          console.error(error);
          alert('Erro ao processar o pagamento. Tente novamente mais tarde.');
        }
      }
    }
  });

  const finishOrder = () => {
    dispatch(clear());
    dispatch(close());
    setStep('cart');
    formik.resetForm();
  };

  if (!isOpen) return null;
  return (
    <CartContainer>
      <Overlay onClick={closeCart} />
      <Sidebar>
        {step === 'cart' && (
          <>
            <ul>
              {items.map((item: Dish, index: number) => (
                <CartItem key={`${item.id}-${index}`}>
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
            <Button title="Continuar com a entrega" type="button" onClick={() => setStep('delivery')}>
              Continuar com a entrega
            </Button>
          </>
        )}
        {step === 'delivery' && (
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
        )}
        {step === 'payment' && (
          <form className="delivery-form" onSubmit={formik.handleSubmit}>
            <h2>Pagamento - Valor a pagar {formataPreco(getTotalPrice())}</h2>
            
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
        )}
        {step === 'success' && (
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
        )}
      </Sidebar>
    </CartContainer>
  );
};

export default Cart;