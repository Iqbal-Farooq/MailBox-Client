

import React, { Fragment } from 'react';

import { useParams } from 'react-router-dom';

import {  useSelector } from "react-redux";

import classes  from './Rec.module.css';


const ReadSent = () => {
    const {id}=useParams();
    console.log('parms',id)
    const mails=useSelector(state=>state.inbox.sentemails)
  
    const singleMail=mails.filter((item)=>item.id===id);
    console.log('single email',singleMail)
    const message=singleMail[0]
    console.log('message',message);
    
  return (
    <Fragment>
    <div className={classes.wrapper1}> 
    <div className={classes.wrapper}> 
    
    <div className={classes.input}>   
   
     <div className={classes.span}><span>To : {message.from} </span> 
     <span>Subject : {message.subject}  </span> </div>
   
    <div className={classes.message}>Message : {message.body} </div>
    </div> </div></div>
   
    </Fragment>
  )
}

export default  ReadSent;