import React, { Component } from 'react';
import TodoItem from "./TodoItem";

class TodoList extends Component{


    render(){
        return(
            <div style={{margin: '5%'}}>
                <TodoItem />
            </div>
        )
    }
}

export default TodoList;