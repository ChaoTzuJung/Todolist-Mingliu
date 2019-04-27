import React, { Component } from 'react';
import "./SwitchButton.css"

class SwitchButton extends Component {
    constructor(props){
        super(props);
        this.state = {
            isActive: false,
        }
    }

    handleSort = () => {
        this.props.sortTodos();
        this.setState({
            isActive: !this.state.isActive,
        })
    }

    render() {
        return (
            <div className={this.state.isActive ? "togglebutton-wrapper togglebutton-checked" : "togglebutton-wrapper" }>
                <label htmlFor="name">
                    <span className="togglebutton-label">{this.props.label}</span>
                    <span className="tooglebutton-box"></span>
                </label>
                <input id="name" type="checkbox" name="name" value={this.state.isActive} onChange={this.handleSort} />
            </div>
        )
    }
}

export default SwitchButton;