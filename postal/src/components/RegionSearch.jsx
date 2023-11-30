import React from 'react'

function RegionSearch({search}) {
   
    const mapData =search.map((PostOffice) => ({
        Name: PostOffice.Name,
        Region: PostOffice.Region,
        State: PostOffice.State,
        Country: PostOffice.Country,
        Pincode: PostOffice.Pincode,
    }));
        return (
            <div >
                <h2>The Post office Regions</h2>
                <ul>
                    {mapData.map((office, index) =>
                    (
                        <li key ={index}>
                            <strong>Name:</strong>{office.Name},{' '}
                            <strong>Region:</strong>{office.Region},{' '}
                            <strong>State:</strong>{office.State},{' '}
                            <strong>Country:</strong>{office.Country},{' '}
                            <strong>Pincode:</strong>{office.Pincode},{' '}
                        </li>
                    ))}
                </ul>

            </div>
        )

    }

export default RegionSearch;