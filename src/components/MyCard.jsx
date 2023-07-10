import { Email, Phone } from "@mui/icons-material";
import { Box, IconButton, Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import { tokens } from "../theme";

function MyCard() {
  let theme = useTheme();
  let colors = tokens(theme.palette.mode);
  return (
    <Box
      height={"100%"}
      width={"100%"}
      px={"1rem"}
      py={"8px"}
      bgcolor={colors.primary[400]}
    >
      <Box display={"flex"} justifyContent={"space-between"}>
        <Stack>
          <IconButton
            sx={{
              color: colors.grey[100],
            }}
          >
            <Email />
          </IconButton>
          <Typography variant="h6" fontWeight={"600"}>
            Hello
          </Typography>
        </Stack>
        <Box>
          <IconButton
            sx={{
              color: colors.grey[100],
            }}
          >
            <Phone />
          </IconButton>
          <Typography variant="body2">12% cut</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default MyCard;
