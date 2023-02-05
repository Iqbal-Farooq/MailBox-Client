
import classes from './inbox.module.css'
import axios from "axios";
import { useEffect,useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { inboxActions } from "../Redux/Inbox";
import Rec from "./Rec";
import Welcome from "../MailComponents/Welcome";


const ReceiveEmails = () => {
  const[md,setMd]=useState([]);
  const [singleEmail, setSingleEmail] = useState(false);
  const emails = useSelector((state) => state.inbox.emails);
  const unred=useSelector((state)=>state.inbox.unRead)
  console.log("00",emails);

  const dispatch = useDispatch();
  const loggedInEmail = localStorage.getItem('email')
  const FormatedEmail=loggedInEmail.replace('@', '').replace('.','')
   let noOfUnread=0;
  let data=[]
   
     async function GetData(){
         try {
        let res =await axios.get(`https://mailbox-cff96-default-rtdb.firebaseio.com/${FormatedEmail}Data.json`);
        let mailData=await res.data;
        console.log(':@@@@')
        console.log(mailData)
         for(let key in mailData){
          if(mailData[key].dot===true){
              noOfUnread++}
          console.log(key)
          console.log(mailData[key].from)
                data=[{id:key,...mailData[key]},...data]
            }
          dispatch(inboxActions.updateUnread(noOfUnread))   
        dispatch(inboxActions.EmailFetch(data));
        
    
     } catch (err) {
        console.log(err);
      }

    };


  useEffect(() => {
   
    GetData();
  }, [dispatch,loggedInEmail]);

   const onSingleEmailClickHandler = (email) => {
    setSingleEmail(email);
    // console.log(email)
  };

  return (
    <>
    <Welcome />
    <p>unread {unred}</p>
    <div className={classes.wrapper1}>
    <div className={classes.wrapper}> 
     
      <div className={classes.input}>
      <p className={classes.p}>Inbox</p>
        <ul>
          {emails!==null && emails.map((email) => {
            return (
             <Link to={`/Inbox/${email.id}`}> <li className={classes.input}>
              {email.dot && <div className={classes.dot}/>} 
                <span style={{ marginRight: "1em" }}>
                 {email.from}
                </span>
                <span style={{ marginRight: "1em" }}>
                  {email.subject}
                </span>
               
                <span>message</span>
               
              </li></Link>
            );
          })}
        </ul>
        </div>

      </div>
      </div>
    </>
  );
};

export default ReceiveEmails;