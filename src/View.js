import React from 'react';
import {Task} from './Task';
import moment from "moment";

export class View extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            todoList: [],
        };
    }

    /**componentDidMount() {
        fetch('https://ietitaskplanner07.azurewebsites.net/api/list-tasks?code=aXpGFLCaHPLvE5YSJgmaxpNlgvuPL/5YwH5aO/ePCTKAq4eNd/uYYQ==')
            .then(response => response.json())
            .then(data => {
                let todoList = [];
                data.forEach(function (task) {
                    todoList.push({
                       "description": task.description, "dueDate": task.dueDate, "status": task.status, "nombre": task.responsible.name, "email": task.responsible.email
                    })
  
                });
                this.setState({todoList:todoList});
            });
    }**/
  

    render() {

        fetch('https://ietitaskplanner07.azurewebsites.net/api/list-tasks?code=aXpGFLCaHPLvE5YSJgmaxpNlgvuPL/5YwH5aO/ePCTKAq4eNd/uYYQ==')
            .then(response => response.json())
            .then(data => {
                let todoList = [];
                data.forEach(function (task) {
                    todoList.push({
                       "description": task.description, "dueDate": task.dueDate, "status": task.status, "nombre": task.responsible.name, "email": task.responsible.email
                    })
  
                });
                this.setState({todoList:todoList});
            });
        const todoList = this.state.todoList.map((todo, i) => {
            return (
                <Task key={i} description={todo.description} RName={todo.nombre} REmail={todo.email} status={todo.status} dueDate={moment(todo.dueDate)}/>
            );
        });

        return (
            <div>
                {todoList}
            </div>
        );


    }

}