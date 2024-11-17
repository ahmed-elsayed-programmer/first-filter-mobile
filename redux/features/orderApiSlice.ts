import { Order } from "@/constants/types";
import { apiSlice } from "../services/apiSlice";

const productApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (formdata) => ({
        url: "/order/list/create/",
        method: "POST",
        body: formdata,
      }),
    }),
  }),
});

export const { useCreateOrderMutation } = productApiSlice;
