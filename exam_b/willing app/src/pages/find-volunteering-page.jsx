import React, { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { VolunteeringContext } from "../context/VolunteeringContext"
import VolunteeringInfo from "../components/VolunteeringInfo"


const FindVolunteeringPage = () => {

const {Volunteering,createVolunteering} = useContext(VolunteeringContext)
const [formData, setFormData] = useState({ volunteeringTitle: "", city: "", description: ""})
const [error, setError] = useState("")

const navigate = useNavigate()

const validate = () => {
  if (formData.volunteeringName.length <3) {
    return "volunteering Name must be minimum 3 chars"
  }
  return ""
}

const handleSubmit = (e) => {
  e.preventDefault()
  
  // validation
  const errorMessage = validate()
  if (errorMessage) {
    setError(errorMessage)
    alert(errorMessage)
    return
  }
  
  navigate("/all")
}


const handleChange = (e) => {
  setFormData({ ...formData, [e.target.name]: e.target.value })
}



  return (
    <>
    <form className="flex flex-col" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="volunteeringName">volunteering Name: </label>
        <input
          type="text"
          id="volunteeringName"
          name="volunteeringName"
          value={formData.volunteeringName}
          onChange={handleChange}
          className="border border-gray-300 p-2 w-full"
          minlength="2"
        />
      </div>
      <div className="mb-4">
      <label for="citys">Choose a city</label>
        <select name="citys" id="citys">
        {Volunteering.map(Volunteer => (
          <VolunteeringInfo city={Volunteer.city}  key={Math.random()} />
        ))}
        </select>
      </div>

      {error && <div className="text-red-500 mb-2">{error}</div>}
      
      <button type="submit"  className="bg-green-500 text-white p-3">find</button>
    </form>
</>
  )
}
 
export default FindVolunteeringPage