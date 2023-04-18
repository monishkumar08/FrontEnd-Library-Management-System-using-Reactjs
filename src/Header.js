import React from 'react';


function Header() {

  const logout=()=>{
    localStorage.removeItem("signUp")
    window.location.reload()
}
const deleteAccount=()=>{ 
  localStorage.clear()
  window.location.reload()
}

  return (
    <div>
      <nav style={{background: 'black', padding: '10px'}}>
        <div style={{display: 'flex', justifyContent: 'flex-start'}}>
          <ul style={{listStyle: 'none', padding: '0', margin: '0', display: 'flex', alignItems: 'center'}}>
            <li style={{marginRight: '10px'}}>

              <a href="/Home" onClick={logout} style={{textDecoration:'none', color:'white', fontSize: '18px', fontWeight: 'bold', textTransform: 'uppercase'}}>
                <span className="display-6">Home</span>
              </a>
            </li>
         <li>
         

            <span style={{ margin: '0 10px', marginLeft: '10px'}}></span>
                
              <a href="/Home" onClick={logout} style={{textDecoration:'none', color:'white', fontSize: '18px', fontWeight: 'bold', textTransform: 'uppercase'}}>
                <span className="display-6">Logout</span></a>

              

                <span style={{ margin: '0 10px', marginLeft: '10px'}}></span>
                <button onClick={deleteAccount} className="logout" style={{ marginTop:'3px',background: 'transparent', border: 'none', cursor: 'pointer', color: 'white', fontWeight: 'bold', fontSize: '18px', textTransform: 'uppercase'}}>
                <span className="display-6">one click to delete account</span></button> 
            
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}


/* function Home(){
    const logout=()=>{
        localStorage.removeItem("signUp")
        window.location.reload()
    }
    const deleteAccount=()=>{ 
        localStorage.clear()
        window.location.reload()
    }
    
    return(
        <div>
            <h1>Home Page </h1>
            <p>Welcome {localStorage.getItem('name')}</p>
            <button onClick={logout} className="logout">LogOut</button>
            <button onClick={deleteAccount} className="delete">Delete</button>
        </div>
    );
} */


export default Header;
