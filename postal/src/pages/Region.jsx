import { useState, useEffect } from 'react'
import FormReg from '../components/FormReg'
import RegionSearch from '../components/RegionSearch'
function Pincode(props) {
    const [search, setSearch] = useState(null);

    const getSearch = async (searchterm) => {
    const url = 'https://api.postalpincode.in/postoffice/'+[searchterm] ;
    
    try {
      const response = await fetch(url);
      console.log(url);
      const data = await response.json();
      console.log(data);
      setSearch(data);
    } catch (e) {
      console.error(e);
    }
  }
  useEffect(() => {
      getSearch();
    }, []);

  return (
    <div>
      <center><h3>Select the Region: 
        <></> <FormReg regSearch={getSearch}/></h3></center>
      <RegionSearch search= {search}/> 
       
    </div>
  )
}

export default Pincode

