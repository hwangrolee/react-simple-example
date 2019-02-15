import React, { Component } from 'react';
import styles from './TodoItemList.scss';
import classNames from 'classnames/bind';
import TodoItem from '../TodoItem';

const cx = classNames.bind(styles);

export default class TodoItemList extends Component {

    render() {
        const itemList = this.props.todoItemList.map(todoItem => {
            return (<TodoItem todo={todoItem}/>)
        })
        return (
            <div>
                {itemList}
            </div>
            
        )
    }
}