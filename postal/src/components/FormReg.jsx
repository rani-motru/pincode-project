import { useState, useEffect } from 'react'

function FormReg({getSearch}) {
    const [sortBy, setSortBy] = useState("");
  

    const handleSort = (event) => {
        setSortBy(event.target.value);
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        getSearch(sortBy);
        console.log(sortBy);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <select onChange={handleSort} value={sortBy} className="select">
                <option value="Andaman & Nicobar">Andaman & Nicobar</option>
                <option value="Andhra Pradesh">Andhra Pradesh</option>
                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                <option value="Assam">Assam</option>
                <option value="Bihar">Bihar</option>
                <option value="Chandigarh">Chandigarh</option>
                <option value="Chattisgarh">Chattisgarh</option>
                <option value="Dadra & Nagar Haveli">Dadra & Nagar Haveli</option>
                <option value="Damann & Diu">Damann & Diu</option>
                <option value="Delhi">Delhi</option>
                <option value="Goa">Goa</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Haryana">Haryana</option>
                <option value="Himachal Pradesh">Himachal Pradesh</option>
                <option value="Jammu & Kashmir">Jammu & Kashmir</option>
                <option value="Jharkhand">Jharkhand</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Kerala">Kerala</option>
                <option value="Lakhshadweep">Lakhshadweep</option>
                <option value="Madya Pradesh">Madya Pradesh</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Manipur">Manipur</option>
                <option value="Meghalaya">Meghalaya</option>
                <option value="Mizoram">Mizoram</option>
                <option value="Nagaland">Nagaland</option>
                <option value="Odisha">Odisha</option>
                <option value="Pondicherry">Pondicherry</option>
                <option value="Punjab">Punjab</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Sikkim">Sikkim</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Telangana">Telangana</option>
                <option value="Tripura">Tripura</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="Uttarakhand">Uttarakhand</option>
                <option value="West Bengal">West Bengal</option>
                </select>
                <input type="submit" value="submit" />

            </form>
        </div>
    )
}

export default FormReg;