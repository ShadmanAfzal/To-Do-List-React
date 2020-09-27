import React, {Component} from "react";

class List extends Component
{
    style = {color:"#cacaca"};
    render()
    {
        return (
            <div className="todo-item">
            <input 
                type="checkbox"
                checked={this.props.details.completed} 
                onChange={()=>this.props.details.onChange(this.props.details.id)}
            />
            <p>{ this.props.details.completed?<strike style={this.style}>{this.props.details.text}</strike>:this.props.details.text}</p>
            </div>
        );
    }
}

export default List;