// конфигирурем стор

import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './slicers/todo'
import thunk from "redux-thunk";
// переменнаая стор - результат выполнения функции configureStore
export const store = configureStore({
  // декларация редьюсеров
  reducer: {
    todo: todoReducer,
  },
  // добавляет thunk 
  middleware: [thunk],
});
