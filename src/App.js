import React, { Component } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoItemList from './components/TodoItemList';
import TodoInsertForm from './components/TodoInsertForm';
// import './App.css';

class App extends Component {

  state = {
    itemList: [{
      title: 'first todo title',
      description: 'first todo description',
      author: 'hwangro lee'
    }]
  }

  onTodoItemCreate = (newItem) => {
    this.setState({
      itemList: this.state.itemList.concat(newItem)
    })
  }

  render() {
    return (
      <div>
        <TodoInsertForm onCreateTodoItem={this.onTodoItemCreate}/>
        <hr/>
        <TodoTemplate viewer={(<TodoItemList todoItemList={this.state.itemList}/>)}/>
      </div>
        
    );
  }
}

export default App;
