import "./App.css";
import {Route,BrowserRouter as Router,Routes,Navigate} from 'react-router-dom'
import { useEffect, useReducer } from "react";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import ContactList from "./components/ContactList";

const reducer = (state,action)=>{
  switch (action.type) {
    case "LOGIN":{
      return {...state,isAuthenticated:true}
      }
    case "LOGOUT":{
      state = {...state,isAuthenticated:false}
      return state;
    }
    case "SET_DATA":{
      state = {...state,data:action.payload.contacts};
      return state;
    }
    case "LOAD_MORE":{
      //Loading only 6 contacts at a time
      const newdata = state.data.slice(0,state.currentData.length+6);
      state = {...state,currentData:newdata}
      return state;
    }
    default:
      break;
  }
}



const App = () => {
  const [state,dispatch] = useReducer(reducer,{  //React hook
    isAuthenticated:false,
    users:[{username:"foo",password:"bar"}], 
    currentData:[],
    data:[]
  })


  const getData = async ()=>{
    const url = 'https://randomuser.me/api/?results=500'
    try {
      
      const response = await fetch(url)
      if (!response.ok) {
        const message = `An error has occured: ${response.status} - ${response.statusText}`;
        throw new Error(message);
      }
      const data = await response.json();
      const contacts =data.results

      dispatch({type:"SET_DATA",payload:{contacts}}) //Loading Complete Response data in state
      dispatch({type:"LOAD_MORE"}) //Loading only specified no of contacts to display
    } catch (error) {
      console.log(error)  
    }
  }

  useEffect(()=>{
    getData();
  },[])

  return (
    
    <Router>
      
        <Navbar isAuthenticated ={state.isAuthenticated} dispatch = {dispatch}/>
      <Routes>
        <Route exact path="/" element={state.isAuthenticated ? <Navigate to='/home' />:<Navigate to='/login'/> }/>
        <Route exact path="/login" element={state.isAuthenticated ? <Navigate to='/'/>  : <Login dispatch = {dispatch} users = {state.users} />} />
        <Route exact path="/home" element={state.isAuthenticated ? <ContactList contacts={state.currentData} dispatch={dispatch} /> : <Navigate to='/login'/> }/>
      </Routes>
    </Router>
    
    
  );
};
export default App;
