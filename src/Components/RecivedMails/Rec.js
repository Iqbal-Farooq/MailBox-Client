

import React, { Fragment } from 'react';

import { useParams } from 'react-router-dom';
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { inboxActions } from "../Redux/Inbox";
import classes  from './Rec.module.css';



const ReadMsg = () => {
    const {id}=useParams();
    const mails=useSelector(state=>state.inbox.emails)
    const Email=localStorage.getItem('email')
    const myEmail=Email.replace("@",'').replace('.','');


    const singleMail=mails.filter((item)=>item.id===id);
    const message=singleMail[0]
    console.log('message',message);
    

    
     useEffect(()=>{
      const fetchData=async ()=>{

        const response=await fetch(`https://mailbox-cff96-default-rtdb.firebaseio.com/${myEmail}Data/${id}.json`,{
          method:'PATCH',
          body:JSON.stringify({
            dot:false
          }),
          headers:{
            'Content-Type':'application/json'
          }
        })
        const data=await response;
        console.log('ruk   gh')
        console.log(data);
      }
      fetchData();
    },[])

  return (
    <Fragment>
    <div className={classes.wrapper1}> 
    <div className={classes.wrapper}> 
    
    <div className={classes.input}>   
   
     <div className={classes.span}><span>From : {message.from}  </span> 
     <span>Subject : {message.subject} </span> </div>
   
    <div className={classes.message}>Message : {message.body}</div>
    </div> </div></div>
   
    </Fragment>
  )
}

export default ReadMsg;