import React, { Component } from 'react';

import SignIn from './SignIn';
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

class Main extends Component{

    render(){
        return(
            <div>
                {/*<SignIn/>*/}
                <AddTodo/>
                <hr/>
                <TodoList/>
            </div>
        )
    }
}

export default Main;