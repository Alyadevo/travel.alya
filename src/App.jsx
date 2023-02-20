import { useState } from 'react'
import React from 'react'
import {BrowserRouter ,Route,Routes} from 'react-router-dom';

 import ReactDom from 'react-dom'
import './App.css'
import Homee from './pages/Homee'
import Login from './pages/Login'
import Agence from './pages/Agence'
import Contact from './pages/Contact'
import Tunis from './pages/Tunis'
//import Footer from './component/footer'
import { Navbar } from 'react-bootstrap'
import useToken from './useToken';




function App() {
  const { token, setToken } = useToken();
  
  if(!token)
  {
    return<Login setToken={setToken}/>
  }

  return (
    <div className='wrapper'>
    <Navbar/>
    <BrowserRouter>
    <Router>
      <div>
        <Routes>
          <Route  exact path="/" element={<Contact/>}></Route> 
          <Route  path="/Login" element={<Login/>}></Route>
          <Route  path="/Agence" element={<Agence/>}></Route>
          <Route  path="/Contact" element={<Contact/>}></Route>
          <Route  path="/Tunis" element={<Tunis/>}></Route>

        </Routes>

      </div>
      
       
      
      
    
    </Router>
    </BrowserRouter>
    {/* <Navbarr/> */}
    {/* <Footer/> */}
    </div >
   
  )
}

export default App
