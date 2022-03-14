import axios from "axios";
import { useEffect, useState } from "react";

export const AddHouse = () => {
const [table,setTable] = useState([])
const [state, setState] = useState({
  name: "",
  ownerName : "",
  address : "",
  areaCode : "",
  rent : "",
  image : "",
})
const handlechange = (e)=>{
  const {className, value }= e.target
  setState({
    ...state,
    [className] : value,
  })
 
}
useEffect(()=>{
  getdata()
},[])

const handlesubmit = (e)=>{
  e.preventDefault()
  axios.post("http://localhost:3001/Info", state)
  console.log(state)
}
const getdata = ()=>{
  axios.get("http://localhost:3001/Info").then((res)=>{
      setTable(res.data)
  })
}

  return (
    <div className="addHouseContainer">
      <form>
        <label>name</label>
        <input type="text"  className="name"  required  onChange={handlechange}/>
        <br />
        <label>ownerName</label>
        <input  type="text" className="ownerName" required  onChange={handlechange}/>
        <br />
        <label>address</label>
        <input  type="text" className="address" required  onChange={handlechange}/>
        <br />
        <label>areaCode</label>
        <input  type="text" className="areaCode" required onChange={handlechange} />
        <br />
        <label>rent</label>
        <input  type="text" className="rent" required onChange={handlechange} />
        <br />
        <label>preferredTenant</label>
        <br />
        <label>bachelor</label>
        <input checked={""} type="checkbox" className="bachelor"  onChange={handlechange} />
        <br />
        <label>married</label>
        <input checked={""} type="checkbox" className="married"  onChange={handlechange}/>
        <br />
        <label>image</label>
        <input  type="text" className="image" required  onChange={handlechange}/>
        <br />
        <input className="submitBtn" type="submit" onClick={handlesubmit}/>
      </form>
    </div>
  );
};
