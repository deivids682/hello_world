import fetchWrapper from "../fetchWrapper";
import { actionsTypes, URL } from "./constants";

//fetchWrapper.get("http://localhost:3000/todoList");

/*fetchWrapper.put("http://localhost:3000/todoList/2", {
      name: "Davis Iljins",
      todo: "Go to training",
      isDone: true,
    });*/

// fetchWrapper.fetchDelete("http://localhost:3000/todoList/2");

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
