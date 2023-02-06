
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import axios from 'axios';
import classes from './signup.module.css'
import { useDispatch } from 'react-redux';
import { AuthActions } from "../Redux/Authentication";



const Login=()=>{
  const navigate=useNavigate()
  const EmailRef=useRef();
  const PasswordRef=useRef();
  const dispatch=useDispatch();
  

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
        // localStorage.setItem('token',res.data.idToken);
        const token=res.data.idToken;
        const LoginEmail=res.data.email
      
        dispatch(AuthActions.login({token,LoginEmail}));
        navigate("/Welcome");

    

    }).catch(err=>{console.log(err.response.data.error.message)
    alert(err.response.data.error.message)  })

  }

    return (<>
         <div className={classes.wrapper1} >
           <div className={classes.wrapper}>
              <form onSubmit={LoginHandler} >
                <h2>Log in</h2>
                  <div className={classes.input}>

                 <input type="email" placeholder="email" ref={EmailRef}  required />
               </div>
                   <div className={classes.input}>
               
                         <input type="password" placeholder="Password"  ref={PasswordRef} required/>
                    </div>
                    
                          <div className={classes.forgot}>
                               <span>Forgot Password?</span>
                      </div>
                            <button  className={classes.button} type="submit" >Login</button>
                           <div className={classes.registration}>
                              <p> don't have an account ? <span className={classes.change} onClick={NavigateHandler}>signup</span></p>
             </div>
        </form>
    </div>
    </div>
    </>)
}
export default Login;