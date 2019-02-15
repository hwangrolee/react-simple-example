import React, { Component } from 'react';
import styles from './TodoItemList.scss';
import classNames from 'classnames/bind';
import TodoItem from '../TodoItem';

const cx = classNames.bind(styles);

export default class TodoItemList extends Component {

    render() {
        const {onTodoItemUpdate, onTodoItemRemove} = this.props;

        const itemList = this.props.todoItemList.map(todoItem => {
            return (<TodoItem 
                key={todoItem.id}
                todo={todoItem} 
                onTodoItemRemove={onTodoItemRemove} 
                onTodoItemUpdate={onTodoItemUpdate}/>)
        })
        return (
            <div>
                {itemList}
            </div>  
        )
    }
}