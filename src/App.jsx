import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import User from "./pages/User";
import Userdetail from "./pages/Userdetail";
import Notfound from "./pages/Notfound";
import Rootlayout from "./layout/Rootlayout";

import "./App.css";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Rootlayout />,
    errorElement: <Notfound />,

    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: "about",
        element: <About />,
      },

      {
        path: "user",
        element: <User />,
      },
{
  path: "userdetail/:id",
  element: <Userdetail />,

  loader: ({ params }) => {
    const users = [
      {
        id: 1,
        name: "Kavi",
        age: 21,
        course: "Full Stack",
        email: "kavi@gmail.com",
      },
      {
        id: 2,
        name: "Arun",
        age: 22,
        course: "UI/UX",
        email: "arun@gmail.com",
      },
      {
        id: 3,
        name: "Priya",
        age: 20,
        course: "Python",
        email: "priya@gmail.com",
      },
    ];

    return users.find((u) => u.id === Number(params.id));
  },
},
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;