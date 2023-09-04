// import { createSlice } from "@reduxjs/toolkit";
// // по-прежнему создаем начальное состояние
// const initialState = {
//   allIds: [],
//   byIds: {},
// };
// // логика id для того, чтобы экшны работали
// let nextTodoId = 0;
// // создаем slice, в терминологии redux это как раз срез стор
// export const todoSlice = createSlice({
//   // наименование участка
//   name: "todo",
//   // задаем начальное состоиние
//   initialState,
//   // Поле 'reducers' позволяет нам разметить все необходимые редьюсеры и сгенерировать необходимые связанные экшены
//   reducers: {
//     // описываем редюсеры
//     addTodo: (state, action) => {

//       const id = ++nextTodoId;

//       // Redux Toolkit позволяет нам писать логику мутации состояния в reducers.
//       // Под капотом он не мутирует состояние напрямую, а использует библиотеку Immer, которая
//       // обнаруживает изменения в «черновом состоянии» и создает новое неизменное состояние на основе этих изменений.
//       state.allIds.push(id);

//       state.byIds[id] = {
//         content: action.payload,
//         complete: false,
//       };
//       // не возвращаем новую копию объекта, так как в slice можно изменять направленые измененния и каждый раз формируются новые объекты состояния
//     },

//     toggleCompleteness: (state, { payload }) => {
//       const { id } = payload;

//       const targetTodo = state.byIds[id];

//       targetTodo.completed = !targetTodo.completed;
//     },
//   },
// });

// export const { addTodo, toggleCompleteness } = todoSlice.actions;

// export default todoSlice.reducer;