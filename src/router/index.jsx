import { createHashRouter, Navigate } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";

export default createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'some',
        element: <Home />
      }
    ]
  },
  {
    path: '',
    element: <Navigate to="/" />
  }
],
{
  basename: process.env.PUBLIC_URL
})