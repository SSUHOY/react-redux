// корневой селектор для среза store
// самый root'овый селектор
const todoSelector = (store) => store.todo;
// получаем все id тодушек
export const todoIdsSelector = (store) => todoSelector(store)?.allIds || [];

export const todoByIdSelector = (store, id) => {
  const todoStore = todoSelector(store);

  if (!todoStore) {
    return {};
  }
  
  const todoItem = todoStore.byIds[id];

  return {
    ...todoItem,
    id,
  };
}
// получаем все todo, которые есть в приложении
export const todosSelector = (store) =>
  todoIdsSelector(store).map((id) => todoByIdSelector(store, id));