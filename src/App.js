import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {createStore, combineReducers} from 'redux'
import {updateUserAction} from './actions/userActions'

function productsReducer(state = [], action) {
  return state
}

function userReducer(state = '', {type, payload}) {
  switch (type){
    case 'updateUser':
      return payload
  }
  return state
}

const allReducers = combineReducers({
  products: productsReducer,
  users: userReducer
})


const store = createStore(allReducers)
store.dispatch(updateUserAction)
console.log(store.getState())


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
