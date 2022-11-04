import { createBrowserRouter } from "react-router-dom";

import Home from "../Components/Home";
import Login from "../Components/Login";
import Main from "../Components/Main";
import Orders from "../Components/Orders";
import PrivateRoute from "../Components/PrivateRoute";
import ServiceDetail from "../Components/ServiceDetail";
import Signup from "../Components/Signup";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/checkout/:id",
        element: <ServiceDetail></ServiceDetail>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: "/orders",
        element: (
          <PrivateRoute>
            <Orders></Orders>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
export default router;
