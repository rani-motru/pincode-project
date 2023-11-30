import { useState, useEffect } from 'react'
import FormReg from '../components/FormReg'
import RegionSearch from '../components/RegionSearch';

function Region(props) {
    const [search, setSearch] = useState(null);

    const getSearch = async (sortBy) => {
    const url = "https://api.postalpincode.in/postoffice/"+ sortBy;
    
    try {
      const response = await fetch(url);
      console.log(url);
      const data = await response.json();
      console.log(data[0]);
      setSearch(data[0]);
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <div>
      <center><h3>Select the Region: 
      <FormReg getSearch={getSearch}/></h3></center>
      {search ? <RegionSearch search ={search}/>: "Enter the Region." } 
       
    </div>
  )
}

export default Region

