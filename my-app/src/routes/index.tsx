import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useAuth } from "../provider/AuthProvider";
import { ProtectedRoute } from "./ProtectedRoute";
import Logout from "../pages/Logout";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Profile from "../pages/profile";
import Replies from "../pages/profile/tap/Replies";
import MainPage from "../pages/Home/MainPage";
import Notification from "../pages/Home/Notification";
import Timeline from "../pages/Home/Timeline";
import Posts from "../pages/profile/tap/Posts";
import Media from "../pages/profile/tap/Media";
import Highlight from "../pages/profile/tap/Highlight";
import Explore from "../pages/Home/Explore";
import Community from "../pages/Home/Community";
import Message from "../pages/Home/Message/Message";

const Routes = () => {
  const { token } = useAuth();

  // Define public routes accessible to all users
  const routesForPublic = [
    {
      path: "/service",
      element: <div>Service Page</div>,
    },
    {
      path: "/about-us",
      element: <div>About Us</div>,
    },
  ];

  // Define routes accessible only to authenticated users
  const routesForAuthenticatedOnly = [
    {
      path: "/",
      element: <ProtectedRoute />, // Wrap the component in ProtectedRoute
      children: [
        {
          path: "/",
          element: <Home />,
          children: [
            {
              path: "/",
              element: <MainPage />,
              children: [
                {
                  path: "/",
                  element: <Timeline />,
                },
                {
                  path: "/homePage",
                  element: <Timeline />,
                },
                {
                  path: "/explore",
                  element: <Explore />,
                },
                {
                  path: "/notification",
                  element: <Notification />,
                },
                {
                  path: "/community",
                  element: <Community />,
                },
                {
                  path: "/message",
                  element : <Message/>
                },
                {
                  path: "/username",
                  element: <Profile />,
                  children: [
                    {
                      path: "/username",
                      element: <Posts />,
                    },
                    {
                      path: "/username/media",
                      element: <Media />,
                    },
                    {
                      path: "/username/highlights",
                      element: <Highlight />,
                    },
                    {
                      path: "/username/replies",
                      element: <Replies />,
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ];

  // Define routes accessible only to non-authenticated users
  const routesForNotAuthenticatedOnly = [
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ];

  // Combine and conditionally include routes based on authentication status
  const router = createBrowserRouter([
    ...routesForPublic,
    ...(!token ? routesForNotAuthenticatedOnly : []),
    ...routesForAuthenticatedOnly,
  ]);

  // Provide the router configuration using RouterProvider
  return <RouterProvider router={router} />;
};

export default Routes;
