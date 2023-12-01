import React from "react";

function RegionSearch({ search }) {
  
  const office = search.PostOffice;
  console.log(office);
  return (
    <div><center>
      <h2>The Post office Regions</h2>
      <ul>
        <li>
          {office.map((one, index) => (
            <div key={index} className ="result-container">
               
               Name: {one.Name},
               District:{one.District},
               State:{one.State},
               Pincode:{one.Pincode}
               
                </div>
          ))}
        </li>
      </ul></center>
    </div>
  );
}

export default RegionSearch;







