import React, { Component } from 'react';
import styles from './TodoItem.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const TodoItem = ({todo}) => {
    console.log('todoItem', todo);
    const { author, title, description} = todo;
    return (
        <div className={cx('todo-item')}>
            <strong>author</strong>: {author}, <strong>title</strong>: {title}, <strong>description</strong>: {description}
        </div>
    );
}

export default TodoItem;