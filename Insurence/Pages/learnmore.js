import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';



export default function Learnmore() {
    const letlist=['0.2em','1.3em'];
    const [lete,setlete] = useState(letlist[0]);
    const location =useLocation();
    
    const list = [
        "Protect Your Ride with Affordable Bike Insurance Quote",
        "Get the Best Insurance Coverage for Your Bike Today!",
        "Compare Bike  and Save on Premiums",
        "Insure Your Bike with Confidence",
        "Secure Your Two-Wheeler with Comprehensive ",
        "Find the Perfect Bike Insurance Policy at the Right Price",
        "Get Peace of Mind with Competitive Bike ",
        "Safeguard Your Bike with Customized ",
        "Don't Compromise on Protection",
        "Get Reliable Coverage for Your BikeQuote Today!"
    ];
    const [title, setTitle] = useState(list[0]);
      

  useEffect(() => {
    const interval = setInterval(() => {
      const rn = Math.floor(Math.random() * list.length);
      const rn1 = Math.floor(Math.random() * letlist.length);
      setTitle(list[rn]);
    }, 2000);


    return () => {
      clearInterval(interval);
    };
  }, []);


  return (
    <div>
    <div style={{ scrollBehavior: 'smooth', scrollbarWidth: 'none', width: '100%', height: '100vh', display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
      <div style={{ marginLeft: '2em', width: '45%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <h1 style={{ textAlign: 'center', color: 'rgba(236,236,241,var(--tw-text-opacity))', fontSize: '2.5em', fontFamily: 'cursive', marginTop: '3em' }}>
          {/* {title} */}{location.state.name}
        </h1>
        <p style={{ fontSize: '1.6em', color: 'gray' }}>
          The purpose of insurance is to protect you from the consequences of risks you don't want to bear alone
        </p>
        
        <Link style={{textDecoration:'none',color:'black'}} to='/explore'><div style={{ cursor: 'pointer', marginTop: '4em', marginLeft: '-3em', display: 'flex', width: '14em', height: '2.4em', backgroundColor: 'lightblue', borderRadius: '15px', justifyContent: 'center', alignItems: 'center' }}>
         <h4 style={{ fontFamily: 'cursive', cursor: 'pointer' }}>Back</h4>
        </div>
        </Link>


      </div>
      <div style={{ width: '60%', marginTop: '2em', height: '100%', backgroundImage: `url(${location.state.url})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>

      </div>
    </div>


    <div style={{width:'100vw',height:'90vh',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>

        <h1>Why Get Our Plan!</h1>
        <h3 style={{color:'gray',textAlign:'center',marginLeft:'3em',marginRight:'3em',fontSize:'1.2em',fontFamily:'cursive'}}>Bicycle insurance is a stand-alone insurance policy for people who own and ride bikes. 
It is specialized coverage to help protect you and your bike from instances of damage, 
theft, or liability. It may pay to replace or repair your bike if it is accidentally damaged or stolen. 
It may also cover your medical costs or legal fees if you injure someone else or damage their property while
 riding your bike. Bicycle insurance may offer higher coverage limits and more options than standard 
 homeowners or renters insurance policies, which typically have low limits on sporting goods equipment 
 like bikes. Some bicycle insurance policies may also include additional benefits like emergency roadside
 assistance or taxi fare reimbursement.</h3>
 <Link to="/register" style={{textDecoration:'none',color:'black'}}> <div style={{cursor:'pointer',marginTop:'4em',marginLeft:'-3em',display:'flex',width:'14em',height:'2.4em',backgroundColor:'lightblue',borderRadius:'15px',justifyContent:'center',alignItems:'center'}}>
                 <h4 style={{fontFamily:'cursive',cursor:'pointer'}}>Get Your Plan</h4>
                </div></Link>
 </div>


 
    </div>
  );
}
