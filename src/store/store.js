import { configureStore } from "@reduxjs/toolkit";
import { todoApi } from "../serviсes/todo";

export const store = configureStore({
  reducer: {
    // импорт todoApi, достаем ключ reducerPath, значение todoApi.reducer
    [todoApi.reducerPath]: todoApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todoApi.middleware),
});
