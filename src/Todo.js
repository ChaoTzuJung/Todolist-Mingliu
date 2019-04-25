import React, { Component } from 'react';

class Todo extends Component {
    constructor(props){
        super(props);
        this.state = {
            todos: []
        }
    }

    handleRemove = id => {
        this.props.removeTodo(this.props.id);
    }

    render() {
        return (
            <div>
                <button>Edit</button>
                <button onClick={this.handleRemove}>X</button>
                <li>{this.props.task}</li>
            </div>
        )
    }
}

export default Todo;