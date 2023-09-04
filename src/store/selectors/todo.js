// корневой селектор
const todoSelector = (store) => store.todo;
// вытаскиваем todo селекторы
export const todosSelector = (store) => {
  return todoSelector(store)?.todos || [];
};
// получаем состояние загрузки 
export const todosLoadingSelector = (store) => todoSelector(store)?.loading;
// и состояние ошибки
export const todosErrorSelector = (store) => todoSelector(store)?.error;