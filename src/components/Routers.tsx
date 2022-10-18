import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Pages from "./pages";

const Routers = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Pages.Todos />} />
      <Route path="login" element={<Pages.Login />} />
      <Route path="join" element={<Pages.Join />} />
    </Route>
  )
);

export default Routers;
