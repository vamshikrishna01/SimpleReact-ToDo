import React, { Component } from 'react';
import Task from './task'

export default class List extends Component{
    render(){
        return (
            <div>
                {this.props.todos.map((todo, index) => {
                    return (
                        <Task
                            todo={todo}
                            key={index}
                            index = {index}
                            handleClick = {this.props.handleClick}
                            handleDelete = {this.props.handleDelete}
                        />
                    )  
                })}
            </div>
        )
    }
}