import React from 'react'
import { Link  } from 'react-router-dom'
import Logotodo from '../assets/Logotodo.png'
import './navbar.css'
export default function Navbarr() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand fs-1 fst-italic" to="/"><img src={Logotodo}  width="200" height="100"/></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link " style={{fontWeight: "bold",fontSize: 
                 " x-large",marginLeft:"50px"}} aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" style={{fontWeight: "bold",fontSize:
                   "x-large",marginLeft:"50px"}}to="/Agence">Nos Agences</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" style={{fontWeight:"bold",
                  fontSize: "x-large",marginLeft:"50px"}} to="/Tunis">Séjour en Tunisie</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link"  style={{fontWeight: 'bold',
                  fontSize: 'x-large',marginLeft:'50px'}}to="/Contact">Contact</Link>
              </li>
              
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}