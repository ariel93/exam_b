import React from "react"
import { useRouteError } from "react-router-dom"

const ErrorPage = () => {
  const error = useRouteError()
  console.error(error)

  return (
    <div className="text-center text-red-500 p-5">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occured</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  )
}

export default ErrorPage
