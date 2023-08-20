// Разметка reducer

import { ADD_TODO, TOGGLE_TODO } from "../actions/types/todo";

// Начальное состояние to do логики приложения 
const initialState = {
  allIds: [],
  byIds: {},
};
// чистая функция принимающая два аргумента state (состояние) и пришедший action
export default function todoReducer(state = initialState, action) {
  // ловим пришедший action 
  switch (action.type) {
    // что нам сделать со стором
    case ADD_TODO: {
      // Полезная нагрузка и распаковка всех даннх для работы приложения
      const { id, content } = action.payload;

      return {
        ...state,
// предоставление подписчикам (любой, кто запрашивает данные из стор) нового состояния
        allIds: [...state.allIds, id],
        
        byIds: {
          ...state.byIds,

          [id]: {
            content,
            complete: false,
          },
        },
      };
    }

    case TOGGLE_TODO: {
      const {id} = action.payload;

      const targetTodo = state.byIds[id];

      return {
        ...state,

        byIds: {
          ...state.byIds,
          [id]: {
            ...targetTodo,
            completed: !targetTodo.completed,
          },
        },
      };

    }

    default:
      return state;
  }
}
