
import { useNavigate } from "react-router-dom";
import ComposeMail from "../ComposeEmail/Compose";
import Welcome from "../MailComponents/Welcome";
import classes from './Mailbox.module.css'
const Mailbox=()=>{
    const navigate=useNavigate();
    const ComposeHandler=()=>{
        navigate('/Compose')

    }
    const InboxHandler=()=>{
         navigate('/Inbox')
    }
    const SentBoxHandler=()=>{
        navigate('/Sent')
    }

    return (
        <>
        <Welcome />
        <div className={classes.wrapper1}> 
        <div className={classes.wrapper}> 
         <button className={classes.btn}onClick={ComposeHandler}>Compose</button>
            <button className={classes.btn} onClick={InboxHandler}>Inbox</button>
            <button className={classes.btn} onClick={SentBoxHandler} >Sent</button>
       
        </div>
        </div>
            </>
    )
}
export default Mailbox;