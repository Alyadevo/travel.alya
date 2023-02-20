import React from "react"
import { useState } from 'react'

function Tunis(){
    const [count, setCount] = useState(0)
    return(
        <>
        <div className="row">
                <div className="col-md-3">
                      <div className="col-megamenu">
                  <h5><a href="/sejours-en-tunisie/hotels-tunisie/" className="text-dark">Hôtels</a></h5>
                  <ul className="list-unstyled">
                    
                      <li><a className="drop-menu" href="/sejours-en-tunisie/hotels/hotel-tunis/">Tunis</a></li>
                      <li><a  className="drop-menu" href="/sejours-en-tunisie/hotels/hotel-hammamet/">Hammamet</a></li>
                      <li><a  className="drop-menu" href="/sejours-en-tunisie/hotels/hotel-sousse/">Sousse</a></li>
                      <li><a className="drop-menu" href="/sejours-en-tunisie/hotels/hotel-monastir/">Monastir</a></li>
                      <li><a className="drop-menu" href="/sejours-en-tunisie/hotels/hotel-mahdia/">Mahdia</a></li>
                      <li><a className="drop-menu" href="/sejours-en-tunisie/hotels/hotel-tabarka/">Tabarka</a></li>
                      <li><a className="drop-menu" href="/sejours-en-tunisie/hotels/hotel-ain-draham/">Ain Draham</a></li>
                      <li><a className="drop-menu" href="/sejours-en-tunisie/hotels/hotel-tozeur/">Tozeur</a></li>
                      <li><a className="drop-menu" href="/sejours-en-tunisie/hotels/hotel-djerba/">Djerba</a></li>
                    
                  </ul>
                </div>
              </div>
              <div className="col-md-3 border-start">
                <div className="col-megamenu">
                  <h5><a href="/sejours-en-tunisie/maison-dhote/" className="text-dark">Maisons d'hôtes</a></h5>
                  <ul className="list-unstyled" style={{backgroundcolor:'brown'}}>
                    
                      <li><a href="/sejours-en-tunisie/maison-dhote-tunis/">Tunis</a></li>
                      <li><a href="/sejours-en-tunisie/maison-dhote-sidi-bou-said/">Sidi Bou Said</a></li>
                      <li><a href="/sejours-en-tunisie/maison-dhote-la-marsa/">La Marsa</a></li>
                      <li><a href="/sejours-en-tunisie/maison-dhote-bizerte/">Bizerte</a></li>
                      <li><a href="/sejours-en-tunisie/maison-dhote-hammamet/">Hammamet</a></li>
                      <li><a href="/sejours-en-tunisie/maison-dhote-le-kef/">Le Kef</a></li>
                      <li><a href="/sejours-en-tunisie/maison-dhote-tamezret/">Tamezret</a></li>
                      <li><a href="/sejours-en-tunisie/maison-dhote-tozeur/">Tozeur</a></li>
                      <li><a href="/sejours-en-tunisie/maison-dhote-djerba/">Djerba</a></li>
                      
                    
                  </ul>
                </div>                 
              </div>
              <div className="col-md-3 border-start">
                <div className="col-megamenu">
                  <h5><a href="/villas-apparts/" className="text-dark">Villas &amp; Apparts</a></h5>
                  <ul className="list-unstyled">
                    
                      <li><a href="/sejours-en-tunisie/villas-apparts-tunis/">Tunis</a></li>
                      <li><a href="/sejours-en-tunisie/villas-apparts-la-marsa/">La Marsa</a></li>
                      <li><a href="/sejours-en-tunisie/villas-apparts-gammarth/">Côtes  de Gammarth </a></li>
                      <li><a href="/sejours-en-tunisie/villas-apparts-sidi-bou-said/">Sidi Bou Said</a></li>
                      <li><a href="/sejours-en-tunisie/villas-apparts-bizerte/">Bizerte</a></li>
                      <li><a href="/sejours-en-tunisie/villas-apparts-hammamet/">Hammamet</a></li>
                      <li><a href="/sejours-en-tunisie/villas-apparts-nabeul/">Nabeul</a></li>
                      <li><a href="/sejours-en-tunisie/villas-apparts-korba/">Korba</a></li>
                      <li><a href="/sejours-en-tunisie/villas-apparts-sousse/">Sousse</a></li>
                      <li><a href="/sejours-en-tunisie/villas-apparts-mahdia/">Mahdia</a></li>
                      <li><a href="/sejours-en-tunisie/villas-apparts-djerba/">Djerba</a></li>
                      <li><a href="/sejours-en-tunisie/villas-apparts-kelibia/">Kelibia</a></li>
                    
                  </ul>
                </div>  
              </div>
              <div className="col-md-3 border-start">
                <a href="">
                  </a><a href="https://www.clubmed.tn/" title="Traveltodo bannerpub" target="_blank">
                          </a>
                         
                
              </div>

          </div> 
          
        




























        

        
       
        </>

    )
}
    export default Tunis 
