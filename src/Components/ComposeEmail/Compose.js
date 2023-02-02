import { useRef } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import axios from "axios";
import classes from './Compose.module.css';

const ComposeMail = () => {
  const Toref = useRef();
  const SubjectRef = useRef();
  let bodyText;

  const EditorStateChangeHandler = (event) => {
    bodyText = event.getCurrentContent().getPlainText();
  };

  const SendHandler = async (event) => {
    event.preventDefault();
    const enteredToref = Toref.current.value;
    const enteredSubjectref = SubjectRef.current.value;

    const mailData = {
      to: enteredToref,
      subject: enteredSubjectref,
      body: bodyText,
    };
     try {
      const response = await axios.post(
        `https://mailbox-cff96-default-rtdb.firebaseio.com//Data.json`,mailData);
        let data=await response

         console.log(data);
    } catch (err) {
      console.log(err);
    }
    console.log(mailData);
  }

  return (
   

     <div className={classes.wrapper1} >
           <div className={classes.wrapper}>
              <form >

                <label className={classes.to}>To</label>
                  <div className={classes.input}>

                 <input type="email" placeholder="abc@gmail.com"  ref={Toref} required />
               </div>
                <label className={classes.to}>Subject</label>
                   <div className={classes.input}>
                   
               
                         <input type="text" placeholder="any" ref={SubjectRef} />
                    </div>
                    <label className={classes.to}>Message</label>
                    <div className={classes.registration}>  <Editor onEditorStateChange={EditorStateChangeHandler} /></div>
                   
                        
                            <button  className={classes.button} type="submit" onClick={SendHandler} >Send</button>
                           
        </form>
    </div>
    </div>
  );
};

export default ComposeMail;