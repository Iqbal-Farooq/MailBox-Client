
import { useNavigate } from "react-router-dom";
const Mailbox=()=>{
    const navigate=useNavigate();
    const ComposeHandler=()=>{
        navigate('/Welcome')

    }
    const InboxHandler=()=>{
         navigate('/Inbox')
    }

    return (
        <>
            <button onClick={ComposeHandler}>Compose</button>
            <button onClick={InboxHandler}>Inbox</button>
            <button >Sent</button>
        </>
    )
}
export default Mailbox;