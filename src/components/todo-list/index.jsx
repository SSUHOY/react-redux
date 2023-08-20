import { useSelector } from "react-redux";
import { todosSelector } from "../../store/selectors/todo";
import { Todo } from "../todo";

import styles from './index.module.css';

export const TodoList = () => {
  // пользуемся хуком useselector, передаем селектор, который у нас имеется todosSelector
  const todos = useSelector(todosSelector);

  return (
    <ul className={styles.list}>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};
