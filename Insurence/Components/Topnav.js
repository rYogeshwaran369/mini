import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom';


function Topnav({ logstate, login, logout }) {
  
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState('Login');

const handlelog = () => {
  if (!logstate) 
  {
      navigate('/');
  } 
  else 
  {
    localStorage.clear();
      logout();
      setLoginData('Logout')
    }
  };


  return (
    
    <div style={{ position: 'fixed', backgroundColor: 'white', width: '100vw' }}>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingLeft: '2em', paddingRight: '2em' }}>
        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center',width:'30%',fontSize:'1.3em'}}>
         
          <img src='https://cdn-icons-png.flaticon.com/512/4412/4412561.png' style={{ width: '4em', marginTop: '1em', height: '4em' }}/>
        <div style={{justifyContent:'center',textAlign:'center',display:'flex'}}>
            <Link style={{ textDecoration: 'none' }} to='/'><h3 style={{ fontFamily: 'cursive', fontWeight: 'lighter', color: 'black' }}></h3></Link>
            </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '50%', marginTop: '1em' }}>
          {/* Navigation links */}
          <div>
         
            <Link style={{ textDecoration: 'none' }} to='/home'><h3 style={{ fontFamily: 'cursive', fontWeight: 'lighter', color: 'GrayText' }}>Home</h3></Link>
          </div>
          <div>
            <Link style={{ textDecoration: 'none' }} to='/explore'><h3 style={{ fontFamily: 'cursive', fontWeight: 'lighter', color: 'GrayText' }}>Explore</h3></Link>
          </div>
          <div>
            <Link style={{ textDecoration: 'none' }} to='/renew'><h3 style={{ fontFamily: 'cursive', fontWeight: 'lighter', color: 'GrayText' }}>Renew</h3></Link>
          </div>
          <div>
            <Link style={{ textDecoration: 'none' }} to='/claim'><h3 style={{ fontFamily: 'cursive', fontWeight: 'lighter', color: 'GrayText' }}>Claim</h3></Link>
          </div>
          <div>
            <h3 onClick={handlelog} style={{ cursor:'pointer',fontFamily: 'cursive', fontWeight: 'lighter', color: 'GrayText' }}>{logstate?"Logout":"Login"}</h3>
          </div>


        </div>
      </div>
    </div>
  );
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
export default connect(mapStateToProps, mapDispatchToProps)(Topnav);
