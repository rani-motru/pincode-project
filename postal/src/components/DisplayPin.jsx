import React from 'react';

const DisplayPin = ({ search }) => {
    const hasData = search && search.length > 0;
    const isValid = hasData && search[0].Status === "Success";
    // console.log("hasData:",hasData);
    // console.log(search[0].Status);
    return (
        <div>
            <center>
                {isValid ? (
                      <>
                          <h3>PIN Code: {search[0].PostOffice[0].Pincode}</h3>
                          <h3>State: {search[0].PostOffice[0].State}</h3>
                          <h3>Region: {search[0].PostOffice[0].Division}</h3>
                         <h3>Country: {search[0].PostOffice[0].Country}</h3>
                       </>
                   ):null
                }
         {!isValid ?(<h2>You have entered a wrong pin, please check the pincode!</h2>):null}
            </center>
        </div>
    )
};

export default DisplayPin;