const initialState = {
  todos: [],
};
export default (state = initialState, action) => {
  switch (action.type) {
    case "GET_TODOS":
      return { todos: action.payload };
    case "ADD_TODO":
      return { todos: action.payload };
    case "IS_COMPLETE":
      return {
        todos: state.todos.map((todo) =>
          todo._id === action.payload._id ? action.payload : todo
        ),
      };
    case "DELETE_TODO":
      return { todos: action.payload };
    case "EDIT_TODO":
      return {
        todos: state.todos.map((todo) =>
          todo._id === action.payload._id ? action.payload : todo
        ),
      };
    default:
      return state;
  }
};
