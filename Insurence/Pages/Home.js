import React, { useEffect } from 'react'
import { useState } from 'react'
import { connect } from 'react-redux';

const Home=({logstate,login,logout})=> {

  const [more,setMore] = useState(false);
  const [learn,setLearn] = useState('Learn More');
  const [n,setn] = useState(1);
  const [title,setTitle] =useState('')
  const handlelearnmore=()=>{
    setn(n+1)
    if(n===1)
    {
      setLearn('Less');
      setMore(true);
    }
    if(n===2)
    {
      setLearn('Learn More');
      setMore(false); 
      setn(n-n)
    }
    console.log(n);
  }

  const Get=()=>{
    // e.preventDefault();
    fetch(`http://localhost:8080/api/v1/demo/get/${localStorage.getItem('name')}`, {
      method: 'GET',
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
        setTitle(data.name)
        // alert("Insurance Claimed Successfully...! Your Current Amount : "+data.amount)
      })
      .catch((error) => {
        console.error('Error:', error);
      });

  }
  useEffect(()=>{
    
   
    Get();

  },[])

  return (
    <div>
    <div style={{scrollBehavior:'smooth',scrollbarWidth:'none', width:'100%',height:'100vh',display:'flex',flexDirection:'row',justifyContent:'center'}}>



        <div style={{marginLeft:'2em',width:'45%',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>

           
            <h1 style={{textAlign:'center', color:'rgba(236,236,241,var(--tw-text-opacity));',fontSize:'2.5em',fontFamily:'cursive',marginTop:'3em'}}>
            {logstate?`${localStorage.getItem('name')}`:"Automobile Insurance Portal"}
                </h1>
              

            <p style={{fontSize:'1.6em',color:'GrayText'}}>The purpose of insurance is to protect you from the consequences of risks you don't want to bear alone</p>


            <div onClick={handlelearnmore} style={{cursor:'pointer',marginTop:'4em',marginLeft:'-3em',display:'flex',width:'14em',height:'2.4em',backgroundColor:'lightblue',borderRadius:'15px',justifyContent:'center',alignItems:'center'}}>
                <h4 style={{fontFamily:'cursive',cursor:'pointer'}}>{learn}</h4>
                </div>
        </div>

        <div style={{width:'64%',marginTop:'2em',height:'100%',backgroundImage:'url("https://res.cloudinary.com/dxhmtgtpg/image/upload/v1689137718/poster-car-with-umbrella-it_901003-28673-removebg-preview_au4nsx.png")',backgroundRepeat:'no-repeat',backgroundSize:'cover',}}>


        </div>

    </div>




    {more &&(

      <div className='more' style={{width:'100%',height:'90vh',backgroundColor:'black',display:'flex',flexDirection:'row',justifyContent:'start'}}>


<div style={{width:'63%',height:'100%',backgroundImage:'url("https://res.cloudinary.com/dxhmtgtpg/image/upload/v1689175389/red-car-is-round-stack-coins-gold-coin_635490-207-removebg-preview_rqtoyw.png")',backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>


</div>

<div style={{width:'45%',display:'flex',justifyContent:'start',alignItems:'center',marginRight:'2em',flexDirection:'column'}}>

           
<h1 style={{textAlign:'center', color:'white',fontSize:'2.5em',fontFamily:'cursive',marginTop:'3.5em'}}>
Your Trusted Insurance Partner
    </h1>
  

<p style={{fontSize:'1.6em',color:'GrayText'}}>
Secure your future with Your Trusted Insurance Partner - comprehensive coverage for peace of mind.</p>

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


export default connect(mapStateToProps, mapDispatchToProps)(Home);