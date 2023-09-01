import { FETCH_TODOS_FAILURE, FETCH_TODOS_STARTED, FETCH_TODOS_SUCCESS } from "../types/todo";

export const fetchTodosStarted = () => ({
    type: FETCH_TODOS_STARTED,
  });
  
  export const fetchTodosSuccess = (todos) => ({
    type: FETCH_TODOS_SUCCESS,
    payload: {
      todos,
    },
  });
  
  export const fetchTodosFailure = (error) => ({
    type: FETCH_TODOS_FAILURE,
    payload: {
      error,
    },
  })