import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Navbar({isAuthenticated,dispatch}) {
    const navigate = useNavigate();

    const logoutHandler = ()=>{ //Logout Handler
        dispatch({type:'LOGOUT'});
        navigate('/',{replace:true})
    }

    const renderLogoutButton = ()=>{
        if(!isAuthenticated){
            return;
        }
        return <button className="btn me-3 btn-primary" onClick={()=>logoutHandler()} type="submit">Logout</button>;
    }

  return (
    <div>
      <nav className="navbar bg-light">
        <div className="container-fluid">
            <Link to="/" className="navbar-brand"><h1>Contact List</h1></Link>
            {renderLogoutButton()}
        </div>
        </nav>

    </div>
  )
}

export default Navbar
