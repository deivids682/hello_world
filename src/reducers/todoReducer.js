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

function deleteById(state, action) {
  return {
    ...state,
    todoList: state.todoList.filter((x) => x.id !== action.payload),
  };
}

function updateTodoItem(state, action) {
  const todoList = state.todoList;
  const index = todoList.findIndex((x) => x.id === action.payload.id);
  todoList[index] = action.payload;
  return {
    ...state,
    todoList,
  };
}

export default (state = initState, action) => {
  if (action.type === actionsTypes.ADD_TODO) {
    return addToTodoList(state, action);
  } else if (action.type === actionsTypes.FETCH_TODO_LIST) {
    return {
      ...state,
      todoList: action.payload,
    };
  } else if (action.type === actionsTypes.DELETE_BY_ID) {
    return deleteById(state, action);
  } else if (action.type === actionsTypes.UPDATE_TODO_ITEM) {
    return updateTodoItem(state, action);
  }
  return state;
};
