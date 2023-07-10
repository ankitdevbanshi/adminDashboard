import React, { useContext } from "react";
import MiniDrawer from "../components/Drawer";
import { Outlet } from "react-router-dom";
import { Box, CssBaseline, IconButton } from "@mui/material";
import MySidebar from "../components/Sidebar";
import { DarkMode, LightMode } from "@mui/icons-material";
import { useTheme } from "@emotion/react";
import { ColorModeContext, tokens } from "../theme";

function RootLayout() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <>
      <CssBaseline />
      <div className="app">
        <MySidebar />

        <main className="content">
          <Box justifyContent={"flex-end"} width={"100%"} display={"flex"}>
            <IconButton onClick={colorMode.toggleColorMode}>
              {theme.palette.mode === "dark" ? <DarkMode /> : <LightMode />}
            </IconButton>
          </Box>

          <Outlet />
        </main>
      </div>
    </>
  );
}

export default RootLayout;
