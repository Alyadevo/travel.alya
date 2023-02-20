import React from "react"
import { useState } from 'react'

function Agence(){
    const [agenceState, setagenceState] = useState()
    
    const data=["Tunis","Mahdia","Sousse","Monastir"];
    return(
        <>
         
       
         <h1>{agenceState}</h1>
        <div className="col-md-4 col-12">
            
          <select name="title" className="form-select" value={agenceState} onChange={e=>setagenceState(e.target.value)}> 
         {
            data.map(opt=><option>{opt}</option>)
         }
         <option >Tunis</option>
            <option >sfax</option> 

         
                      
         </select>
         

         <input type="text" className="form-control " placeholder="search agence" />

         </div>

        
       
        </>

    )
}
    export default Agence
