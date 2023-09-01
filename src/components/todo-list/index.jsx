import {useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Todo } from "../todo";
import styles from './index.module.css';
import { todosErrorSelector, todosLoadingSelector, todosSelector } from '../../store/selectors/todo';
import { fetchTodos } from '../../store/actions/thunks/todo';

export const TodoList = () => {
  const dispatch = useDispatch();

  const todos = useSelector(todosSelector);
  const loading = useSelector(todosLoadingSelector);
  const error = useSelector(todosErrorSelector);

  const isEmptyList = !loading && !todos?.length;
// запрос данных
  
  // маунт компонента
  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  // смотрим на состояние загрузки и показываем соответсвующий ui
   if (loading) {
     return <p>Loading...</p>;
   }

   if (error) {
     return <p>{error.message}</p>;
   }

   if (isEmptyList) {
     return <p>No todos, yay!</p>;
   }

  return (
    <ul className={styles.list}>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};