import { Product, Category } from "@/constants/types";
import { apiSlice } from "../services/apiSlice";

const categoryApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    categoryList: builder.query<Category[], void>({
      query: () => "/category",
    }),
    categoryProductsList: builder.query<Product[], void>({
      query: (slug) => `/category/${slug}`,
    }),
  }),
});

export const { useCategoryListQuery, useCategoryProductsListQuery } =
  categoryApiSlice;
