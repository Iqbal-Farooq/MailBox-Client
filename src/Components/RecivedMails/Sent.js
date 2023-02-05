import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Welcome from '../MailComponents/Welcome';
import classes from './sent.module.css'

import { inboxActions } from '../Redux/Inbox';
import axios from 'axios';


const SentBox = () => {
    const dispatch=useDispatch();
    const mailInInbox=useSelector(state=>state.inbox.sentemails);
    const myEmail=localStorage.getItem('email').replace('@','').replace('.','');

    let data=[];

    useEffect(()=>{
        const fetchDaata=async()=>{
           try{
     const response = await axios.get(`https://mailbox-cff96-default-rtdb.firebaseio.com/${myEmail}sentbox.json`);
        
         let mailData=await response.data;
        console.log(':sent box-')
        console.log(mailData)
         for(let key in mailData){
          console.log(key)
          console.log(mailData[key].from)
                data=[{id:key,...mailData[key]},...data]
            }
        dispatch(inboxActions.Sentemails(data));
    
     } catch (err) {
        console.log(err);
      }

        }
        fetchDaata();
    },[])
    console.log(data,'data');
  return (
    <div  >
    <Welcome />
       {
  <div className={classes.wrapper1}>
  <div className={classes.wrapper}>

  <div className={classes.input}>
    <p className={classes.p}>Sent-Box</p>
            {

                mailInInbox.map((item)=>(
                 <NavLink to={`/Sent/${item.id}`}>   <li className={classes.input} key={item.id}>
                    <span className={classes.span}>To :- {item.to}</span>
            <span className={classes.span} >{item.subject}</span>
            <span className={classes.span}>
                message
            </span>
            <span>{item.id}</span>
            </li></NavLink>
                ))

            }
            </div>
        </div></div>}
        
    </div>
  )
}

export default SentBox