
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
    const [reRender,setreRender]=useState(true);
   
  const [singleEmail, setSingleEmail] = useState(false);
  const emails = useSelector((state) => state.inbox.emails);
  const unred=useSelector((state)=>state.inbox.unRead)
  console.log("00",emails);

  const dispatch = useDispatch();
  const loggedInEmail = localStorage.getItem('email')
  const FormatedEmail=loggedInEmail.replace('@', '').replace('.','')
  console.log(" Emil" , FormatedEmail)
  
  

   let noOfUnread=0;
  let data=[]

   
     async function GetData(){
         try {
        let res =await axios.get(`https://mailbox-cff96-default-rtdb.firebaseio.com/${FormatedEmail}inbox.json`);
        let mailData=await res.data;
        // console.log(':@@@@')
        // console.log(mailData)
         for(let key in mailData){
          if(mailData[key].dot===true){
              noOfUnread++}
          // console.log(key)
          console.log(mailData[key].from)
                data=[{id:key,...mailData[key]},...data]
            }
          dispatch(inboxActions.updateUnread(noOfUnread))   
        dispatch(inboxActions.EmailFetch(data));
        
    
     } catch (err) {
        console.log(err);
      }

    };


useEffect(()=>{
   let interval= setInterval(()=>{
     setreRender((prev)=>!prev);
       console.log("CAKL")

    },5000);
    return ()=>{ clearInterval(interval);

    }

},[reRender]);

useEffect(()=>{
  GetData()
},[])
  

    // useEffect(()=>{
    //   GetData();
    // },[reRender])
   
      
    
   
  

   

  async function DeleteHandler(id){
    console.log(id);
    const res= await axios.delete(`https://mailbox-cff96-default-rtdb.firebaseio.com/${FormatedEmail}inbox/${id}.json`);
    let data=await res;
    console.log(data);
    
    console.log('deleted')
    GetData();

  }

  return (
    <>
    <Welcome />
   
    <div className={classes.wrapper1}>
    <div className={classes.wrapper}> 
     
      <div className={classes.input}>
      <div className={classes.container}> 
       <p className={classes.p}>Inbox</p>
      <p className={classes.pp}>unRead msgs: {unred}</p>
      <p className={classes.icon}>Ⓜ️</p>

     
      </div>
        <ul>
          {emails!==null && emails.map((email) => {
            return (
              <li className={classes.input}>
              {email.dot && <div className={classes.dot}/>} 
               <Link to={`/Inbox/${email.id}`}> <span style={{ marginRight: "1em" }}>
                 {email.from}
                </span>
                <span style={{ marginRight: "1em" }}>
                  {email.subject}
                </span>
               
                <span>message</span></Link>
                <button className={classes.button} onClick={()=>DeleteHandler(email.id)}>Delete</button>
                
              </li>
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