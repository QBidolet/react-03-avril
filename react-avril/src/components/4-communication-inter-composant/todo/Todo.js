import React, { Component } from 'react';

import TaskForm from './TaskForm';
import TaskList from './TaskList';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: []
        }
        this.addTask = this.addTask.bind(this);
        this.toggleTask = this.toggleTask.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
        }

        addTask(task){
            this.setState({tasks: [...this.state.tasks, task]});
        }

        // componentDidUpdate(prevProps, prevState){
        //     console.log("5. componentDidUpdate : Le composant est mis à jour");
        //     console.log("Ancien état :", prevState);
        //     console.log("Nouvel état :", this.state);
        // }
    
        toggleTask(index) {
            const updatedTasks = this.state.tasks.map((task, i)=>{
                if (i === index) {
                    task.completed = !task.completed;
                }
                return task;
            })
            this.setState({tasks: updatedTasks});
        }

        deleteTask(index) {
            const updatedTasks = this.state.tasks.filter((task, i) => i !== index);
            this.setState({ tasks: updatedTasks});
        }

        render() {
            return(
                <div>
                    <TaskForm addTask={this.addTask}></TaskForm>
                    <TaskList tasks={this.state.tasks} 
                    toggleTask={this.toggleTask}
                    deleteTask={this.deleteTask}></TaskList>
                </div>
            )
        }

}

export default Todo;