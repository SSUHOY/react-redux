// конфигирурем стор
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import todoReducer from "./redusers/todo";
// переменнаая стор - результат выполнения функции configureStore
export const store = configureStore({
  // декларация редьюсеров
  reducer: {
    todo: todoReducer,
  },
  // добавляет thunk - соединяем две библиотеки
  middleware: [thunk],
});
