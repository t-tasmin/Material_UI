import {useState} from 'react';
import { Avatar, Badge, alpha, AppBar, Toolbar, Typography, InputBase } from "@material-ui/core";
import { Cancel, Search, Mail, Notifications } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import theme from '../theme';



const useStyles =makeStyles((theme) => (
 {
    toolbar:{
      display:"flex",
      justifyContent:"space-between"
    },
    logoLg: {
      display: "none",
      [theme.breakpoints.up("sm")]: {
        display: "block",
      },
    },
    logoSm: {
      display: "block",
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
    search: {
      display: "flex",
      alignItems: "center",
      backgroundColor: alpha(theme.palette.common.white, 0.15),
      '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25), 
      },
      borderRadius: theme.shape.borderRadius,
      width: "50%",
      [theme.breakpoints.down("sm")]:{
        display: (props)=> (props.open? "flex" : "none"),
      }
    },
    searchButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up("sm")]:{
        display: "none",
      }
    },
    cancel: {
      [theme.breakpoints.up("sm")]: {
        display: "none",
      }
    },  
    input: {
      color:"white",
      marginLeft: theme.spacing(1)
    },
    icons: {
      display: "flex",
      alignItems: "center",
      [theme.breakpoints.down("sm")]:{
        display: (props)=> (props.open? "none": "flex"),
      }
    },
    badge: {
      marginRight: theme.spacing(2)
    }
 }
));

export default function Navbar (){

  const [open, setOpen] = useState(false);
  const classes = useStyles({open});

  return (
    <AppBar>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" className={classes.logoLg}>
           Lama Dev
        </Typography>
        <Typography variant="h6" className={classes.logoSm}>
           LAMA
        </Typography>
        <div className={classes.search}>
          <Search/>
          <InputBase placeholder="Search..." className={classes.input}/>
          <Cancel className={classes.cancel} onClick={()=>setOpen(false)}/>
        </div>
        <div className = {classes.icons}>
          <Search className={classes.searchButton} onClick={()=>setOpen(true)}/>
          <Badge badgeContent={4} color="secondary">
            <Mail/>
          </Badge>
          <Badge badgeContent={2} color="secondary">
            <Notifications/>
          </Badge>
          <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/8647814/pexels-photo-8647814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
        </div>
      </Toolbar>

    </AppBar>
  );

}