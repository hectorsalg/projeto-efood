import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { GlobalStyle } from './styles/global';
import Home from './pages/Home';
import Perfil from './pages/Perfil';
import Header from './components/Header';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/perfil/:id" element={<Perfil />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;