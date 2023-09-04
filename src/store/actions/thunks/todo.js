
import axios from "axios";
import { addTodoFailure, addTodoStarted, addTodoSuccess, fetchTodosFailure, fetchTodosStarted, fetchTodosSuccess } from "../creators/todo";


const BASE_URL = "https://629470d963b5d108c18b87da.mockapi.io/todos";
// каждый thunk - это функция, возвращающая функцию
export const fetchTodos = () => async (dispatch, getState) => {
    // диспатч экшн начала загрузки
  dispatch(fetchTodosStarted());
// обработка положительного сценария запроса
  try {
    const { data } = await axios.get(BASE_URL);
    dispatch(fetchTodosSuccess(data));
    // обработка ошибки , вывод ui
  } catch (error) {
    dispatch(fetchTodosFailure(error));
  }
};

export const createTodo = (title) => async (dispatch) => {
  dispatch(addTodoStarted());

  try {
    const { data } = await axios.post(BASE_URL, {
      title,
      completed: false,
    });

    dispatch(addTodoSuccess(data));
  } catch (error) {
    dispatch(addTodoFailure(error));
  }
};

// Redux Thunk — это middleware-библиотека, 
// позволяющая писать функции с логикой, которые могут взаимодействовать с методами:  
// dispatch
// и 
// getState
// из Redux store.