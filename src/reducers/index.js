import { ADD_TODO, DELETE_TODO } from "../constants";

const todo = (action) => {
    return {
        text: action.text,
        id: Math.random()
    }
};

//here we create new object with new todos and then we put it to reducer
const removeById = (state = [], id) => {
    const todos = state.filter(todo => todo.id !== id);
    console.log('new reduce todos', todos);
    return todos;
};

const todos = (state = [], action) => {
  let todos = null;
  switch(action.type){
      case ADD_TODO:
          todos = [...state, todo(action)];
          console.log('todos as state', todos);
          return todos;
      case DELETE_TODO:
          todos = removeById(state, action.id);
          console.log('todos in delete case', todos);
          return todos;
      default:
          return state;
  }
};

export default todos;