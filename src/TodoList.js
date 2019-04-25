import React, { Component } from 'react';
import uuid from 'uuid/v4';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';

class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = {
            todos: [
                {task: "1"},
                {task: "2"},
            ]
        }
    }

    createTodo = newTodo => {
        this.setState({
            todos: [...this.state.todos, newTodo]
        })
    }

    render() {
        const todos = this.state.todos.map(todo => (
            <Todo key={todo.id} task={todo.task} />
        ));
        return (
            <div>
                <h1>Todo List!</h1>
                <NewTodoForm createTodo={this.createTodo}/>
                <ul>
                    {todos}
                </ul>
            </div>
        )
    }
}

export default TodoList;