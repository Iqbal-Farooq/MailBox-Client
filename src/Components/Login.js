
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import axios from 'axios'
import Welcome from "./MailComponents/Welcome";

const Login=()=>{
  const navigate=useNavigate()
  const EmailRef=useRef();
  const PasswordRef=useRef();

  const NavigateHandler=()=>{
    navigate('./Signup')

  }
  const LoginHandler=(event)=>{
    event.preventDefault();
    console.log(EmailRef.current.value);
    console.log(PasswordRef.current.value);
    axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD2ouHqH34fa8_GEGapuZgCmyaNA1g_dw8',{
      email:EmailRef.current.value,
      password:PasswordRef.current.value,
      returnSecureToken:true,

    }).then(res=>{
      
        alert("Logged in successfully")
        console.log(res.data.idToken)
        localStorage.setItem('token',res.data.idToken);
        navigate("/Welcome")

    

    }).catch(err=>{console.log(err.response.data.error.message)
    alert(err.response.data.error.message)  })

  }

    return (<>
         <div className='wrapper1' >
           <div className="wrapper">
              <form onSubmit={LoginHandler} >
                <h2>Log in</h2>
                  <div className="input-box">

                 <input type="email" placeholder="email" ref={EmailRef}  required />
               </div>
                   <div className="input-box">
               
                         <input type="password" placeholder="Password"  ref={PasswordRef} required/>
                    </div>
                    
                          <div className="forgot-password">
                               <span>Forgot Password?</span>
                      </div>
                            <button type="submit" >Login</button>
                           <div className="registration-link">
                              <p> don't have an account? <span onClick={NavigateHandler}>signup</span></p>
             </div>
        </form>
    </div>
    </div>
    </>)
}
export default Login;