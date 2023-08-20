import React from "react";
import { useDispatch } from "react-redux";
import cx from "classnames";

import { toggleTodo } from "../../store/actions/creators/todo";

import styles from './index.module.css';

export const Todo = ({ todo }) => {
  // снова достаем функцию
  const dispatch = useDispatch();

  const toggleTodoItem = () => {
    // функция будет отправлять в стор действие и будет туда отправлять id (toggleTodo)
    dispatch(toggleTodo(todo.id));
  }

  return (
    <li className={styles.item} onClick={toggleTodoItem}>
      {todo.completed ? "👌" : "👋"}{" "}
      <span
        className={cx({
          [styles.completed]: todo.completed,
        })}
      >
        {todo.content}
      </span>
    </li>
  );
};
