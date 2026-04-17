import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { RootReducer } from '../../store';
import { close, remove, clear } from '../../store/reducers/cart';
import { usePurchaseMutation } from '../../services/api';
import { Overlay, CartContainer, Sidebar } from './styles';

import CartItems from './CartItems';
import DeliveryForm from './DeliveryForm';
import PaymentForm from './PaymentForm';
import SuccessMessage from './SuccessMessage';

export type StepType = 'cart' | 'delivery' | 'payment' | 'success';

const Cart: React.FC = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart);
  const dispatch = useDispatch();
  
  const [purchase, { isLoading: isPurchasing }] = usePurchaseMutation();

  const [step, setStep] = useState<StepType>('cart');
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

  const finishOrder = () => {
    dispatch(clear());
    dispatch(close());
    setStep('cart');
    formik.resetForm();
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

  if (!isOpen) return null;
  return (
    <CartContainer>
      <Overlay onClick={closeCart} />
      <Sidebar>
        {step === 'cart' && (
          <CartItems 
            items={items} 
            getTotalPrice={getTotalPrice} 
            removeItem={removeItem} 
            setStep={setStep} 
          />
        )}
        
        {step === 'delivery' && (
          <DeliveryForm 
            formik={formik} 
            setStep={setStep} 
          />
        )}
        
        {step === 'payment' && (
          <PaymentForm 
            formik={formik} 
            setStep={setStep} 
            getTotalPrice={getTotalPrice} 
            isPurchasing={isPurchasing} 
          />
        )}
        
        {step === 'success' && (
          <SuccessMessage 
            orderId={orderId} 
            finishOrder={finishOrder} 
          />
        )}
      </Sidebar>
    </CartContainer>
  );
};

export default Cart;