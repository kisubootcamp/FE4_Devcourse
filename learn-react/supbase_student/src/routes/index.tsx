import { createBrowserRouter, RouterProvider } from "react-router";
import FullLoading from "../components/common/FullLoading";
import RootLayout from "./layouts/RootLayout";
import { fetchUserData } from "./loader/auth.loader";
import BlogPost from "./views/BlogPost";
import CreatePost from "./views/CreatePost";
import Home from "./views/Home";
import Login from "./views/Login";
import NotFound from "./views/NotFound";

const router = createBrowserRouter([
  {
    Component: RootLayout,
    loader: fetchUserData,
    HydrateFallback: FullLoading,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/create-post",
        Component: CreatePost,
      },
      {
        path: "/post/:id",
        Component: BlogPost,
      },
    ],
  },
  {
    path: "*",
    Component: NotFound,
  },
]);

export default function Router() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
