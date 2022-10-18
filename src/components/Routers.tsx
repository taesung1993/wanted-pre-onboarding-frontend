import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Pages from "./pages";

const Routers = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Pages.Login />} />
      <Route path="todo" element={<Pages.Todos />} />
    </Route>
  )
);

export default Routers;
