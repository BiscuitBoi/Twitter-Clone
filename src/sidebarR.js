import React from 'react';
import { Link } from "react-router-dom";
import './index.css';
import TextField from "@mui/material/TextField";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(() => ({
  root:{
},
  textField: {

    backgroundColor:"white",
    overflow: "hidden",


    width: "100%",
    fontWeight: 200,
  },
  input: {
    [`& fieldset`]: {
          borderRadius: 35,
    },


  },

}));

function SidebarR() {
  const classes = useStyles();
    return(
    <div className="right">
    <form className={classes.root}>
    <TextField
  placeholder="search"
  size="small"
  className={classes.textField}
  InputProps={{
    className: classes.input,borderRadius:25}}
  InputLabelProps={{ shrink: true }}
/>
</form>
    </div>
);

}
  export default SidebarR;
