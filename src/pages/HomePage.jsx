import { Box, Button, useTheme } from "@mui/material";
import React from "react";
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../theme";

const data = [
  { id: 1, col1: "Hello", col2: "World", col3: "admin" },
  { id: 2, col1: "DataGridPro", col2: "is Awesome", col3: "student" },
  { id: 3, col1: "MUI1", col2: "is Amazing", col3: "admin" },
  { id: 4, col1: "MUI2", col2: "is Amazing", col3: "manager" },
  { id: 5, col1: "MUI3", col2: "is Amazing", col3: "teacher" },
  { id: 6, col1: "MUI4", col2: "is Amazing", col3: "staff" },
  { id: 7, col1: "MUI5", col2: "is Amazing", col3: "parent" },
  { id: 8, col1: "MUI6", col2: "is Amazing", col3: "admin" },
];

const columns = [
  { field: "id", headerName: "id", flex: 0.2 },
  {
    field: "col1",
    headerName: "name",
    flex: 1,
    cellClassName: "name-column--cell",
  },
  {
    field: "col2",
    headerName: "class",
    flex: 1,
  },
  {
    field: "col3",
    headerName: "authority",
    flex: 1,

    renderCell: ({ row: { col3 } }) => {
      return (
        <Button
          disabled={col3 === "admin" ? false : true}
          variant="contained"
          size="small"
        >
          Add
        </Button>
      );
    },
  },
];

function HomePage() {
  const theme = useTheme();
  let colors = tokens(theme.palette.mode);
  // const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      {/* <Box
        p={"2rem"}
        height="100%"
        width={"100%"}
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: "green",
          },
          // "& .MuiDataGrid-columnHeaders": {
          //   backgroundColor: "skyblue",
          //   borderBottom: "none",
          // },

          // "& .MuiCheckbox-root": {
          //   color: `skyblue !important`,
          // },
        }}
      >
        <DataGrid
          rows={data}
          columns={columns}
          checkboxSelection
          slots={{ toolbar: GridToolbar }}
        />
      </Box> */}

      <Box bgcolor={"red"} width={"100%"} maxHeight={"100%"}>
        <Box
          height={"70%"}
          width={"100%"}
          data-id="hero section"
          display={"flex"}
        >
          <Box data-id="heroImgCon" flex={"1"} bgcolor={"yellow"}>
            <img
              className="object-contain"
              width={"100%"}
              height={"60%"}
              src="profile.jpg"
              alt=""
            />
          </Box>
          <Box data-id="heroDesCon" flex={"2"} bgcolor={"brown"}></Box>
        </Box>
      </Box>
    </>
  );
}

export default HomePage;
