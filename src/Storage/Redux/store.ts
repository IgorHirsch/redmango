import { configureStore } from "@reduxjs/toolkit";
import { menuItemReducer } from "./menuItemSlice";
import { authApi, menuItemApi, paymentApi, shoppingCartApi } from "../../Apis";
import { shoppingCartReducer } from "./shoppingCartSlice";
import { userAuthReducer } from "./userAuthSlice";

const store = configureStore({
  reducer: {
    menuItemStore: menuItemReducer,
    [menuItemApi.reducerPath]: menuItemApi.reducer,

    shoppingCartStore: shoppingCartReducer,
    [shoppingCartApi.reducerPath]: shoppingCartApi.reducer,

    userAuthStore: userAuthReducer,
    [authApi.reducerPath]: authApi.reducer,

    [paymentApi.reducerPath]: paymentApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(menuItemApi.middleware)
      .concat(shoppingCartApi.middleware)
      .concat(authApi.middleware)
      .concat(paymentApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
