import { FETCH_TODOS_FAILURE, FETCH_TODOS_STARTED, FETCH_TODOS_SUCCESS } from "../actions/types/todo";

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
  
      case FETCH_TODOS_SUCCESS: {
        return {
          ...state,
          loading: false,
          error: null,
          todos: [...action.payload.todos],
        };
      }
  
      case FETCH_TODOS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload.error,
        };    
  
      default:
        return state;
    }
  }