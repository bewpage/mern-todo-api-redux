import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import { deleteTodo } from '../actions/index';


class TodoItem extends Component{


    removeTodo = (id) => {
        // console.log('remove id', id);
        // console.log('this.props', this.props);
        this.props.deleteTodo(id);
    };


    render(){
        const { todos } = this.props;
        return(
            <ul className='list-group col-sm-4'>
                {
                    todos.map(todo => {
                        return (
                            <li key={todo.id} className='list-group-item'>
                                <div className='list-item'>{todo.text}</div>
                                <div className='list-item delete-button'
                                     onClick={() => this.removeTodo(todo.id)}
                                >&#x2715;</div>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({deleteTodo}, dispatch);
}

function mapStateToProps(state) {
    console.log('state', state);
    return {
        todos: state
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem);