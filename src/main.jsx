import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router";
import router from "./router/Router/Router.jsx";
import AuthProvider from "./Providers/AuthProvider/AuthProvider.jsx";
import { Toaster } from "react-hot-toast";
import { ScrollProvider } from "./Providers/ScrollContext/ScrollContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ScrollProvider>
      <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
        <Toaster></Toaster>
      </AuthProvider>
    </ScrollProvider>
  </StrictMode>
);
