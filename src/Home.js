import React from 'react';
import './Home.css';
import videobook from './video2.mp4';
import Container from 'react-bootstrap/Container';


function Home() {
    return (


       
        <div>
        
            <div className='bg-videobox'>
                <video className='videoTag' autoPlay loop muted>
                    <source src={videobook} type='video/mp4' />
                </video>
                <h1 id="admin-login-page">LIBRARY MANAGEMENT SYSTEM</h1>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <p>Why are you waiting for? Click below button to login</p>
               
                <div>
                    <button id='btn' onClick={() => { window.location.href = "/Login" }}>
                        <a style={{ fontSize: '24px' }}>
                            sign-in
                        </a>
                    </button>
                   
                   <br></br>   
                   <br></br>   
                   <br></br>   
                <button  id='btn' onClick={() => { window.location.href = "/Login" }} >
                        <a style={{ fontSize: '24px' }}>
                            sign-up
                        </a>
                    </button>

          
                </div>
               
           </div>
            
            
        </div>

       
      
    );
}

export default Home;
