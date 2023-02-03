import './signup.css'
import { useState,useRef} from 'react';
import { useNavigate } from 'react-router-dom';
const Singup=()=>{
    const[email,Setemail]=useState();
    const [password,Setpassword]=useState();
    const [confirm,SetConfirm]=useState();

  
    const[isValid,SetisValid]=useState(false)
    const navigate=useNavigate()

  const NavigateHandler=()=>{
    navigate('/')

  }

     const ValidatePassword=(password,confirmpassword)=>{
        
             return password.length>5 && password===confirmpassword}
      const EmailInput=(e)=>{
        Setemail(e.target.value)
        

      }
      const PasswordInput=(e)=>{
        Setpassword(e.target.value);
         SetisValid(ValidatePassword(e.target.value,confirm));

      }
     const  ConfirmHandler=(e)=>{
        SetConfirm(e.target.value);
        SetisValid (ValidatePassword(password,e.target.value));
     }

    const register=(e)=>{
        e.preventDefault();
        
        console.log(email);
        console.log(password);
        console.log(confirm);

        fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD2ouHqH34fa8_GEGapuZgCmyaNA1g_dw8',{
            method:"POST",
            body:JSON.stringify({
                email:email,
                password:password,
                returnSecureToken:true,
            }),
           
        }).then(res=>{
            if(res.ok){
                console.log("successfully registered")
                
                Setemail('');
                SetConfirm('');
                Setpassword('');
                alert("Registered Successfully")
                return res.json();
            }else{
                return res.json().then((data)=>{console.log(data)
                alert(data.error.message)}).catch(err=>console.log(err))
            }
        }).then(data=>console.log(data))
    }


    return(<>
       
        <div className='wrapper1' >
           <div className="wrapper">
              <form onSubmit={register} >
                <h2>Sign-Up</h2>
                  <div className="input-box">

                 <input type="email" placeholder="email" value={email} onChange={EmailInput} required />
               </div>
                   <div className="input-box">
               
                         <input type="password" placeholder="Password" value={password} onChange={PasswordInput} />
                    </div>
                     <div className="input-box">
               
                         <input type="password" placeholder="Confirm-Password" value={confirm} onChange={ConfirmHandler}  />
                    </div>
                        
                            <button type="submit" disabled={!isValid} >Signup</button>
                           <div className="registration-link">
                              <p> have an account? <span onClick={NavigateHandler}>Login</span></p>
             </div>
        </form>
    </div>
    </div>
    </>)
 }
 export default Singup;