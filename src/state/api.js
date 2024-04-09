import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Backend Api
export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl:
      "http://localhost:3001",
  }), // base url
  reducerPath: "adminApi",
  // tags
  tagTypes: [
    "Riders",
    "Orders",
  ],
  // endpoints
  endpoints: (build) => ({
    getUser: build.query({
      query: (id) => `general/user/${id}`,
      providesTags: ["User"],
    }),
    getProducts: build.query({
      query: () => "client/orders",
      providesTags: ["Orders"],
    }),
    getCustomers: build.query({
      query: () => "client/riders",
      providesTags: ["Riders"],
    }),
    getItems: build.query({
      query: () => "client/items",
      providesTags: ["Items"],
    }),
  }),
});

// export api endpoints
export const {
  useGetUserQuery,
  useGetProductsQuery,
  useGetCustomersQuery,
  useGetItemsQuery,
} = api;
