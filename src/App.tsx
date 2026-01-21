import { createRouter, RouterProvider } from "@tanstack/react-router";
import "./App.css";

import { routeTree } from "./route-tree.gen.ts";

const router = createRouter({ routeTree });

function App() {
  return <RouterProvider router={router} />;
}

export default App;
