import React, { Component } from 'react';

class Todo extends Component {
    constructor(props){
        super(props);
        this.state = {
            isEditing: false,
            task: this.props.task
        }
    }

    handleUpdated = e => {
        e.preventDefault();
        // Take new task data and pass up to parent
        this.props.updateTodo(this.props.id, this.state.task);
        this.setState({ isEditing: false })
    }

    handleChange = e => {
        this.setState({
            task: e.target.value
        });
    }

    toggleForm = () => {
        this.setState({ isEditing: !this.props.isEditing })
    }

    handleRemove = id => {
        this.props.removeTodo(this.props.id);
    }

    render() {
        let result = '';
        if(this.state.isEditing) {
            result = (
                <div>
                    <form onSubmit={this.handleUpdated}>
                        <input
                            type="text"
                            value={this.state.task}
                            name="task"
                            onChange={this.handleChange}
                        />
                        <button>Save</button>
                    </form>
                </div>
            )
        } else {
            result = (
                <div>
                    <button onClick={this.toggleForm}>Edit</button>
                    <button onClick={this.handleRemove}>X</button>
                    <li>{this.props.task}</li>
                </div>
            )
        }
        return result;
    }
}

export default Todo;