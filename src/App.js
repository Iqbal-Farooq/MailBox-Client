
import Login from "./Components/Auth/Login";
import Welcome from "./Components/MailComponents/Welcome";
import Singup from "./Components/Auth/Signup";
import Mailbox from "./Components/RecivedMails/Mailbox";
import { useSelector } from "react-redux";
import Inbox from "./Components/RecivedMails/Inbox";
import ReadMsg from "./Components/RecivedMails/Rec";
import SentBox from "./Components/RecivedMails/Sent";
import { inboxActions } from "./Components/Redux/Inbox";
import ComposeMail from "./Components/ComposeEmail/Compose";
import ReadSent from "./Components/RecivedMails/SentMAilsRead";



import { Route,Redirect,Routes, Link} from "react-router-dom";


function App() {
  const isAuth=useSelector(state=>state.auth.islogin);
  const Number=useSelector(state=>state.inbox.unRead);
  console.log("LOHIM",isAuth)
  return (<>  
  
  
  <Routes> 
  <Route path="/Signup" element={<Singup /> } />
  <Route path="/" element={<Login />} />
  <Route path="/Welcome" exact element={<Welcome />} />
  <Route path="/Mailbox" exact element={<Mailbox />}  />
  <Route path="Inbox" exact element={<Inbox />} />
   <Route path='/Inbox/:id' element={ <ReadMsg /> } /> 
   <Route path='/Sent' element={<SentBox />} />
   <Route path='Sent/:id' element={<ReadSent  />} />
   <Route path='/Compose' element={<ComposeMail />} />
  
 
  </Routes>
  

  </>);
}

export default App;
