import React from "react";
import Header from "./Header";
function LogOut(){
    const logout=()=>{
        localStorage.removeItem("signUp")
        window.location.reload()
    }
    
    
    return(
        
        <div>
            <Header/>
            <h1>Home Page </h1>
            <p>Welcome {localStorage.getItem('name')}</p>
            <button onClick={logout} className="logout">LogOut</button>
        </div>
    );
}
export default LogOut;