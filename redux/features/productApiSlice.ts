import { Product } from "@/constants/types";
import { apiSlice } from "../services/apiSlice";

const productApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    retrieveProducts: builder.query<Product[], void>({
      query: () => "/product/latest/",
    }),

    retrieveProduct: builder.query<Product, string>({
      query: (slug) => `/product/${slug}`,
    }),

    createProduct: builder.mutation({
      query: (formdata) => ({
        url: "/product/create",
        method: "POST",
        body: formdata,
      }),
    }),

    serachProducts: builder.query<Product[], string>({
      query: (query) => ({
        url: "product/search",
        method: "POST",
        body: { query },
      }),
    }),
  }),
});

export const {
  useRetrieveProductsQuery,
  useRetrieveProductQuery,
  useCreateProductMutation,
  useSerachProductsQuery,
} = productApiSlice;
