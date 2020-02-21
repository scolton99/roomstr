import React from 'react';
import { Typography } from '@material-ui/core';
import sampleTodos from '../sampleTodos.json';
import ToDoItem from '../components/ToDoItem';

function ToDoList({ todos }) {
  return (
    <div class="cardContainer">
      <Typography variant="h2">To Do</Typography>
      {sampleTodos.map(x => (
        <ToDoItem {...x} />
      ))}
    </div>
  );
}

export default ToDoList.bind(null, { todos: sampleTodos });
