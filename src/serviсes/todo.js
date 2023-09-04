import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const DATA_TAG = { type: "Todos", id: "LIST" };

export const todoApi = createApi({
  // название для редьюсера
  reducerPath: "todoApi",
  // Базовый запрос к URL
  baseQuery: fetchBaseQuery({
    baseUrl: "https://629470d963b5d108c18b87da.mockapi.io",
  }),
  //   эндпойнты - получение всех тудушек
  endpoints: (builder) => ({
    //   обращаемся к builder
    // как только отрабатывает POST на добавление нового TODO , то отрабатывает запрос getAllTodos - обновление ui с новым TODO
    getAllTodos: builder.query({
      // запрос по аналогии с GET запросом, делаем запрос на TODOS. Склеится с baseURL, получим https://629470d963b5d108c18b87da.mockapi.io/todos
      query: () => "todos",
      // маркер данных специальной меткой, чтобы обновлять КЭШ после внесения измененний (добавления тудушки)
      providesTags: (result = []) => [DATA_TAG],
    }),
    // операция по изменению данных, по сути POST или PUT запрос
    addTodo: builder.mutation({
      query: (body) => ({
        url: "todos",
        method: "POST",
        body,
      }),
      invalidatesTags: [DATA_TAG],
    }),
      updateTodo: builder.mutation({
        query(data) {
          const { id, ...body } = data;
          return {
            url: `todos/${id}`,
            method: "PUT",
            body,
          };
        },
        // здесь указываем, какие данные должны быть изменены после мутации, получение свежих элементов
        invalidatesTags: (post) => [{ type: DATA_TAG.type, id: post?.id }],
      }),
    }),
  })

// экспорт хука из API для использования endpoints , которые ранее мы задекларировали
export const {
  useGetAllTodosQuery,
  useAddTodoMutation,
  useUpdateTodoMutation,
} = todoApi;
