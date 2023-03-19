import { createHashRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import Home from "../pages/Home";
import Solution from "../pages/Solution";

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
        path: 'solution',
        element: <Solution />
      },
      {
        path: 'about',
        element: <About />
      }
    ]
  }
])