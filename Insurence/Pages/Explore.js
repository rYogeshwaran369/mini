import React from 'react'
import InsurenceCard from '../Components/InsurenceCard'
import { Link } from 'react-router-dom'

export default function Explore() {
  return (
    <div style={{paddingTop:'7em',marginLeft:'2em',marginRight:'2em'}}>

    <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
       <InsurenceCard id='1' name="Bike Insurance" img="https://img.freepik.com/free-photo/red-motorcycle-with-number-17-it_1340-23185.jpg?t=st=1689146379~exp=1689149979~hmac=84ceb4304573870ad09c6b5865966a6d58d3f2155066bdabf2b12fa7c704b2a7&w=1380"/>
        <InsurenceCard id='2' name="Car Insurance" img="https://img.freepik.com/free-photo/white-2020-ford-sierra-pickup-truck-with-white-rear-bumper-red-led-light_1340-32453.jpg?t=st=1689164314~exp=1689167914~hmac=064a3c583299553d4e02b7c7ec09b1c9438318f1b1b9ef4651a4718b80889a40&w=1380"/>
        <InsurenceCard id='3' name="Bus Insurance" img="https://img.freepik.com/free-photo/city-life-rush-hour-modern-transportation-buildings-generative-ai_188544-9415.jpg?t=st=1689184981~exp=1689188581~hmac=1a665d76f21ce7bfc1358f38d7ed24459000fc3ab215f2746d4c4d2509db028b&w=1380"/>
    </div>

    <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',margin:'2em',marginTop:'7%'}}>
        <InsurenceCard id='4' name="Lorry Insurance" img="https://img.freepik.com/free-photo/truck-carrying-freight-through-foggy-mountain-landscape-generated-by-ai_188544-16893.jpg?t=st=1689185277~exp=1689188877~hmac=cf95a8b5044f65101d306dbe52228c17b425d5fb1f1743711a250a1daef53e55&w=1060"/>
        <InsurenceCard id='5' name="Tractor Insurance" img='https://img.freepik.com/free-photo/agriculture-heavy-machinery-harvests-yellow-meadow-generated-by-ai_188544-14018.jpg?t=st=1689187982~exp=1689191582~hmac=ec64d60411401ffc898f06d51561f224b1098499d8fdee0749f00080265eaf4d&w=1060'/>
        <InsurenceCard id='6' name="Other Insurance" img="https://img.freepik.com/free-photo/painting-three-boys-front-moon_1340-38526.jpg?t=st=1689189004~exp=1689192604~hmac=5fd6e9b178e588e11ada64a43a00a70b9a0bc1565b27c39e2a6d3e6b5db69051&w=826"/>
    </div>

    </div>
  )
}
