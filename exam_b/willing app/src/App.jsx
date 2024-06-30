import './App.css'
import { RouterProvider } from "react-router-dom"
import router from './routes/router'
import VolunteeringContextProvider from './context/VolunteeringContext'

function App() {
  return (
    <VolunteeringContextProvider>
      <RouterProvider router={router} />
    </VolunteeringContextProvider>
  )
}

export default App
            