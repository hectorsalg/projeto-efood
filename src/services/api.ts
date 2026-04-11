import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Restaurant } from '../utils/data';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api-ebac.vercel.app/api/efood' }),
  endpoints: (builder) => ({
    getRestaurantes: builder.query<Restaurant[], void>({
      query: () => 'restaurantes',
    }),
    getRestauranteById: builder.query<Restaurant, string>({
      query: (id) => `restaurantes/${id}`,
    }),
  }),
});

export const { useGetRestaurantesQuery, useGetRestauranteByIdQuery } = api;