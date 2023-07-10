import React, { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import {
  ChevronLeft as ChevronLeftIcon,
  Home,
  AccountCircle as AvatarIcon,
  Newspaper as ResumeIcon,
  Bolt as PortfolioIcon,
  Book as BlogIcon,
  Phone as ContactUsIcon,
  MenuOutlined as MenuOutlinedIcon,
  HomeOutlined,
  QuestionAnswer,
  CalendarMonth,
  BarChart,
  QuestionAnswerOutlined,
} from "@mui/icons-material";
import { IconButton, useTheme } from "@mui/material";

import { Box, Typography } from "@mui/material";
import { hover } from "@testing-library/user-event/dist/hover";
import { red } from "@mui/material/colors";
import { tokens } from "../theme";

const Item = ({ title, icon, to, selected, setSelected }) => {
  return (
    <MenuItem
      style={{
        "& :hover": {
          backgroundColor: "red",
        },
      }}
      onClick={() => setSelected(title)}
      active={selected === title}
      //   style={{ color: "red " }}
      icon={icon}
      component={<Link to={`/${title}`} />}
    >
      <Typography>{title}</Typography>
    </MenuItem>
  );
};

function MySidebar() {
  const [selected, setSelected] = useState("Home");
  const [isCollapsed, setIsCollapsed] = useState(false);
  let theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box
    // sx={{ bgcolor: theme.palette.primary[500] }}
    // sx={{
    //   "& .pro-sidebar-inner": {
    //     background: `blue !important`,
    //   },
    //   "& .pro-icon-wrapper": {
    //     backgroundColor: "transparent !important",
    //   },
    //   "& .pro-inner-item": {
    //     padding: "5px 35px 5px 20px !important",
    //   },
    //   "& .pro-inner-item:hover": {
    //     color: "#868dfb !important",
    //   },
    //   "& .pro-menu-item.active": {
    //     color: "#6870fa !important",
    //   },
    // }}
    >
      <Sidebar
        backgroundColor={colors.primary[400]}
        collapsedWidth="80px"
        collapsed={isCollapsed}
      >
        <Menu
          menuItemStyles={{
            button: {
              ":hover": {
                backgroundColor: "#4889cf",
              },
            },
          }}
          iconShape="square"
        >
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={
              isCollapsed ? (
                <IconButton
                  sx={{
                    color: colors.grey[100],
                  }}
                >
                  <MenuOutlinedIcon />
                </IconButton>
              ) : undefined
            }
            style={{
              margin: "10px 0 20px 0",
              color: "gray",
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <IconButton
                  sx={{
                    color: colors.grey[100],
                  }}
                  onClick={() => setIsCollapsed(!isCollapsed)}
                >
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={`profile.jpg`}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h3"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  Ankit
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  Vcard
                </Typography>
              </Box>
            </Box>
          )}
          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              icon={
                <IconButton sx={{ color: colors.grey[100] }}>
                  {" "}
                  <HomeOutlined />
                </IconButton>
              }
              title={"Dashboard"}
              selected={selected}
              setSelected={setSelected}
            ></Item>
            <Item
              icon={
                <IconButton sx={{ color: colors.grey[100] }}>
                  <BarChart />
                </IconButton>
              }
              title={"barchart"}
              selected={selected}
              setSelected={setSelected}
            ></Item>
            <Item
              icon={
                <IconButton sx={{ color: colors.grey[100] }}>
                  <QuestionAnswerOutlined />
                </IconButton>
              }
              title={"FAQ"}
              selected={selected}
              setSelected={setSelected}
            ></Item>
            <Item
              icon={
                <IconButton sx={{ color: colors.grey[100] }}>
                  <CalendarMonth />
                </IconButton>
              }
              title={"calendar"}
              selected={selected}
              setSelected={setSelected}
            ></Item>
            <Item
              icon={
                <IconButton sx={{ color: colors.grey[100] }}>
                  <ContactUsIcon />
                </IconButton>
              }
              title={"Contactus"}
              selected={selected}
              setSelected={setSelected}
            ></Item>
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  );
}

export default MySidebar;
