import { Alert } from '@mui/material';
import React, { useState } from 'react'
import { connect } from 'react-redux';
import Regpolicy from '../Components/Regpolicy';
import { Link } from 'react-router-dom';


const Renew = ({logstate,login,logout})=>{
  const [veh,setVeh] = useState('');
  const [amnt,setAmnt] = useState('');

  const handleChange = (e, setter) => {
    setter(e.target.value);
  };

  const Renew=(e)=>
  {
    e.preventDefault();
    fetch(`http://localhost:8080/api/v1/demo/renew/${veh}/${amnt}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('GET request failed');
        }
      })
      .then((data) => {
        // Store the data received from the GET method in the userData state variable
        // setUserData(data);
        console.log(data)
        alert("Insurance Renewed Successfully...! Your Current Amount : "+data.amount)
      })
      .catch((error) => {
        console.error('Error:', error);
      });

    }
  return (
    <div >
        <div style={{scrollBehavior:'smooth',scrollbarWidth:'none', width:'100%',height:'100vh',display:'flex',flexDirection:'row',justifyContent:'center'}}>



<div style={{marginLeft:'2em',width:'45%',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>

   
    <h1 style={{textAlign:'center', color:'rgba(236,236,241,var(--tw-text-opacity));',fontSize:'2.5em',fontFamily:'cursive',marginTop:'3em'}}>
        Renew Your Insurance Today!
        </h1>
      

    <p style={{fontSize:'1.6em',color:'GrayText'}}>The purpose of insurance is to protect you from the consequences of risks you don't want to bear alone</p>

    <Link to='/' style={{textDecoration:'none',color:'black'}}> <div onClick={login} style={{cursor:'pointer',display:'flex',width:'14em',height:'2.4em',backgroundColor:'lightblue',borderRadius:'15px',justifyContent:'center',alignItems:'center'}}>
                <h4 style={{fontFamily:'cursive',cursor:'pointer'}}>Sign In to Renew</h4>
          </div></Link>
  
</div>




<div style={{width:'74%',marginTop:'2em',height:'100%',backgroundImage:'url("https://res.cloudinary.com/dxhmtgtpg/image/upload/v1689239027/car-driving-green-grass-surrounded-by-nature-generative-ai_188544-9380-removebg-preview_pfdujx.png")',backgroundRepeat:'no-repeat',backgroundSize:'cover',}}>


</div>

</div>
       
    {logstate &&(
      <div style={{height:'70vh'}}>
          {/* <h1 style={{textAlign:'center',color:'gray',fontFamily:'cursive'}}>Hai Yogeshwaran!</h1> */}
          <h1 style={{textAlign:'center',marginBottom:'3em',color:'gray',fontFamily:'cursive'}}>Hey {localStorage.getItem('vehnum')}...!  Your Insurance Cart</h1>
          
        
        
        <div style={{width:'70vw',justifyContent:'center',alignItems:'center',display:'flex',flexDirection:'column',marginLeft:'13em'}}>
      <form onSubmit={Renew}>
          <div style={{width:'100%',justifyContent:'space-between',alignItems:'center',display:'flex',flexDirection:'column',marginBottom:'2em'}}>
            
            {/* <input placeholder='Enter Your Insurance Id' style={{width:'25em',paddingLeft:'2em',borderRadius:6,fontSize:'0.85em',fontFamily:'cursive',height:'3em'}} /> */}
            <input value={veh} onChange={(e)=>{handleChange(e,setVeh)}} placeholder='Enter Your Vehicle Number' style={{width:'25em',paddingLeft:'2em',borderRadius:6,fontSize:'0.85em',fontFamily:'cursive',height:'3em'}}/>
            <input value={amnt} onChange={(e)=>{handleChange(e,setAmnt)}} placeholder='Enter Your Amount' style={{width:'25em',paddingLeft:'2em',borderRadius:6,fontSize:'0.85em',fontFamily:'cursive',height:'3em',marginTop:'2em'}}/>
            
          </div>

        <div style={{marginLeft:'3em',cursor:'pointer',marginBottom:'2em',width:'14em',height:'2.5em',backgroundColor:'lightblue',borderRadius:'15px',display:'flex',justifyContent:'center',alignItems:'center',marginTop:'5em'}}>
                <button type='submit' style={{fontFamily:'cursive',cursor:'pointer',textAlign:'center',color:'black'}}>Renew</button>
                </div>
        </form>
        </div>
    </div>
    )}
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


export default connect(mapStateToProps, mapDispatchToProps)(Renew);