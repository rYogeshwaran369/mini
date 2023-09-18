import React, { Component } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function InsurenceCard(props) {
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

  if(props.id === '4')
  {
    navigate('/learnmore',{state:{name:props.name,url:'https://res.cloudinary.com/dxhmtgtpg/image/upload/v1690174855/image-removebg-preview_7_doeg80.png'}})
  }

  if(props.id === '5')
  {
    navigate('/learnmore',{state:{name:props.name,url:'https://img.freepik.com/free-photo/agriculture-heavy-machinery-harvests-yellow-meadow-generated-by-ai_188544-14018.jpg?t=st=1689187982~exp=1689191582~hmac=ec64d60411401ffc898f06d51561f224b1098499d8fdee0749f00080265eaf4d&w=1060'}})
  }

  if(props.id === '6')
  {
    navigate('/learnmore',{state:{name:props.name,url:'https://img.freepik.com/free-photo/painting-three-boys-front-moon_1340-38526.jpg?t=st=1689189004~exp=1689192604~hmac=5fd6e9b178e588e11ada64a43a00a70b9a0bc1565b27c39e2a6d3e6b5db69051&w=826'}})
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
           <h4 onClick={handlenav} style={{fontFamily:'cursive',textAlign:'center'}}>Learn More</h4>

        </div>
       
    </div>
    )
  }


