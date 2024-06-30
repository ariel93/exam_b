import React, { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { VolunteeringContext } from "../context/VolunteeringContext"
const EditVolunteeringPage = () => {

  
const {createVolunteering} = useContext(VolunteeringContext)
const [formData, setFormData] = useState({ volunteeringTitle: "", city: "", description: ""})
const [error, setError] = useState("")

const navigate = useNavigate()

const validate = () => {
  if (formData.volunteeringTitle.length >20) {
    return "volunteering title must be maximum 20 chars"
  }

  if (formData.description.length  > 200) {
    return "volunteering description must be maximum 200 chars"
  }

  if (!formData.description.trim()) return "description is required"
  if (!formData.volunteeringTitle.trim()) return "volunteering title is required"
  if (!formData.city.trim()) return "city is required"

  for (let i = 0; i < formData.city.length; i++) {
    if (!(formData.city[i] >= "A" && formData.city[i] <= "Z" || formData.city[i] >= "a" && formData.city[i] <= "z")) {
            return "the city must conteins only english chars with no spaces"
        }
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
  createVolunteering(formData)
  navigate("/willing")
}


const handleChange = (e) => {
  setFormData({ ...formData, [e.target.name]: e.target.value })
}



  return (
    <>
    <form className="flex flex-col" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="volunteeringTitle">volunteering Title: </label>
        <input
          type="text"
          id="volunteeringTitle"
          name="volunteeringTitle"
          value={formData.volunteeringTitle}
          onChange={handleChange}
          className="border border-gray-300 p-2 w-full"
          maxlength="20"
        />
        
      </div>
      <div className="mb-4">
        <label htmlFor="city">city: </label>
        <input
          type="text"
          id="city"
          name="city"
          value={formData.city}
          onChange={handleChange}
          className="border border-gray-300 p-2 w-full"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="description">description: </label>
        <textarea
          type="text"
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="border border-gray-300 p-2 w-full"
          maxlength="20"
        />
      </div>
      {error && <div className="text-red-500 mb-2">{error}</div>}
      
      <button type="submit"  className="bg-green-500 text-white p-3">create</button>
    </form>
</>
  )
}
 
export default EditVolunteeringPage