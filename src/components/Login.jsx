import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../App.css'

function Login({dispatch,users}) {
    let navigate = useNavigate(); //to redirect to different page


    const submitHandler = ()=>{
        
        //Taking form data from dom
        const username = document.getElementById('Username').value.trim();
        const password = document.getElementById('password').value.trim();

        for(let ele of users){
            if(ele.username === username && ele.password === password){ // Checks wheather user is authenticated
                dispatch({type:"LOGIN"});
                navigate("/home", { replace: true });
                return;
            }
        }
        alert('User not found!!!'); // Alerts if user is not found in the database
      
      
     

    }
  return (                      //LOGIN FORM
    <div className='login-card'>
        <h2 className='mb-4 text-center'>Login form</h2>
      <form>
        <div className="mb-3">
            <input type="text" className="form-control" id="Username" placeholder='Enter Username'/>
        </div>
        <div className="mb-4">
            <input type="password" className="form-control" id="password" placeholder='Enter Password'/>
        </div>
       
        <button type="button" onClick={()=>submitHandler()} className="btn btn-primary form-submit-btn">Submit</button>
        </form>
    </div>
  )
}

export default Login
