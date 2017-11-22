import { ADD_TODO, DELETE_TODO } from '../constants';

// here we create action creator function

export const addTodo = (text) => {
  const action = {
      type: ADD_TODO,
      text
  };
  console.log('action in addTodo creator', action);
  return action;
};

export const deleteTodo = (id) => {
    const action = {
        type: DELETE_TODO,
        id
    };
    console.log('action in removeTodo creator', action);
    return action
};