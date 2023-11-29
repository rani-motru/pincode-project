import React from 'react'

function DisplayPin({search}) {

  const loaded= () => {

  return(
    <div>
      <center>
        <h3> PIN Code: {search[0].PostOffice[0].Pincode}</h3>
       <h3> State: {search[0].PostOffice[0].State}</h3>
       <h3> Region: {search[0].PostOffice[0].Division}</h3>
       <h3> Country: {search[0].PostOffice[0].Country}</h3>
       </center>
    </div> 

  )

        }
        const loading = () =>{
            return <h2>you have entered a wrong pin, please check the pincode! </h2>
        } 
        return search ? loaded() : loading();
    }
export default DisplayPin;