import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './stock.css';
import {BrowserRouter, Route, Switch, Link} from "react-router-dom";

import Home from "./home"
import AddContact from "./addContact"
import EditContact from "./editContactDetails"


class App extends Component {
  constructor(props){
    super(props)
    this.state={
      index:''
    }
  }

  getIndex=(i)=>{
    this.setState({index: i})
  }

  render() {
    return (
      <BrowserRouter>
            <div>
              <Switch>
                <Route path='/home' render={()=> <Home sendIndex={this.getIndex} />} />
                <Route path='/addContact' render={()=> <AddContact />} />
                <Route path='/editContactDetails' render={()=> <EditContact {...this.state.index} />} />
              </Switch>
            </div>
      </BrowserRouter>
    );
  }
}

export default App;
