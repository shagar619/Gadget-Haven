import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import routes from "./routes/Routes";
import CardProvider from "./Context/CardProvider";



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CardProvider>
      <RouterProvider router={routes} />
    </CardProvider>
  </React.StrictMode>
);

