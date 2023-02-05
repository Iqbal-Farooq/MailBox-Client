
import React from "react";
import { Link } from "react-router-dom";
import classes from'./wecome.module.css'
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import ComposeMail from "../ComposeEmail/Compose";
import { AuthActions } from "../Redux/Authentication";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Welcome=()=>{
    const dispatch=useDispatch();
    const navigate=useNavigate();


   const LogoutHandler=()=>{
    dispatch(AuthActions.logout());
    navigate('/')


   }


    return(
    <div className={classes.wrapper1}> 
    <nav className={classes.wrapper}> 
    <p >Welcome ...!</p>
    <p className={classes.link}><Link to='/Mailbox'> Mailbox</Link></p>
    <button className={classes.button} onClick={LogoutHandler}>  Logout</button></nav>
   
    </div>)
}
export default Welcome;