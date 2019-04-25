import React, { Component } from 'react';

class NewTodoForm extends Component {
    constructor(props){
        super(props);
        this.state = { task: "" }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.createTodo({...this.state, id: uuid()});
        this.setState({ task: "" })
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="task">New Todo</label>
                <input 
                    type="text"
                    placeholder="New Todo"
                    id="task"
                    name="task"
                    value={this.state.task}
                    onChange={this.handleChange}
                />
                <button>Add Todo</button>
            </form>
        )
    }
}

export default NewTodoForm;