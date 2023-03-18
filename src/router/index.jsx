import { createHashRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";

export default createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'some',
        element: <Home />
      }
    ]
  }
])