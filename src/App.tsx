import { RouterProvider } from "react-router-dom";
import { router } from "./pages/routes";
import { Helmet, HelmetProvider } from "react-helmet-async";

import './global.css'
export function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | pizza.shop" />
      <RouterProvider router={router} />
    </HelmetProvider>
  )
}
