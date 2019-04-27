import React, { Component } from 'react';
import Todo from './Todo';
import SwitchButton from './SwitchButton';
import NewTodoForm from './NewTodoForm';
import "./TodoList.css";

class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = {
            todos: [],
            sortedTodos: [],
            sortByStatus: false,
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

    sortTodos = () => {
        let sortedTodos = [];
        const doneTodo = this.state.todos.filter(function(todo) { return todo.completed; });
        const notDoneTodo = this.state.todos.filter(function(todo) { return !todo.completed; });
        sortedTodos = [...notDoneTodo, ...doneTodo];

        this.setState({
            sortByStatus: !this.state.sortByStatus,
            sortedTodos,
        })
    }

    render() {
        const todoData = this.state.sortByStatus ? this.state.sortedTodos : this.state.todos
        const todos = todoData.map(todo => (
            <Todo 
                key={todo.id} 
                task={todo.task} 
                id={todo.id} 
                completed={todo.completed}
                removeTodo={this.removeTodo}
                updateTodo={this.updateTodo}
                toggleTodo={this.toggleTodo}
            />
        ))
        return (
            <div className="todo-list">
                <h1>
                    Todo List!<span>Get things done, one item at a time.</span>
                </h1>
                <ul>
                    {todos}
                </ul>
                <SwitchButton 
                    label="Move done items at the end?"
                    sortTodos={this.sortTodos}
                />
                <NewTodoForm createTodo={this.createTodo}/>
            </div>
        )
    }
}

export default TodoList;