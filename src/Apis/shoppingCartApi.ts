import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const shoppingCartApi = createApi({
  reducerPath: "shoppingCartApi",

  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://redmangoapiigor-e3bpg8h3bpckc2gq.germanywestcentral-01.azurewebsites.net/api/",
  }),

  tagTypes: ["ShoppingCarts"],

  endpoints: (builder) => ({
    
    getShoppingCart: builder.query({
      query: (userId) => ({ 
        url: `shoppingcart`, //https://.../api/ShoppingCart
        params: {
          userId: userId,
        },
      }),
      providesTags: ["ShoppingCarts"],
    }),

    updateShoppingCart: builder.mutation({
      query: ({ menuItemId, updateQuantityBy, userId }) => ({
        url: "shoppingcart", //https://.../api/ShoppingCart
        method: "POST",
        params: {
          menuItemId,
          updateQuantityBy,
          userId,
        },
      }),
      invalidatesTags: ["ShoppingCarts"],
    }),
  }),
});

export const { useGetShoppingCartQuery, useUpdateShoppingCartMutation } =shoppingCartApi;
export default shoppingCartApi;
