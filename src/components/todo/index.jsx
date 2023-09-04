import React from "react";
import { useDispatch } from "react-redux";
import cx from "classnames";

import { toggleCompleteness } from "../../store/slicers/todo";

import styles from './index.module.css';
import { toggleTodo } from "../../store/actions/creators/todo";

export const Todo = ({ todo }) => {
  // снова достаем функцию
  const dispatch = useDispatch();

  const toggleTodoItem = () => {
    // функция будет отправлять в стор действие и будет туда отправлять id (toggleTodo)
    dispatch(toggleTodo({id: todo.id}));
  }
  return (
    <li className={styles.item} onClick={toggleTodoItem}>
      {todo.completed ? "👌" : "👋"}{" "}
      <span
        className={cx({
          [styles.completed]: todo.completed,
        })}
      >
        {/* {todo.content} */}
        {todo.title}
      </span>
    </li>
  );
};
