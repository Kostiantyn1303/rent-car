import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = "https://6489751f5fa58521caafa128.mockapi.io";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getAll: builder.query({
      query: (page) => `advert?page=${page}&limit=8`,
      providesTags: ["Advert"],
    }),
    getAllWithoutLimit: builder.query("advert"),

    getAllFavorites: builder.query({
      query: () => "favorites",
    }),
    addToFavorites: builder.mutation({
      query: (car) => ({
        url: `favorites`,
        method: "POST",
        body: car,
      }),
      invalidatesTags: ["favorites"], // Оновлюємо кеш при додаванні об'єкта у вибрані
    }),
    removeFromFavorites: builder.mutation({
      query: (id) => ({
        url: `favorites/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["favorites"], // Оновлюємо кеш при видаленні об'єкта з вибраних
    }),
  }),
});

export const {
  useGetAllQuery,
  useGetAllWithoutLimitQuery,
  useGetAllFavoritesQuery,
  useAddToFavoritesMutation,
  useRemoveFromFavoritesMutation,
} = api;
