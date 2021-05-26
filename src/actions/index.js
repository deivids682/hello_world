import fetchWrapper from "../fetchWrapper";
import { actionsTypes, URL } from "./constants";

export const addTodoToList = (todoName) => async (dispatch) => {
  const response = await fetchWrapper.post(`${URL}/todoList`, {
    todoName,
    isDone: false,
  });

  dispatch({
    type: actionsTypes.ADD_TODO,
    payload: response,
  });
};

export const fetchTodoList = () => async (dispatch) => {
  const response = await fetchWrapper.get(`${URL}/todoList`);

  dispatch({
    type: actionsTypes.FETCH_TODO_LIST,
    payload: response,
  });
};

export const deleteTodoById = (id) => async (dispatch) => {
  await fetchWrapper.fetchDelete(`${URL}/todoList/${id}`);
  dispatch({
    type: actionsTypes.DELETE_BY_ID,
    payload: id,
  });
};

export const changeToDone = (todo) => async (dispatch) => {
  todo.isDone = true;
  const response = await fetchWrapper.put(`${URL}/todoList/${todo.id}`, todo);

  dispatch({
    type: actionsTypes.UPDATE_TODO_ITEM,
    payload: response,
  });
};
