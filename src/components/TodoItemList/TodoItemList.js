import React, { Component } from 'react';
import styles from './TodoItemList.scss';
import classNames from 'classnames/bind';
import TodoItem from '../TodoItem';

const cx = classNames.bind(styles);

export default class TodoItemList extends Component {
    static defaultProps = {
        todoItemList: [],
        onTodoItemRemove: () => console.warn('onRemove not defined'),
        onTodoItemUpdate: () => console.warn('onUpdate not defined'),
    }
    
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.todoItemList !== this.props.todoItemList;
    }


    render() {
        const { onTodoItemUpdate, onTodoItemRemove, onTodoItemEnableToggle} = this.props;

        const itemList = this.props.todoItemList.map(todoItem => {
            return (<TodoItem 
                key={todoItem.id}
                todo={todoItem} 
                onTodoItemRemove={onTodoItemRemove} 
                onTodoItemUpdate={onTodoItemUpdate}
                onTodoItemEnableToggle={onTodoItemEnableToggle}
                
            />)
        })
        return (
            <div>
                {itemList}
            </div>  
        )
    }
}