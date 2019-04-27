import React, { Component } from 'react';
import "./Todo.css"
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

    handleToggle = () => {
        this.props.toggleTodo(this.props.id);
    }

    render() {
        let result = '';
        if(this.state.isEditing) {
            result = (
                <div className="todo">
                    <form className="todo-edit-form" onSubmit={this.handleUpdated}>
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
                <div className="todo">
                    <li className={this.props.completed ? "todo-task completed" : "todo-task"} onClick={this.handleToggle}>
                        {this.props.task}
                    </li>
                    <div className="todo-buttons">
                        <button onClick={this.toggleForm}>
                            <i className="fas fa-pen" />
                        </button>
                        <button  onClick={this.handleRemove}>
                            <i className="fas fa-trash" />
                        </button>
                    </div>
                </div>
            )
        }
        return result;
    }
}

export default Todo;