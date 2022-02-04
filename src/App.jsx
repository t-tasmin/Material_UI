import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Navbar from './components/Navbar';

const useStyles =makeStyles((theme)=>({
  
}));

export default function App () {
  
  const classes = useStyles();

  return (
    <div>
       <Navbar/>
    </div>
  );

}

