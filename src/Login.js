import React, { useEffect, useRef, useState } from "react";
import Main from "./Custom";
import './login.css';



function SignInSignupWithLocalStorage() {

    const deleteAccount=()=>{ 
        localStorage.clear()
        window.location.reload()
    }
    const name = useRef();
    const email = useRef();
    const password = useRef();
    const [showHome, setShowHome] = useState(false);
    const [show, setShow] = useState(false);
    const localSignUp = localStorage.getItem("signUp");
    const localEmail = localStorage.getItem("email");
    const localPassword = localStorage.getItem("password");
    const localName = localStorage.getItem("name");


    useEffect(() => {
        if (localSignUp) {
            setShowHome(true);
        }
        if (localEmail) {
            setShow(true);
        }
    });

    const handleClick = () => {
        if (name.current.value && email.current.value && password.current.value) {
            localStorage.setItem("name", name.current.value);
            localStorage.setItem("email", email.current.value);
            localStorage.setItem("password", password.current.value);
            localStorage.setItem("signUp", email.current.value);
            alert("Account created successfully!");
            window.location.reload();
        }
        else {
            alert("Please fill in all the required fields.");
        }
    };


    const handleSignIn = () => {
        if (email.current.value === localEmail && password.current.value === localPassword) {
            localStorage.setItem("signUp", email.current.value);
            window.location.reload();
        } else {
            alert("Please enter valid credentials");
        }
    };

    const navigateToHome = () => {
        window.location.href = "./Home"; // Replace "/home" with the actual URL of your home page
      };

    return (
        <div>
        {showHome?<Main/>:
        (show?
            <>
            
            <form id="formbox">
            
            <center> 
            <h1 style={{color: 'blue'}}>Hello {localName}</h1>

            <div>
            <h1>please fill below details to login</h1>
                 <label>Type your email</label>   <br></br>
                 <input placeholder="Email" type='text' ref={email} 
    style={{border: '1px solid #ccc', borderRadius: '4px', padding: '8px', margin: '8px 0'}}
    pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
    title="Please enter a valid email address (ie:abc@gmail.com)"/>
            </div>
            <div>

              <label>Type your password</label>   <br></br>

              <input placeholder="Password" type='password' ref={password} style={{border: '1px solid #ccc', borderRadius: '4px', padding: '8px', margin: '8px 0'}} />

            
            </div>
            <button onClick={deleteAccount} id="deletebtn" style={{ cursor: 'pointer'}}>One click to delete account</button>
  
  <button onClick={handleSignIn} id="loginbtn" style={{ cursor: 'pointer'}}>Sign In</button>

  </center>
  </form>

  <center>
    <button id="homebtn" onClick={navigateToHome} style={{ cursor: 'pointer'}}>Click to Home</button>
  </center>
  

        </>
            :
            <>
            <form id="formbox">
            <center>
            <h2>Sign-up Page</h2> 
            <br></br>              
            <br></br> 
            <br></br>     
            <div>
                <label>Type your Name</label><br></br>
                <input placeholder="Name" type='text' ref={name} style={{border: '1px solid #ccc', borderRadius: '4px', padding: '8px', margin: '8px 0'}} />
            </div>
            <div>
            <label>Type your email</label>   <br></br>
                <input placeholder="Email" type='text' ref={email} 
    style={{border: '1px solid #ccc', borderRadius: '4px', padding: '8px', margin: '8px 0'}}
    pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
    title="Please enter a valid email address (ie:abc@gmail.com)"/>

            </div><br></br>
            <div >
            <label>Type your password</label>   <br></br>
                <input placeholder="Password" type='password' ref={password} style={{border: '1px solid #ccc', borderRadius: '4px', padding: '8px', margin: '8px 0'}} />
            </div>
            <button id="loginbtn" onClick={handleClick} style={{ cursor: 'pointer'}}>Sign Up</button>
          
          


            </center>
            </form>
            <button id="deletebtn"  onClick={navigateToHome} style={{ cursor: 'pointer'}}>Click to Home</button>

        </>
        )
        }
    </div>
);
}
export default SignInSignupWithLocalStorage;