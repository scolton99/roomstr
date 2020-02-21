import React from 'react';
import ToDoList from './pages/ToDoList';
import NewToDo from './pages/NewToDo';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/add">
          <Header type="back" />
          <NewToDo />
        </Route>
        <Route path="/">
          <Header type="add" />
          <ToDoList />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
