import React from "react";
import ReactDOM from "react-dom";
import todoitems from "./todoitems";
import List from "./todo";

class Todo extends React.Component
{
    constructor() {
        super();
        this.state = {todos: todoitems};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(id)
    {
        this.setState(prev=>{
            const newtodo = prev.todos.map((item)=>{
                if(item.id === id)
                {
                    item.completed = !item.completed;
                }
                return item;
            });
            return ({todos: newtodo});
        });
    }
    render()
    {
        const todolists = this.state.todos.map((item)=> (
        <List key={item.id} 
            details=
                {{
                id: item.id,
                text: item.task,
                completed: item.completed,
                onChange: this.handleChange
                }}
        />
        ));
        return <div>{todolists}</div>;
    }
}

ReactDOM.render(
  <div className="todo-list">
    <Todo />
  </div>,
  document.getElementById("root")
);