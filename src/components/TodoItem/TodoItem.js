import React, { Component } from 'react';
import styles from './TodoItem.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export default class TodoItem extends Component {
    state = {
        id: 0,
        author: '',
        title: '',
        description: '',
        editing: false
    }

    handleToggleEdit = () => {
        const { editing } = this.state;
        this.setState({
            editing: !editing
        })
    }

    shouldComponentUpdate(nextProps, nextState) {
        if( this.state.editing === false && nextState.editing === false && nextProps.todo === this.props.todo) return false;
        return true;
    }

    componentDidUpdate(prevProps, prevState) {
        const { todo } = this.props;
        if(this.state.editing && !prevState.editing) {
            this.setState({
                id: todo.id,
                author: todo.author,
                title: todo.title,
                description: todo.description
            })
        } 
        if(!this.state.editing && prevState.editing) {
            this.props.onTodoItemUpdate(todo.id, this.state);
        }
    }
    
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const { editing } = this.state;
        const { id, author, title, description } = this.props.todo;
        // console.log('render', this.props.todo);
        if(editing) {
            return (
                <div className={cx('todo-item')}>
                    <input type="text" name="author" placeholder="등록자를 입력하세요" onChange={this.handleChange} value={this.state.author}/> 
                    <input type="text" name="title" placeholder="제목을 입력하세요" onChange={this.handleChange} value={this.state.title}/>
                    <textarea name="description" placeholder="설명을 입력하세요" onChange={this.handleChange} value={this.state.description}/>
                    <div>
                        <button type="button" onClick={this.handleToggleEdit}>수정</button>
                        {/* <button type="button" onClick={this.handleToggleEdit}>취소</button> */}
                    </div>
                </div>
            )
        }

        return (
            <div className={cx('todo-item')}>
                <strong>ID</strong>: {id}, <strong>author</strong>: {author}, <strong>title</strong>: {title}, <strong>description</strong>: {description}
                <span onClick={(e) => {
                    e.preventDefault();
                    this.props.onTodoItemRemove(id);
                }}>&times;</span>
                <div>
                    <button type="button" onClick={this.handleToggleEdit}>수정</button>
                </div>
            </div>
        );
    } 
}
