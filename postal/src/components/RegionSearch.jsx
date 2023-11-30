import React from "react";

function RegionSearch({ search }) {
  
  const office = search.PostOffice;
  console.log(office);
  return (
    <div>
      <h2>The Post office Regions</h2>
      <ul>
        <li>
          {office.map((one, index) => (
            <div key={index}>{one.Name}</div>
          ))}
        </li>
      </ul>
    </div>
  );
}

export default RegionSearch;







