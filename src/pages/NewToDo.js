import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, Typography, IconButton } from '@material-ui/core';
import { ExpandMore as ExpandMoreIcon, ExpandLess as ExpandLessIcon, Person as PersonIcon, QueryBuilder as ClockIcon } from '@material-ui/icons';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


function ToDoList() {

  return (
    <div class="cardContainer">
      <Typography variant="h2">Assign chore</Typography>
      <Card>
        <CardContent>
          <div>
            <Typography class="question">What:</Typography>
            <TextField class="taskDetail"id="task" label="task description..." variant="outlined" />
          </div>
          <div>
            <Typography class="question">Who:</Typography>
            <TextField class="taskDetail" id="person" label="roommate responsible" variant="outlined" />
          </div>
          <div>
            <Typography class="question">When:</Typography>
            <TextField class="taskDetail" id="due" label="complete by date..." variant="outlined" />
          </div>
          <div>
            <Typography class="question"><Button variant="contained">Assign</Button></Typography>
          </div>
        </CardContent>
      </Card>
    </div>

  );
}

export default ToDoList;
