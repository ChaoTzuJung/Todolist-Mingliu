import React, { Component } from 'react';
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

    removeTodo = id => {
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        })
    }

    updateTodo = (id, updatedContent) => {
        const updatedTodos =this.state.todos.map(todo => {
            if(todo.id === id){
                return { ...todo, task: updatedContent }
            }
            return todo;
        });

        this.setState({
            todos: updatedTodos
        })  
    }

    render() {
        const todos = this.state.todos.map(todo => (
            <Todo 
                key={todo.id} 
                task={todo.task} 
                id={todo.id} 
                removeTodo={this.removeTodo}
                updateTodo={this.updateTodo}
            />
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