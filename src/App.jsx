import React from 'react';
import { Button } from '@material-ui/core';
import { Person, Delete, Send} from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';

const useStyles =makeStyles((theme)=>({
  button: {
    color:"yellow",
    backgroundColor: "purple",
  }
}));

export default function App () {
  
  const classes = useStyles();
  return (
    <div>
       <Button variant="contained" color="primary" size="large"  
         endIcon={<Send/>}  className={classes.button}>
         Material UI
       </Button>
    </div>
  );

}

