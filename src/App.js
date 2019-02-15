import React, { Component } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoItemList from './components/TodoItemList';
import TodoInsertForm from './components/TodoInsertForm';
// import './App.css';

class App extends Component {
  curId = 1
  state = {
    itemList: [{
      id: 0,
      title: 'first todo title',
      description: 'first todo description',
      author: 'hwangro lee',
      enabled: true
    },{
      id: 1,
      title: 'second todo title',
      description: 'second todo description',
      author: 'hwangro lee',
      enabled: false
    }]
  }

  onTodoItemCreate = (newItem) => {
    this.setState({
      itemList: this.state.itemList.concat({
        id: this.curId++,
        title: newItem.title,
        description: newItem.description,
        author: newItem.author,
        enabled: newItem.enabled
      })
    })
  }

  onTodoItemRemove = (todoItemId) => {
    this.setState({
      itemList: this.state.itemList.filter(todoItem => {
        return todoItemId !== todoItem.id;
      })
    })
  }

  onTodoItemUpdate = (id, data) => {
    this.setState({
      itemList: this.state.itemList.map(todoItem => {
        if(id === todoItem.id) {
          return {
            id: id,
            title: data.title,
            description: data.description,
            author: data.author,
            enabled: data.enabled
          }
        }

        return todoItem;
      })
    })
  }

  onTodoItemEnableToggle = (todoItemId) => {
    this.setState({
      itemList: this.state.itemList.map(todoItem => {
        if(todoItemId === todoItem.id) {
          todoItem.enabled = !todoItem.enabled;
        }

        return todoItem;
      })
    })
  }

  render() {
    return (
      <div>
        <TodoInsertForm onCreateTodoItem={this.onTodoItemCreate}/>
        <hr/>
        <TodoTemplate viewer={(
          <TodoItemList 
            todoItemList={this.state.itemList} 
            onTodoItemRemove={this.onTodoItemRemove} 
            onTodoItemUpdate={this.onTodoItemUpdate}
            onTodoItemEnableToggle={this.onTodoItemEnableToggle}
          />)
        }/>
      </div>
        
    );
  }
}

export default App;
