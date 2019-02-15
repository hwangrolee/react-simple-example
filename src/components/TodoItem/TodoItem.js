import React, { Component } from 'react';
import styles from './TodoItem.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export default class TodoItem extends Component {

    state = {
        id: 0,
        author: '',
        title: '',
        description: ''
    }

    render() {
        const { id, author, title, description } = this.props.todo;
        
        return (
            <div className={cx('todo-item')}>
                <strong>ID</strong>: {id}, <strong>author</strong>: {author}, <strong>title</strong>: {title}, <strong>description</strong>: {description}
                <span onClick={(e) => {
                    e.preventDefault();
                    this.props.onTodoItemRemove(id);
                }}>&times;</span>
            </div>
        );
    } 
}
