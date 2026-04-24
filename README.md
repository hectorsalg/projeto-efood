# Projeto EFood
Este projeto é uma interface de uma plataforma de delivery de comida (eFood), desenvolvido para fins de estudo e prática de desenvolvimento web front-end. O site é responsivo e replica elementos visuais de aplicativos de entrega, contendo listagem de restaurantes parceiros, páginas de cardápios com detalhes dos pratos e sistema completo de carrinho e checkout.

## 🚀 Tecnologias Utilizadas

O projeto foi construído utilizando as seguintes ferramentas e bibliotecas:

* **React**: Biblioteca principal para a construção da interface de usuário.
* **TypeScript**: Superset de JavaScript que adiciona tipagem estática para um código mais robusto e seguro.
* **Redux Toolkit & RTK Query**: Gerenciamento de estado global da aplicação (como o carrinho de compras) e consumo eficiente de API REST.
* **Styled Components**: Biblioteca de CSS-in-JS para estilização avançada, dinâmica e escopada aos componentes.
* **React Router DOM**: Utilizado para o gerenciamento de rotas e navegação da aplicação (SPA).
* **Formik & Yup**: Gerenciamento de estados de formulários complexos e validação de dados estruturada no checkout.
* **React IMask**: Máscaras de input para campos formatados (CEP, Cartão, validade, etc).
* **HTML**: Estruturação semântica das páginas.

## 📦 Funcionalidades

* **Home (Lista de Restaurantes)**: Exibição de restaurantes parceiros através de cards detalhados, mostrando a avaliação (estrelas), tipo de culinária, capa e descrição do estabelecimento. Os dados são consumidos via API REST.
* **Perfil do Restaurante**: Página interna contendo um banner de destaque e o cardápio específico do restaurante escolhido.
* **Cards de Produtos**: Listagem dos pratos disponíveis no cardápio, com foto, descrição, preço e opção para adicionar ao carrinho.
* **Carrinho de Compras**: Sidebar para gerenciamento de itens selecionados, cálculo de valores totais e controle para prosseguir ao pagamento.
* **Checkout Completo**: Formulários divididos em etapas (Dados de Entrega e Dados de Pagamento), com validação de dados em tempo real e simulação de envio do pedido.
* **Componentização**: Estrutura altamente modularizada para fácil manutenção e escalabilidade.

## 🛠️ Como Executar o Projeto

Para rodar este projeto localmente, você precisará ter o Node.js instalado.

Instale as dependências:

```bash
npm install
```

Inicie o servidor de desenvolvimento (para observar as mudanças em tempo real):
```bash
npm start
```

Compile o projeto para produção:
```bash
npm run build
```

## 🌐 Web

Link do projeto publicado na [Vercel](https://projeto-efood-hector.vercel.app)