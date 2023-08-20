// Необходимые Action creators

import { ADD_TODO, TOGGLE_TODO } from "../types/todo";

let nextTodoId = 0;
// функция возвращает обьект addTodo
export const addTodo = (content) => ({
  type: ADD_TODO,
  // и полезную нагрузку*
  payload: {
    id: ++nextTodoId,
    content,
  },
});
// функция действия с объектом (приходит id)
export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: { id },
});

// *id и контент (для content передается название элемента)