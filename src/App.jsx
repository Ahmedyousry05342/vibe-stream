import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./components/Login";
import Browse from "./components/Browse";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Login />,
        },
        {
          path: "/browse",
          element: <Browse />,
        },
        
      ],
    },
  ]);

  

  return (
      <RouterProvider router={router} />
    
  );
}

export default App;
