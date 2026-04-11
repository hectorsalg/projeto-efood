import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { GlobalStyle } from './styles/global';
import Home from './pages/Home';
import Perfil from './pages/Perfil';
import Header from './components/Header';
import Footer from './components/Footer';
import Cart from './components/Cart';
import { store } from './store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/perfil/:id" element={<Perfil />} />
        </Routes>
        <Cart />
        <Footer />
      </BrowserRouter>
    </Provider>
  );
};

export default App;