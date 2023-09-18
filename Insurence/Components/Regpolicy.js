import React, { Component } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Regpolicy(props) {
  const navigate = useNavigate();

 const handlenav=()=>
 {
  if(props.id === '1')
  {
    navigate('/learnmore',{state:{name:props.name,url:'https://res.cloudinary.com/dxhmtgtpg/image/upload/v1689221747/red-motorcycle-with-number-17-it_1340-23185-removebg-preview_mnhdpg.png'}})
  }
  if(props.id === '2')
  {
    navigate('/learnmore',{state:{name:props.name,url:'https://res.cloudinary.com/dxhmtgtpg/image/upload/v1689231804/white-2020-ford-sierra-pickup-truck-with-white-rear-bumper-red-led-light_1340-32453-removebg-preview_aitobl.png'}})
  }
  if(props.id === '3')
  {
    navigate('/learnmore',{state:{name:props.name,url:'https://res.cloudinary.com/dxhmtgtpg/image/upload/v1689232809/city-life-rush-hour-modern-transportation-buildings-generative-ai_188544-9415-removebg-preview_sq3hd4.png'}})
  }
 }

   const url=props.img

    return (
        <div style={{width:'30%',height:'25em',borderColor:'red',borderRadius:'10px'}}>

        <div style={{width:'100%',height:'56%',borderTopRightRadius:'10px',borderTopLeftRadius:'10px',backgroundImage:`url(${url})`,backgroundSize:'cover',display:'flex'}}>
        </div>
        <div>
            <h3 style={{fontFamily:'cursive',textAlign:'center',color:'#494F55'}}>{props.name}</h3>
            <div style={{textAlign:'center',justifyContent:'center'}}>
            <span style={{paddingLeft:'1em',color:'gray'}}>Four wheels move the body, but two wheels move the soul. Protect that soul with bike insurance</span>
            </div>
           <h4 onClick={handlenav} style={{fontFamily:'cursive',textAlign:'center'}}>Renew</h4>

        </div>
       
    </div>
    )
  }


