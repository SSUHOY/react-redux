
import { useGetAllTodosQuery } from "../../serviсes/todo";
import { Todo } from "../todo";
import styles from "./index.module.css";

export const TodoList = () => {
  // результат выполнения хука useGetAllTodosQuery - это объект,
  // декларируем свойства из объекта
  const { data, error, isLoading } = useGetAllTodosQuery();

  const isEmptyList = !isLoading && !data?.length;

  if (isLoading) {
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
      {data.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};
