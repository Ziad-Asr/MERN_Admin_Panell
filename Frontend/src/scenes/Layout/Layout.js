import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { Box, useMediaQuery } from "@mui/material";

import Navbar from "components/Navbar";

const Layout = () => {
  return (
    <Box width="100%" height="100%">
      <Box flexGrow={1}>
        <Navbar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
