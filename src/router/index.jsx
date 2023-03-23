import { createHashRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import Cooperation from "../pages/Cooperation";
import Home from "../pages/Home";
import Solution from "../pages/Solution";
import Tourism from "../pages/Tourism";

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
      },
      {
        path: 'cooperation',
        element: <Cooperation />
      },
      {
        path: 'tourism',
        element: <Tourism />
      }
    ]
  }
])