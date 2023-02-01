import './signup.css'
import { useState,useRef} from 'react';
const Singup=()=>{
    const[login,SetLogin]=useState(false);

    const emailRef=useRef();
    const passwordRef=useRef();
    const ConfirmRef=useRef();

    const register=(e)=>{
        e.preventDefault();
        
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);
        console.log(ConfirmRef.current.value);

        fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD2ouHqH34fa8_GEGapuZgCmyaNA1g_dw8',{
            method:"POST",
            body:JSON.stringify({
                email:emailRef.current.value,
                password:passwordRef.current.value,
                returnSecureToken:true,
            }),
           
        }).then(res=>{
            if(res.ok){
                console.log("successfully registered")
                return res.json();
            }else{
                return res.json().then((data)=>console.log(data)).catch(err=>console.log(err))
            }
        })
    }




    return(<>
       
        <div className='wrapper1' >
           <div className="wrapper">
              <form onSubmit={register} >
                <h2>Sign-Up</h2>
                  <div className="input-box">

                 <input type="email" placeholder="email"  ref={emailRef} />
               </div>
                   <div className="input-box">
               
                         <input type="password" placeholder="Password" ref={passwordRef} />
                    </div>
                     <div className="input-box">
               
                         <input type="password" placeholder="Confirm-Password" ref={ConfirmRef} />
                    </div>
                          <div className="forgot-password">
                               <span>Forgot Password?</span>
                      </div>
                           <button type="submit">Signup</button>
                           <div className="registration-link">
                              <p> have an account? <span>Login</span></p>
             </div>
        </form>
    </div>
    </div>
    </>)
 }
 export default Singup;