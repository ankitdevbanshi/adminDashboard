import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";

export default function FaqPage() {
  const theme = useTheme();

  const arr = [
    {
      sum: "Hello this",
      des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quiducimus eaque cum consequuntur aspernatur asperiores, facere esseperspiciatis explicabo laboriosam!",
    },
    {
      sum: "Hello this",
      des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quiducimus eaque cum consequuntur aspernatur asperiores, facere esseperspiciatis explicabo laboriosam!",
    },
    {
      sum: "Hello this",
      des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quiducimus eaque cum consequuntur aspernatur asperiores, facere esseperspiciatis explicabo laboriosam!",
    },
    {
      sum: "Hello this",
      des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quiducimus eaque cum consequuntur aspernatur asperiores, facere esseperspiciatis explicabo laboriosam!",
    },
    {
      sum: "Hello this",
      des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quiducimus eaque cum consequuntur aspernatur asperiores, facere esseperspiciatis explicabo laboriosam!",
    },
  ];
  return (
    <Box height={"100%"} width={"100%"} p={"2rem"}>
      {arr.map((it) => {
        return (
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Typography
                color={theme.palette.success.main}
                fontSize={"1rem"}
                variant="h6"
              >
                {it.sum}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{it.des}</Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </Box>
  );
}
