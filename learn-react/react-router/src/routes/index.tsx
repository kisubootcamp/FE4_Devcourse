import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Datail from "./pages/Datail";
import NotFound from "./pages/NotFound";
import Default from "./layout/Default";
import { fetchJsonDetail, fetchJsonPosts } from "./loader/posts.loader";

export default function index() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Default />,
      errorElement: <p>Error</p>,
      hydrateFallbackElement: <p>Loading...</p>,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          loader: fetchJsonPosts,
          element: <About />,
        },
        {
          path: "/datail/:id",
          loader: fetchJsonDetail,
          element: <Datail />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
  return <RouterProvider router={router} />;
}
