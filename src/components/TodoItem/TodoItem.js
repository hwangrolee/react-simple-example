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
        editing: false,
        enabled: true,
    }

    handleToggleEdit = () => {
        const { editing } = this.state;
        this.setState({
            editing: !editing
        })
    }

    shouldComponentUpdate(nextProps, nextState) {
        if( this.state.editing === false && nextState.editing === false && nextProps.todo === this.props.todo) {
            if(this.state.enabled === nextState.enabled) {
                return true;
            }
            return false;
        }
        return true;
    }

    componentDidUpdate(prevProps, prevState) {
        const { todo } = this.props;
        if(this.state.editing && !prevState.editing) {
            this.setState({
                id: todo.id,
                author: todo.author,
                title: todo.title,
                description: todo.description,
                enabled: todo.enabled
            })
        } 
        if(!this.state.editing && prevState.editing) {
            this.props.onTodoItemUpdate(todo.id, this.state);
        }
    }

    handleUpdateCancel
    
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const { editing } = this.state;
        const { todo, onTodoItemEnableToggle} =  this.props;
        const { id, author, title, description, enabled } = todo;
        // console.log('render', this.props.todo);
        if(editing) {
            return (
                <div className={cx('todo-item')}>
                    <input type="text" name="author" placeholder="등록자를 입력하세요" onChange={this.handleChange} value={this.state.author}/> 
                    <input type="text" name="title" placeholder="제목을 입력하세요" onChange={this.handleChange} value={this.state.title}/>
                    <textarea name="description" placeholder="설명을 입력하세요" onChange={this.handleChange} value={this.state.description}/>
                    <div>
                        <button type="button" onClick={this.handleToggleEdit}>수정</button>
                        <button type="button" onClick={(e) => {
                            this.setState({
                                author: author,
                                title: title,
                                description: description,
                                editing: false
                            });
                        }}>취소</button>
                    </div>
                </div>
            )
        }

        return (
            <div className={cx('todo-item')}>
                <input type="checkbox" name="enabled" checked={enabled === false} onChange={(e) => {
                    onTodoItemEnableToggle(id) 
                }}/>
                <div className={`${enabled === false && 'checked'}`}>
                    <strong>ID</strong>: {id}, <strong>author</strong>: {author}, <strong>title</strong>: {title}, <strong>description</strong>: {description}

                </div>
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
