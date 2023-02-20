import React from "react"
import { useState } from 'react'

function Contact(){
    const [count, setCount] = useState(0)
    return(
      
    <>
         
      {/* <div className="col-md-4 col-12   " >
      <img src={"src/assets/Carte.webp"}  className="center"width="1000px"height="300"/>
      </div> */}
      <h1 className="color-primary"> Nous contacter <hr /> </h1>
       <div className="row g-3 container">
        <div className="col-md-4 col-12 ">
         <select name="title" className="form-select" id="title"> 
           <option>Civilité*</option>            
           <option value="Mr">Mr</option>          
           <option value="Mme">Mme</option>            
           <option value="Mlle">Mlle</option>           
         </select>            
                        
      </div>              
        <div className="col-md-4 col-12"> 
          <div className="form-group"> 
            <input id="firstName" type="text" name="firstName" className="form-control " placeholder="Prénom*" 
           required="required" data-fv-field="firstName" />         
            <small className="help-block" data-fv-validator="notEmpty" 
           data-fv-for="firstName" data-fv-result="NOT_VALIDATED"
            >Le prénom est obligatoire</small>
                 
    </div> 
        </div>  
        <div className="col-md-4 col-12 ">
            <div className="form-group ">
             <input id="email" type="email" name="email" className="form-control" placeholder="E-mail*" required="required" data-fv-field="email"/>
           <small className="help-block" data-fv-validator="notEmpty" data-fv-for="email" data-fv-result="NOT_VALIDATED" >L'email est obligatoire</small>
           </div>

        </div> 
          <div className="col-md-4 col-12">
            <div className="form-group">
              <input id="lastName" type="text" name="lastName" class="form-control" placeholder="Nom de famille*" required="required" data-fv-field="lastName"/>
            </div>  
            
         </div>  
         <div className="col-md-4 col-12">
            <div className="form-group">
              <input id="fax" type="tel" name="tel" class="form-control" placeholder="telephone*" required="required" />
               

            </div>  
            
         </div>  
         <div class="col-md-4 col-12">
                      <div class="form-group">
                        <input id="address" type="text" name="address" class="form-control" placeholder="Adresse"/>
                        <small className="help-block" data-fv-validator="emailAddress" data-fv-for="email" data-fv-result="NOT_VALIDATED" >L´entrée n´est pas une adresse électronique valide</small>
                      </div>
                    </div>  
                    <div class="col-md-4 col-12">
                      <div class="form-group">
                        <input id="function" type="function" name="function" class="form-control" placeholder="Fonction"/>
                      </div>
                    </div>
                    <div class="col-md-4 col-12">
                      <div class="form-group">
                        <select name="target" class="form-select" id="motif-contact" required="" data-fv-field="target">
                          <option>Motif de contact</option>
                          <option value="Réservation">Réservation</option>
                          <option value="Renseignement">Renseignement</option>
                        </select>
                        </div>
                        </div>
                        <div class="col-md-4 col-12">
                      <div class="form-group">
                        <input id="company" type="company" name="company" class="form-control" placeholder="Société"/>
                      </div>
                    </div>
                    <div class="col-md-8 col-12">
                      <div class="form-group">
                        <textarea id="message" name="message" class="form-control" placeholder="Message*" rows="1" required="required" data-fv-field="message"></textarea>
                        </div>
                        </div>

                    <div class="col-md-12 text-end">
                      <button type="submit" class="btn btn-warning" onClick={e=>putContact()}>Envoyer</button>
                    </div>
                    

                <img src={"src/assets/logoc.jpg"} style={{width:'500px',height:'300px',marginLeft: 'auto' }} 
    />
                         </div>
                         
                         
                         </>
    )
  }
  export default Contact
                        
                                                                                                                                                                                         
                                                                                                                                                                                                                  
                                                                                                                                                                                                                    
                                                                                                                                                                                                                  
                                                                                                                                                                                                                                     
                                                                                                                                                                                                                                      
                                                                                                                                                                                                                                                                                                                                                                                           