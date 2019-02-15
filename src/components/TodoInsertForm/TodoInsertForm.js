import React, { Component } from 'react';
import styles from './TodoInsertForm.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export default class TodoInsertForm extends Component {
    state = {
        title: '',
        description: '',
        author: ''
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('submit', this.state);
        this.props.onCreateTodoItem(this.state);
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleInit = () => {
        console.log('handleInit');
        this.setState({
            title: '',
            description: '',
            author: ''
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="등록자" name="author" onChange={this.handleChange} value={this.state.author}/>
                <input type="text" placeholder="할 일을 간략하게 입력하세요" name="title" onChange={this.handleChange} value={this.state.title}/>
                <textarea type="text" placeholder="할 일에 대해서 자세히 기재하세요" name="description" onChange={this.handleChange} value={this.state.description}/>
                <span>
                    <button type="submit">등록</button>
                    <button type="reset" onClick={this.handleInit}>초기화</button>
                </span>
            </form>
        )
    }
}