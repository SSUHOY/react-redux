import { ADD_TODOS_FAILURE, ADD_TODOS_STARTED, ADD_TODOS_SUCCESS, FETCH_TODOS_FAILURE, FETCH_TODOS_STARTED, FETCH_TODOS_SUCCESS } from "../actions/types/todo";

  const initialState = {
    loading: false,
    error: null,
    todos: [],
  }
  
  export default function todoReducer(state = initialState, action) {
    switch (action.type) {
      case FETCH_TODOS_STARTED: {
        return {
          ...state,
          loading: true,
        };
      }
  // успешное выполнение
      case FETCH_TODOS_SUCCESS: {
        return {
          ...state,
          loading: false,
          error: null,
          todos: [...action.payload.todos],
        };
      }
  // ставим ошибку в случае, если неудачно
      case FETCH_TODOS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload.error,
        };    
        case ADD_TODOS_STARTED:
          return {
            ...state,
            loading: true,
          };
    
        case ADD_TODOS_SUCCESS:
          return {
            ...state,
            loading: false,
            error: null,
            todos: [...state.todos, action.payload],
          };
    
        case ADD_TODOS_FAILURE:
          return {
            ...state,
            loading: false,
            error: action.payload.error,
          };
      default:
        return state;
    }
  }