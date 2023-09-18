import React from 'react'
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

function Logincmp({ logstate, login, logout }) {

    const navigate = useNavigate();
// localStorage.setItem('token', response.data.token);



const [vehicleNumber,setEmail]=useState('');
const [password,setPassword]=useState('');

const handleChange = (e, setter) => {
    setter(e.target.value);
  };

const handleSubmit = async (e) => {
    e.preventDefault();
  
    const data = {
      vehicleNumber: vehicleNumber,
      password: password
    };

    // let token = localStorage.getItem('token')
  
    await axios.post('http://localhost:8080/api/v1/auth/authenticate', data, {
      headers: {
        // "Authorization": `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
    })
    .then((response) => {
      console.log('Success:', response.data);
     localStorage.setItem('token', response.data.token);
    
        const Token={
          name:response.data.token
        }
    
     axios.post('http://localhost:8081/post',Token,{
      headers: {
        // "Authorization": `Bearer ${token}`,
        'Content-Type': 'application/json',
        "Authorization":`Bearer ${response.data.token}`
      },
     })
     .then((res)=>{
        console.log(res.data)
     })



     localStorage.setItem('name',vehicleNumber);
     alert("Login Successful")
    navigate('/')
   
   
     if(!logstate) {
       login();
     }
      navigate('/home')

    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };


     const handlelog = () => {
    if(!logstate) {
      login();
      alert("Login Successful")
      navigate('/home')
    }
  };
  return (
    <div>

        <div style={{justifyContent:'center',alignItems:'center',display:'flex',width:'100vw',height:'100vh',flexDirection:'column'}}>
                <h1 style={{fontFamily:'cursive',color:'gray'}}>Login to Your Insurance.!</h1>


                <div style={{display:'flex',flexDirection:'column',marginTop:'4em'}}>
                    <form onSubmit={handleSubmit} style={{display:'flex',flexDirection:'column'}}>
                <input value={vehicleNumber} onChange={(e) => handleChange(e, setEmail)} required placeholder='Enter Your User Name' style={{width:'25em',paddingLeft:'2em',borderRadius:6,fontSize:'0.85em',fontFamily:'cursive',height:'3em'}} />
              
                <input value={password} onChange={(e) => handleChange(e, setPassword)} required placeholder='Enter Your Insurance Id' style={{width:'25em',marginTop:'2em',paddingLeft:'2em',borderRadius:6,fontSize:'0.85em',fontFamily:'cursive',height:'3em'}} />

                <div style={{cursor:'pointer',marginLeft:'7em',backgroundColor:'lightblue',width:'15em',marginTop:'3em',borderRadius:6,fontSize:'0.85em',fontFamily:'cursive',height:'3em',border:'1px solid gray',justifyContent:'center',alignItems:'center',display:'flex'}}>
                    <button style={{backgroundColor:'transparent',border:'none'}} type='submit'>Login</button>
                </div>
                
                
                </form>
                <h4 style={{marginLeft:'3em'}} onClick={()=>{navigate('/new')}}>dont have an account? Register</h4>
                </div>
        </div>
       
    </div>
  )
}
const mapStateToProps = state => {
    return {
      logstate: state
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      login: () => dispatch({ type: 'Login' }),
      logout: () => dispatch({ type: 'Logout' })
    };
  };
  export default connect(mapStateToProps, mapDispatchToProps)(Logincmp);