import React from "react";
import { ResponsiveBar } from "@nivo/bar";
import { Box, Stack, useMediaQuery } from "@mui/material";

const data = [
  {
    country: "AD",
    "hot dog": 193,
    "hot dogColor": "hsl(81, 70%, 50%)",
    burger: 183,
    burgerColor: "hsl(78, 70%, 50%)",
    sandwich: 106,
    sandwichColor: "hsl(69, 70%, 50%)",
    kebab: 187,
    kebabColor: "hsl(340, 70%, 50%)",
    fries: 143,
    friesColor: "hsl(334, 70%, 50%)",
    donut: 66,
    donutColor: "hsl(33, 70%, 50%)",
  },
  {
    country: "AE",
    "hot dog": 87,
    "hot dogColor": "hsl(166, 70%, 50%)",
    burger: 116,
    burgerColor: "hsl(135, 70%, 50%)",
    sandwich: 159,
    sandwichColor: "hsl(261, 70%, 50%)",
    kebab: 20,
    kebabColor: "hsl(180, 70%, 50%)",
    fries: 41,
    friesColor: "hsl(266, 70%, 50%)",
    donut: 15,
    donutColor: "hsl(307, 70%, 50%)",
  },
  {
    country: "AF",
    "hot dog": 149,
    "hot dogColor": "hsl(64, 70%, 50%)",
    burger: 138,
    burgerColor: "hsl(336, 70%, 50%)",
    sandwich: 167,
    sandwichColor: "hsl(348, 70%, 50%)",
    kebab: 39,
    kebabColor: "hsl(160, 70%, 50%)",
    fries: 152,
    friesColor: "hsl(195, 70%, 50%)",
    donut: 38,
    donutColor: "hsl(334, 70%, 50%)",
  },
  {
    country: "AG",
    "hot dog": 54,
    "hot dogColor": "hsl(324, 70%, 50%)",
    burger: 103,
    burgerColor: "hsl(94, 70%, 50%)",
    sandwich: 39,
    sandwichColor: "hsl(240, 70%, 50%)",
    kebab: 122,
    kebabColor: "hsl(296, 70%, 50%)",
    fries: 195,
    friesColor: "hsl(43, 70%, 50%)",
    donut: 185,
    donutColor: "hsl(320, 70%, 50%)",
  },
  {
    country: "AI",
    "hot dog": 157,
    "hot dogColor": "hsl(246, 70%, 50%)",
    burger: 194,
    burgerColor: "hsl(21, 70%, 50%)",
    sandwich: 154,
    sandwichColor: "hsl(119, 70%, 50%)",
    kebab: 108,
    kebabColor: "hsl(17, 70%, 50%)",
    fries: 123,
    friesColor: "hsl(289, 70%, 50%)",
    donut: 48,
    donutColor: "hsl(355, 70%, 50%)",
  },
  {
    country: "AL",
    "hot dog": 70,
    "hot dogColor": "hsl(88, 70%, 50%)",
    burger: 101,
    burgerColor: "hsl(338, 70%, 50%)",
    sandwich: 82,
    sandwichColor: "hsl(306, 70%, 50%)",
    kebab: 83,
    kebabColor: "hsl(86, 70%, 50%)",
    fries: 89,
    friesColor: "hsl(197, 70%, 50%)",
    donut: 57,
    donutColor: "hsl(311, 70%, 50%)",
  },
  {
    country: "AM",
    "hot dog": 85,
    "hot dogColor": "hsl(57, 70%, 50%)",
    burger: 147,
    burgerColor: "hsl(7, 70%, 50%)",
    sandwich: 142,
    sandwichColor: "hsl(114, 70%, 50%)",
    kebab: 101,
    kebabColor: "hsl(83, 70%, 50%)",
    fries: 92,
    friesColor: "hsl(109, 70%, 50%)",
    donut: 184,
    donutColor: "hsl(345, 70%, 50%)",
  },
];

const BarChart = () => {
  const matches = useMediaQuery("(min-width:600px)");

  return (
    <Box height={"100%"} width={"100%"}>
      <Box height={`${matches ? "100%" : "50vh"}`} width={"100%"}>
        <ResponsiveBar
          data={data}
          keys={["hot dog", "burger", "sandwich", "kebab", "fries", "donut"]}
          indexBy="country"
          margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
          padding={0.3}
          valueScale={{ type: "linear" }}
          indexScale={{ type: "band", round: true }}
          colors={{ scheme: "nivo" }}
          //   defs={[
          //     {
          //       id: "dots",
          //       type: "patternDots",
          //       background: "inherit",
          //       color: "#38bcb2",
          //       size: 4,
          //       padding: 1,
          //       stagger: true,
          //     },
          //     {
          //       id: "lines",
          //       type: "patternLines",
          //       background: "inherit",
          //       color: "#eed312",
          //       rotation: -45,
          //       lineWidth: 6,
          //       spacing: 10,
          //     },
          //   ]}
          //   fill={[
          //     {
          //       match: {
          //         id: "fries",
          //       },
          //       id: "dots",
          //     },
          //     {
          //       match: {
          //         id: "sandwich",
          //       },
          //       id: "lines",
          //     },
          //   ]}
          borderColor={{
            from: "color",
            modifiers: [["darker", 1.6]],
          }}
          axisTop={null}
          axisRight={null}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "country",
            legendPosition: "middle",
            legendOffset: 32,
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "food",
            legendPosition: "middle",
            legendOffset: -40,
          }}
          labelSkipWidth={12}
          labelSkipHeight={12}
          labelTextColor={{
            from: "color",
            modifiers: [["darker", 1.6]],
          }}
          legends={[
            {
              dataFrom: "keys",
              anchor: "bottom-right",
              direction: "column",
              justify: false,
              translateX: 120,
              translateY: 0,
              itemsSpacing: 2,
              itemWidth: 100,
              itemHeight: 20,
              itemDirection: "left-to-right",
              itemOpacity: 0.85,
              symbolSize: 20,
              effects: [
                {
                  on: "hover",
                  style: {
                    itemOpacity: 1,
                  },
                },
              ],
            },
          ]}
          role="application"
          ariaLabel="Nivo bar chart demo"
          barAriaLabel={(e) =>
            e.id + ": " + e.formattedValue + " in country: " + e.indexValue
          }
        />
      </Box>
    </Box>
  );
};

export default BarChart;
