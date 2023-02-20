import React from 'react'
import { Link } from 'react-router-dom'
export default function Body() {
  return (
    <div>
      <h1 className="margin" style={{marginLeft:"400px",marginTop:"100px"}}>Your Journey Your Story</h1>
        <p style={{marginLeft:"500px"}}>Choose Your Favourite Destination</p> 
        <button  style={{marginLeft:"600px"}}><Link className="nav-link" to="/Login">Login</Link></button>
        <button style={{marginLeft:"600px"}} >
        <Link className="nav-link" to="/creatuser">SignUp</Link>
           
        </button>

    </div>
  )
}
