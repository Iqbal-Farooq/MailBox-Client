

import axios from "axios";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { inboxActions } from "../Redux/Inbox";


const ReceiveEmails = () => {
  const emails = useSelector((state) => state.inbox.emails);
  console.log(emails);

  const dispatch = useDispatch();
  const loggedInEmail = useSelector((state) => state.auth.loggedInEmail);
  const FormatedEmail=loggedInEmail.replace('@', '').replace('.','')
   
     async function GetData(){
         try {
        let res =await axios.get(`https://mailbox-cff96-default-rtdb.firebaseio.com/${FormatedEmail}Data.json`);
        let data=await res;
        console.log(':@@@@')
        console.log(data.data)
        dispatch(inboxActions.EmailFetch(data.data));
    
     } catch (err) {
        console.log(err);
      }

    };


  useEffect(() => {
   
    GetData();
  }, [dispatch,FormatedEmail]);

  return (
    <>
      <div>Receive emails</div>
      <div>
        <ul>
          {emails!==null && Object.keys(emails).map((email) => {
            return (
              <li>
                <span style={{ marginRight: "1em" }}>
                  From: {emails[email].from}
                </span>
                <span style={{ marginRight: "1em" }}>
                  Subject: {emails[email].subject}
                </span>
                <span>Body: {emails[email].body}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default ReceiveEmails;