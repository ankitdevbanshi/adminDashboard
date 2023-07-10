import { Box, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import MyCard from "../components/MyCard";
import BarChart from "./BarChart";

function Dashboard() {
  let match = useMediaQuery("(min-width:600px)");
  console.log(match);
  return (
    <Box height={"100%"} width={"100%"} p={"1rem"}>
      <Typography mb={"8px"} variant="h4" fontWeight={"600"}>
        Dashboard
      </Typography>

      {/* <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          gridColumn="span 3"
        >
          <MyCard />
        </Box>

        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          gridColumn="span 3"
        >
          <MyCard />
        </Box>

        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          gridColumn="span 3"
        >
          <MyCard />
        </Box>

        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          gridColumn="span 3"
        >
          <MyCard />
        </Box>

        <Box display="flex" alignItems="center" justifyContent="center">
          <MyCard />
        </Box>
        <Box display="flex" alignItems="center" justifyContent="center">
          <MyCard />
        </Box>
        <Box display="flex" alignItems="center" justifyContent="center">
          <MyCard />
        </Box>
        <Box display="flex" alignItems="center" justifyContent="center">
          <MyCard />
        </Box>
        <Box display="flex" alignItems="center" justifyContent="center">
          <MyCard />
        </Box>
      </Box> */}

      <Box
        display="grid"
        gridTemplateColumns={`${match ? "repeat(12, 1fr)" : "1"}`}
        gridAutoRows="140px"
        rowGap="1rem"
        columnGap={`${match ? "1rem" : null}`}
      >
        {/* ROW 1 */}
        <Box
          gridColumn={`${match ? "span 3" : "span 0"}`}
          backgroundColor={"skyblue"}
          // display="flex"
          // alignItems="center"
          // justifyContent="center"
        >
          <MyCard />
        </Box>
        <Box
          gridColumn={`${match ? "span 3" : "span 0"}`}
          backgroundColor={"skyblue"}
          // display="flex"
          // alignItems="center"
          // justifyContent="center"
        >
          <MyCard />
        </Box>
        <Box
          gridColumn={`${match ? "span 3" : "span 0"}`}
          backgroundColor={"skyblue"}
          // display="flex"
          // alignItems="center"
          // justifyContent="center"
        >
          <MyCard />
        </Box>
        <Box
          gridColumn={`${match ? "span 3" : "span 0"}`}
          backgroundColor={"skyblue"}
          // display="flex"
          // alignItems="center"
          // justifyContent="center"
        >
          <MyCard />
        </Box>

        <Box
          gridColumn={`${match ? "span 8" : "span 0"}`}
          gridRow={`${match ? "span 2" : "span 0"}`}
        >
          <MyCard />
        </Box>

        <Box
          gridColumn={`${match ? "span 4" : "span 0"}`}
          gridRow={`${match ? "span 2" : "span 0"}`}
        >
          <MyCard />
        </Box>

        <Box
          gridColumn={`${match ? "span 4" : "span 0"}`}
          gridRow={`${match ? "span 2" : "span 0"}`}
        >
          <MyCard />
        </Box>

        <Box
          gridColumn={`${match ? "span 4" : "span 0"}`}
          gridRow={`${match ? "span 2" : "span 0"}`}
        >
          <MyCard />
        </Box>

        <Box
          gridColumn={`${match ? "span 4" : "span 0"}`}
          gridRow={`${match ? "span 2" : "span 0"}`}
        >
          <BarChart />
        </Box>
        {/* ROW 2 */}
        {/* <Box gridColumn="span 8" gridRow="span 2" backgroundColor={"skyblue"}>
          <MyCard />
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={"skyblue"}
          overflow="auto"
        >
          <MyCard />
        </Box>

        {/* ROW 3 
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={"skyblue"}
          p="30px"
        >
          <MyCard />
        </Box>
        <Box gridColumn="span 4" gridRow="span 2" backgroundColor={"skyblue"}>
          <MyCard />
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={"skyblue"}
          padding="30px"
        >
          <MyCard />
        </Box> */}
      </Box>
    </Box>
  );
}

export default Dashboard;
