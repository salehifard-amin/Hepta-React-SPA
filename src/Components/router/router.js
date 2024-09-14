import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../../Pages/HomePage";
import AboutUs from "../../Pages/about-us";
import Gallery from "../../Pages/gallery";

export default function Router() {
  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: <HomePage home="Home" />,
    },
    {
      path: "/about-us",
      element: <AboutUs />,
    },
    {
      path: "/gallery",
      element: <Gallery />,
    },
  ]);

  return <RouterProvider router={myRouter} />;
}
