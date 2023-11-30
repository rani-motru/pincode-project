import { useState, useEffect } from 'react'
import Form from '../components/Form'
import DisplayPin from '../components/DisplayPin'
function Pincode(props) {
    const [search, setSearch] = useState(null);

    const getSearch = async (searchterm) => {
    const url = 'https://api.postalpincode.in/pincode/'+[searchterm] ;
    
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
      const pinArray = ["110001", "400053","534001",];
      const firstPin = pinArray[Math.floor(Math.random() * pinArray.length)];
      console.log(firstPin);
      getSearch(firstPin)
    }, []);

  return (
    <div>
      <center><h3>Type the 6 digit Pincode Here: 
        <></> <Form pinSearch={getSearch}/></h3></center>
      <DisplayPin search= {search}/> 
       
    </div>
  )
}

export default Pincode

