import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { createStore, combineReducers } from 'redux'
import { updateUserAction, typedName } from './actions/userActions'
import {Provider} from 'react-redux'
import { connect } from "react-redux";


const TextAndInput = ({ textChangeHandler }) => (
  <div>
    <p>Opa</p>
    <input type='text' onKeyUp={(val) => textChangeHandler(val.target.value)} />
  </div>
)

class App extends Component {
  render() {

    function typeNewName(val) {
      store.dispatch(typedName(val))
      console.log(store.getState())
    }
    function productsReducer(state = [], action) {
      return state
    }

    function userReducer(state = '', { type, payload }) {
      switch (type) {
        case 'updateUser':
          return payload
          break
        case 'typedName':
          return payload
      }
      return state
    }


    const allReducers = combineReducers({
      products: productsReducer,
      users: userReducer
    })


    const store = createStore(allReducers)
    
    return (
      <Provider store{...store} >
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to davai</h1>
          </header>
          <TextAndInput textChangeHandler={typeNewName.bind(this)} />
        </div>
      </Provider>
    );
  }
}

export default App;
