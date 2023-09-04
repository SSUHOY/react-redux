import React, { useState } from "react";
import styles from "./index.module.css";
import { useAddTodoMutation } from "../../serviсes/todo";




export const AddTodo = () => {
  const [addTodo, { isLoading }] = useAddTodoMutation();
  const [value, setValue] = useState("");

  const onInputChange = (evt) => {
    setValue(evt.target.value);
  };

  const handleAddTodo = () => {
    addTodo({
      title: value,
      completed: false,
    });
    setValue("");
  };

  return (
    <div>
      <input type="text" value={value} onChange={onInputChange} />
      <button
        className={styles.addButton}
        onClick={handleAddTodo}
        disabled={isLoading}
      >
        Add todo
      </button>
    </div>
  );
};
// Если вы посмотрите во вкладке network, вы можете обнаружить, что запрос на создание элемента завершился успешно. Но хотелось бы обновлять данные после того, как создался элемент. Легко!

// imp