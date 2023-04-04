import React, { Component } from "react";

class Task extends Component {
    render(){
        const { task, index, toggleTask, deleteTask } = this.props;
        return (
            <li key={index} onClick={()=>toggleTask(index)}
            style={{textDecoration: task.completed ? 'line-through' : 'none'}}>
                {task.text}
                <button onClick={(event)=>{
                    event.stopPropagation();
                    deleteTask(index);
                }}>
                Supprimer</button>
            </li>
        )
        
    }
}

export default Task;
