import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addTodo, deleteTodo } from '../actions/index';

class AddTodo extends Component {
    constructor(props){
        super(props);
        this.state = {
            text: ''
        }
    }

    handleAnyInputChange = (event, nameInState) => {
        this.setState({
            [nameInState]: event.target.value,
        })
    };

    submitTodo = (event) => {
        event.preventDefault();
        const { text } = this.state;
        //here I pass state to redux props
        this.props.addTodo(text)
    };


    render(){
        return (
            <div className='form-inline'>
                <div className='form-group'>
                    <input type="text"
                           className='form-control'
                           placeholder='Add a goal'
                           onChange={event => this.handleAnyInputChange(event, 'text')}
                    />
                    <button className='btn btn-success'
                            type='button'
                            onClick={this.submitTodo}

                    >
                        Submit
                    </button>
                </div>
            </div>
        )
    }
}

//I need only dispatch data to props in redux
//and bind with action creator
function mapDispatchToProps(dispatch) {
    return bindActionCreators({addTodo}, dispatch);
}


export default connect(null, mapDispatchToProps)(AddTodo);