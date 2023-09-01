
import axios from "axios";
import { fetchTodosFailure, fetchTodosStarted, fetchTodosSuccess } from "../creators/todo";


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