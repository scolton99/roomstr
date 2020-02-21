import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, Typography, IconButton } from '@material-ui/core';
import { ExpandMore as ExpandMoreIcon, ExpandLess as ExpandLessIcon, Person as PersonIcon, QueryBuilder as ClockIcon } from '@material-ui/icons';

const styles = makeStyles({
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  expandedTypographyRow: {
    display: 'flex',
    alignItems: 'center'
  },
  self: {
    marginBottom: '10px'
  }
});

function ToDoItem({ name, dueDate, assignee }) {
  const [expanded, setExpanded] = useState(false);
  const classes = styles();

  const rdate = new Date(dueDate);
  const date_str = rdate.toLocaleString('en-US', { month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' })

  if (expanded) {
    return (
      <Card className={classes.self}>
        <CardContent>
          <div className={classes.cardContent}>
            <Typography variant="h5">{name}</Typography>
            <IconButton onClick={() => setExpanded(false)}>
              <ExpandLessIcon />
            </IconButton>
          </div>
          <Typography className={classes.expandedTypographyRow}>
            <PersonIcon />
            {assignee}
          </Typography>
          <Typography className={classes.expandedTypographyRow}>
            <ClockIcon />
            {date_str}
          </Typography>
        </CardContent>
      </Card>
    );
  } else {
    return (
      <Card className={classes.self}>
        <CardContent>
          <div className={classes.cardContent}>
            <Typography variant="h5">{name}</Typography>
            <IconButton onClick={() => setExpanded(true)}>
              <ExpandMoreIcon />
            </IconButton>
          </div>
        </CardContent>
      </Card>
    );
  }
}

export default ToDoItem;
