import React from "react";
import { Box } from "@mui/material";
import Header from "../../components/Header/Header";
import BreakdownChart from "../../components/BreakdownChart/BreakdownChart";

const Breakdown = () => {
  return (
    <Box m="0 2.5rem">
      <Header title="BREAKDOWN" subtitle="Breakdown of Sales By Category" />
      <Box mt="40px" height="75vh">
        <BreakdownChart />
      </Box>
    </Box>
  );
};

export default Breakdown;
