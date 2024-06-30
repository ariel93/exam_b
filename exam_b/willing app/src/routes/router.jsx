import {
  Route,
  Navigate,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom"
import ErrorPage from "../pages/error-page"
import FindVolunteeringPage from "../pages/find-volunteering-page"
import EditVolunteeringPage from "../pages/edit-volunteering-page"
import WillingPage from "../pages/willing-page"
import ALLVolunteeringPage from "../pages/all-volunteering-page"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<ErrorPage />}>
      <Route path="/" element={<Navigate to="/willing"/>} />
      <Route path="/willing" element={<WillingPage />} />
      <Route path="/find" element={<FindVolunteeringPage />} />
      <Route path="/add" element={<EditVolunteeringPage />} />
      <Route path="/all" element={<ALLVolunteeringPage />} />
    </Route>
  )
)

export default router
