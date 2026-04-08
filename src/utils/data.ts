export type Dish = {
  id: number;
  nome: string;
  descricao: string;
  foto: string;
  preco: number;
  porcao: string;
};

export type Restaurant = {
  id: number;
  titulo: string;
  destacado: boolean;
  tipo: string;
  avaliacao: number;
  descricao: string;
  capa: string;
  cardapio: Dish[];
};

// export const restaurants: Restaurant[] = [
//   {
//     id: 1,
//     title: 'Hioki Sushi',
//     rating: '4.9',
//     description: 'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis.',
//     image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=80',
//     tags: ['Destaque da semana', 'Japonesa'],
//     category: 'Japonesa',
//     menu: [
//       {
//         id: 101,
//         title: 'Combo Salmão',
//         description: 'Delicioso combo com 12 peças de salmão fresco, incluindo nigiris, joy e uramakis.',
//         image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=80'
//       },
//       {
//         id: 102,
//         title: 'Combo Salmão',
//         description: 'Delicioso combo com 12 peças de salmão fresco, incluindo nigiris, joy e uramakis.',
//         image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=80'
//       },
//       {
//         id: 103,
//         title: 'Combo Salmão',
//         description: 'Delicioso combo com 12 peças de salmão fresco, incluindo nigiris, joy e uramakis.',
//         image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=80'
//       },
//       {
//         id: 104,
//         title: 'Combo Salmão',
//         description: 'Delicioso combo com 12 peças de salmão fresco, incluindo nigiris, joy e uramakis.',
//         image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=80'
//       },
//       {
//         id: 105,
//         title: 'Combo Salmão',
//         description: 'Delicioso combo com 12 peças de salmão fresco, incluindo nigiris, joy e uramakis.',
//         image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=80'
//       },
//       {
//         id: 106,
//         title: 'Combo Salmão',
//         description: 'Delicioso combo com 12 peças de salmão fresco, incluindo nigiris, joy e uramakis.',
//         image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=80'
//       }
//     ]
//   },
//   {
//     id: 2,
//     title: 'La Dolce Vita Trattoria',
//     rating: '4.6',
//     description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis.',
//     image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=800&q=80',
//     tags: ['Italiana'],
//     category: 'Italiana',
//     menu: [
//       {
//         id: 201,
//         title: 'Pizza Marguerita',
//         description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite.',
//         image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80'
//       },
//       {
//         id: 202,
//         title: 'Pizza Marguerita',
//         description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite.',
//         image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80'
//       },
//       {
//         id: 203,
//         title: 'Pizza Marguerita',
//         description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite.',
//         image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80'
//       },
//       {
//         id: 204,
//         title: 'Pizza Marguerita',
//         description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite.',
//         image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80'
//       },
//       {
//         id: 205,
//         title: 'Pizza Marguerita',
//         description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite.',
//         image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80'
//       },
//       {
//         id: 206,
//         title: 'Pizza Marguerita',
//         description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite.',
//         image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80'
//       }
//     ]
//   },
//   {
//     id: 3,
//     title: 'La Dolce Vita Trattoria',
//     rating: '4.6',
//     description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis.',
//     image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=800&q=80',
//     tags: ['Italiana'],
//     category: 'Italiana',
//     menu: [
//       {
//         id: 301,
//         title: 'Pizza Marguerita',
//         description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite.',
//         image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80'
//       },
//       {
//         id: 302,
//         title: 'Pizza Marguerita',
//         description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite.',
//         image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80'
//       },
//       {
//         id: 303,
//         title: 'Pizza Marguerita',
//         description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite.',
//         image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80'
//       },
//       {
//         id: 304,
//         title: 'Pizza Marguerita',
//         description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite.',
//         image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80'
//       },
//       {
//         id: 305,
//         title: 'Pizza Marguerita',
//         description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite.',
//         image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80'
//       },
//       {
//         id: 306,
//         title: 'Pizza Marguerita',
//         description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite.',
//         image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80'
//       }
//     ]
//   },
//   {
//     id: 4,
//     title: 'La Dolce Vita Trattoria',
//     rating: '4.6',
//     description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis.',
//     image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=800&q=80',
//     tags: ['Italiana'],
//     category: 'Italiana',
//     menu: [
//       {
//         id: 401,
//         title: 'Pizza Marguerita',
//         description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite.',
//         image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80'
//       },
//       {
//         id: 402,
//         title: 'Pizza Marguerita',
//         description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite.',
//         image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80'
//       },
//       {
//         id: 403,
//         title: 'Pizza Marguerita',
//         description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite.',
//         image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80'
//       },
//       {
//         id: 404,
//         title: 'Pizza Marguerita',
//         description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite.',
//         image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80'
//       },
//       {
//         id: 405,
//         title: 'Pizza Marguerita',
//         description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite.',
//         image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80'
//       },
//       {
//         id: 406,
//         title: 'Pizza Marguerita',
//         description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite.',
//         image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80'
//       }
//     ]
//   },
//   {
//     id: 5,
//     title: 'La Dolce Vita Trattoria',
//     rating: '4.6',
//     description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis.',
//     image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=800&q=80',
//     tags: ['Italiana'],
//     category: 'Italiana',
//     menu: [
//       {
//         id: 501,
//         title: 'Pizza Marguerita',
//         description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite.',
//         image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80'
//       },
//       {
//         id: 502,
//         title: 'Pizza Marguerita',
//         description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite.',
//         image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80'
//       },
//       {
//         id: 503,
//         title: 'Pizza Marguerita',
//         description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite.',
//         image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80'
//       },
//       {
//         id: 504,
//         title: 'Pizza Marguerita',
//         description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite.',
//         image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80'
//       },
//       {
//         id: 505,
//         title: 'Pizza Marguerita',
//         description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite.',
//         image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80'
//       },
//       {
//         id: 506,
//         title: 'Pizza Marguerita',
//         description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite.',
//         image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80'
//       }
//     ]
//   },
//   {
//     id: 6,
//     title: 'La Dolce Vita Trattoria',
//     rating: '4.6',
//     description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis.',
//     image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=800&q=80',
//     tags: ['Italiana'],
//     category: 'Italiana',
//     menu: [
//       {
//         id: 601,
//         title: 'Pizza Marguerita',
//         description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite.',
//         image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80'
//       },
//       {
//         id: 602,
//         title: 'Pizza Marguerita',
//         description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite.',
//         image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80'
//       },
//       {
//         id: 603,
//         title: 'Pizza Marguerita',
//         description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite.',
//         image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80'
//       },
//       {
//         id: 604,
//         title: 'Pizza Marguerita',
//         description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite.',
//         image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80'
//       },
//       {
//         id: 605,
//         title: 'Pizza Marguerita',
//         description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite.',
//         image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80'
//       },
//       {
//         id: 606,
//         title: 'Pizza Marguerita',
//         description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite.',
//         image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80'
//       }
//     ]
//   }
// ];