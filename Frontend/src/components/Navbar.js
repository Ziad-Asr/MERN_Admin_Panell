import { useState } from "react";
import { UseDispatch, useDispatch } from "react-redux";
import {
  LightModeOutlined,
  DarkModeOutlined,
  Search,
  SettingsOutlined,
  ArrowBackIosNewOutlined,
  Menu as MenuIcon,
} from "@mui/icons-material";
import { useTheme } from "@emotion/react";
import { setMode } from "../store/index";
import ProfileImage from "../assets/profile.jpeg";
import FlexBetween from "./FlexBetween";
import { AppBar, IconButton, InputBase, Toolbar } from "@mui/material";

const Navbar = () => {
  const dispatch = useDispatch();

  const theme = useTheme();

  return (
    <AppBar sx={{ position: "static", background: "none", boxShadow: "none" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* LEFT SIDE */}
        <FlexBetween>
          <IconButton onClick={() => console.log("open/close iconbar")}>
            <MenuIcon />
          </IconButton>
          <FlexBetween
            backgroundColor={theme.palette.background.alt}
            borderRadius="9px"
            gap="3rem"
            p=".1rem 1.5rem"
          >
            <InputBase placeholder="Search..." />
            <IconButton>
              <Search />
            </IconButton>
          </FlexBetween>
        </FlexBetween>

        {/* RIGHT SIDE */}
        <FlexBetween gap="1.5rem">
          <IconButton onClick={() => dispatch(setMode())}>
            {theme.palette.mode === "dark" ? (
              <DarkModeOutlined sx={{ fontSize: "25px" }} />
            ) : (
              <LightModeOutlined sx={{ fontSize: "25px" }} />
            )}
          </IconButton>
          <IconButton>
            <SettingsOutlined sx={{ fontSize: "25px" }} />
          </IconButton>
        </FlexBetween>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
