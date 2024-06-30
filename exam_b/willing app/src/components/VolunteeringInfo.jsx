import React from 'react'

export default function VolunteeringInfo(props) {
    const {city}=props
  return (
    <>
    <option value={city}>{city}</option><br/>
    </>
  )
}
