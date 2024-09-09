import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CssBaseline from "@mui/material/CssBaseline";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import { CmpLayout } from "./layouts/CmpLayout";
import { CmpForm, CmpUsersTable } from "./components";

const router = createBrowserRouter([
  {
    element: (
      <CmpLayout>
        <Outlet />
      </CmpLayout>
    ),
    children: [
      {
        path: "/",
        element: <CmpForm />,
      },
      {
        path: "/consents",
        element: <CmpUsersTable />,
      },
    ],
  },
]);

const client = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={client}>
      <CssBaseline />
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}
