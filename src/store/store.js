// конфигирурем стор

import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./reducers/todo";
// переменнаая стор - результат выполнения функции configureStore
export const store = configureStore({
  // декларация редьюсеров
  reducer: {
    todo: todoReducer,
  }
});
