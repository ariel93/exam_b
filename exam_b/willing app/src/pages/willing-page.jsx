import React from "react"
import { useNavigate } from "react-router-dom"
const WillingPage = () => {
const navigate = useNavigate()

  

  return (
    <>
      <h1>WILLING</h1>
      <div>
          <button className="bg-green-500 text-white p-3"onClick={()=>navigate("/find")}>find volunteering</button>
          <button className="bg-green-500 text-white p-3"onClick={()=>navigate("/add")}>edit volunteering</button>
      </div>
    
    </>
  )
}
 
export default WillingPage
