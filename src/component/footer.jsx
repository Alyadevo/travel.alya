import React from "react"
import { useState } from 'react'

function Footer(){
    const [count, setCount] = useState(0)
    return(
        <>
         
       
<div className="bg-dark py-3">
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="font-weight-500 text-white mb-2  fs-6 br-right-green position-relative">
            <h1>Informations utiles</h1>
            <p>Aujourd’hui, TRAVELTODO est<br/> 
              comblée au quotidien par ses <br/>
              milliers de clients et ses collaborateurs. <br/>
             Mais sa plus grande fierté est <br/>
             d’avoir suscité les vocations de <br/>
             tout un secteur et de concurrents…<br/>
             fort d’avoir été les premiers à avoir<br/>
              cru et avoir amorcé la révolution<br/>
               du « e-tourisme » en Tunisie.</p>
          </div>                   
          
        </div>
        <div className="col-md-4">
          <div className="font-weight-500 text-white mb-2  fs-6 br-right-green position-relative">
            <h1>Contact</h1>
          </div>       
          <ul className="links p-0 list-unstyled lh-lg">
            <li><span className="text-white">Adresse:</span><a className="text-white" href="https://g.page/traveltodo-la-charguia-ii?share" target="_blank"> 
              <br/>Angle rue des Entrepreneurs et rue du Métal 
              <br/>Immeuble SOFIDE, 3ème étage
              <br/>Z.I Charguia II - 2035
              TUNIS CARTHAGE</a>
            </li>
            <li><span className="text-white">Tél:</span><a className="text-white" href="tel:+21670103103">+(216) 70 103 103</a></li>
            <li><span className="text-white">Fax:</span><a className="text-white" href="tel:+21671942682">+(216) 71 942 682</a></li>
          </ul>
        </div>
        <div className="col-md-4 ">
                
         
          <div className="mt-3"> 
          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button" >
        <img src={"src/assets/facebook.png"} width="20" height="20"/></a>

      
      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
        <img src={"src/assets/twitter.png"} width="20" height="20"/></a>

      
      

      
      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
        <img src= {"src/assets/instagram.png"} width="20" height="20"/></a>

      
      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><img src={"src/assets/linkedin.png"} width="20" height="20"/></a>

            <p className="text-white mb-2">©2023 Traveltodo - Tous droits réservés.</p>
            
          </div>
        </div>
      </div>
    </div>
</div>

</ >
       
    )    

   } 
  
    export default Footer
