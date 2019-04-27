import React, { Component } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';
import "./TodoList.css";

class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = {
            todos: []
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

    toggleTodo = id => {
        const updatedTodos =this.state.todos.map(todo => {
            if(todo.id === id){
                return { ...todo, completed: !todo.completed }
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
                completed={todo.completed}
                removeTodo={this.removeTodo}
                updateTodo={this.updateTodo}
                toggleTodo={this.toggleTodo}
            />
        ));
        return (
            <div className="todo-list">
                <h1>
                    Todo List!<span>Get things done, one item at a time.</span>
                </h1>
                <ul>
                    {todos}
                </ul>
                <NewTodoForm createTodo={this.createTodo}/>
            </div>
        )
    }
}

export default TodoList;