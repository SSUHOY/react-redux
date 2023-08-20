import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../store/actions/creators/todo";

import styles from "./index.module.css";

export const AddTodo = () => {
  const dispatch = useDispatch();
  // состояние, чтобы заполнять input и контролировать его значение
  const [value, setValue] = useState("");
// функция сэтит новое значение , когда срабатывает onChange на инпуте
  const onInputChange = (evt) => {
    setValue(evt.target.value);
  };
// функция , которая обнуляет состояние инпута, после добавления нового элемента
  const handleAddTodo = () => {
    // хук позволяет получить функцию dispatch, которая позволяет действия в стор, отправляем в стор результат выполнения action creator addTodo
    dispatch(addTodo(value));
    setValue("");
  };

  return (
    <div>
      {/* название элемента - value */}
      <input type="text" value={value} onChange={onInputChange} />
      <button className={styles.addButton} onClick={handleAddTodo}>
        Add todo
      </button>
    </div>
  );
};
