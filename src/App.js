import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import MiniDrawer from "./components/Drawer";
import RootLayout from "./pages/RootLayout";
import HomePage from "./pages/HomePage";
import AboutusPage from "./pages/AboutusPage";
import ResumePage from "./pages/ResumePage";
import BlogPage from "./pages/BlogPage";
import ContactusPage from "./pages/ContactusPage";
import { CssBaseline, ThemeProvider } from "@mui/material";
import ProSidebar from "./components/Sidebar";
import Calender from "./pages/Calender";
import FaqPage from "./pages/FaqPage";
import BarChart from "./pages/BarChart";
import Dashboard from "./pages/Dashboard";
import { createContext, useState } from "react";
import { ColorModeContext, useMode } from "./theme";

function App() {
  const [theme, colorMode] = useMode();

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "/",
          element: <Dashboard />,
        },
        { path: "/home", element: <HomePage /> },
        { path: "/barchart", element: <BarChart /> },
        { path: "/dashboard", element: <Dashboard /> },
        { path: "/calendar", element: <Calender /> },
        { path: "/faq", element: <FaqPage /> },
        { path: "/barchart", element: <BarChart /> },
        { path: "/aboutme", element: <AboutusPage /> },
        { path: "/resume", element: <ResumePage /> },
        { path: "/blog", element: <BlogPage /> },
        { path: "/contactus", element: <ContactusPage /> },
      ],
    },
  ]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router}></RouterProvider>;
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
