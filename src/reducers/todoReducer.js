import { actionsTypes } from "../actions/constants";

const initState = {
  todoList: [],
};

function addToTodoList(state, action) {
  return {
    ...state,
    todoList: [...state.todoList, action.payload],
  };
}

export default (state = initState, action) => {
  if (action.type === actionsTypes.ADD_TODO) {
    return addToTodoList(state, action);
  }
  return state;
};
