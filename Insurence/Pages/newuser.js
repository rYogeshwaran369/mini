import React, { useState } from 'react'
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Newuser({ logstate, login, logout }) {
    const [name,setName]=useState('');
    const [vehicleNumber,setEmail]=useState('');
    const [password,setPassword]=useState('');

    const handleChange = (e, setter) => {
        setter(e.target.value);
      };

    const handleSubmit = async (e) => {
        e.preventDefault();
      
        const data = {
          name: name,
          vehicleNumber: vehicleNumber,
          password: password
        };

    
        let us_name = localStorage.setItem('name',name)
      
        await axios.post('http://localhost:8080/api/v1/auth/register', data, {
          headers: {
            // "Authorization": `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
        })
        .then((response) => {
          console.log('Success:', response.data);
          navigate('/')
        //  localStorage.setItem('token', response.data.token);
        })
        .catch((error) => {
          console.error('Error:', error);
          
        });
      };

    const navigate = useNavigate();
// localStorage.setItem('token', response.data.token);
     const handlelog = () => {
    if(!logstate) {
      login();
      alert("Login Successful")
      navigate('/')
    }
  };
  return (
    <div>

        <div style={{justifyContent:'center',alignItems:'center',display:'flex',width:'100vw',height:'100vh',flexDirection:'column'}}>
                <h1 style={{fontFamily:'cursive',color:'gray'}}>Register...!</h1>


                <div style={{display:'flex',flexDirection:'column',marginTop:'4em'}}>
                    <form onSubmit={handleSubmit} style={{display:'flex',flexDirection:'column'}}>
                <input value={name} onChange={(e) => handleChange(e, setName)} required placeholder='Enter Your User Name' style={{width:'25em',paddingLeft:'2em',borderRadius:6,fontSize:'0.85em',fontFamily:'cursive',height:'3em'}} />
              
                <input value={vehicleNumber} onChange={(e) => handleChange(e, setEmail)} required placeholder='Enter Your vehicleNumber Id' style={{width:'25em',marginTop:'2em',paddingLeft:'2em',borderRadius:6,fontSize:'0.85em',fontFamily:'cursive',height:'3em'}} />
                <input value={password} onChange={(e) => handleChange(e, setPassword)} required placeholder='Enter Your pass Id' style={{width:'25em',marginTop:'2em',paddingLeft:'2em',borderRadius:6,fontSize:'0.85em',fontFamily:'cursive',height:'3em'}} />

                <div style={{cursor:'pointer',marginLeft:'7em',backgroundColor:'lightblue',width:'15em',marginTop:'3em',borderRadius:6,fontSize:'0.85em',fontFamily:'cursive',height:'3em',border:'1px solid gray',justifyContent:'center',alignItems:'center',display:'flex'}}>
                    <button style={{backgroundColor:'transparent',border:'none'}} type='submit'>Register</button>
                </div>
                </form>
                <h4 style={{marginLeft:'3em'}} onClick={()=>{navigate('/')}}>Already have an account? Login</h4>
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
  export default connect(mapStateToProps, mapDispatchToProps)(Newuser);