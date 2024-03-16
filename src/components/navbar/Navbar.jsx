import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import TurnedInIcon from "@mui/icons-material/TurnedIn";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ExploreIcon from "@mui/icons-material/Explore";
import StarsIcon from "@mui/icons-material/Stars";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import navbarstyle from "./Navbar.module.css";
import { Menu, MenuItem, Button, Fade } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { grey } from "@mui/material/colors";

function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <nav class="flex justify-between pt-2.5 pb-2.5 shadow-2xl pl-[10%] pr-[10%]">
        <div class="flex flex-row items-center">
          <div class="flex flex-row mr-8 cursor-pointer items-center">
            <div class="text-[24px] font-medium text-[#6fa8dc] italic border-3 border-[#9a6cb8] pl-2 pr-2 mr-3">
              h
            </div>
            <div>
              <div class="text-[24px] font-medium italic">
                <span class="text-[#6fa8dc]">hobby</span>
                <span class="text-[#9a6cb8]">cue</span>
              </div>
              <div class="font-normal italic opacity-60">
                Your Hobby, Your Community
              </div>
            </div>
          </div>
          <div className={navbarstyle.search}>
            <input
              type="search"
              id="search"
              name="search"
              size="35"
              className={navbarstyle.searchtext}
              placeholder="Search here.."
            />
            <div className={navbarstyle.searchicon}>
              <SearchIcon color="action" fontSize="small" />
            </div>
          </div>
        </div>
        <div className={navbarstyle.menu}>
          <div class="flex flex-row mr-8 text-[#000000]">
            <div class="mr-2 text-[#9a6cb8]">
              <ExploreIcon />
            </div>
            <div class="mr-2">Explore</div>
            <div class="dropdown-center">
              <button
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                class="opacity-60"
              >
                <KeyboardArrowDownIcon />
              </button>
              <ul class="dropdown-menu">
                <li>
                  <button class="dropdown-item">People - Community</button>
                </li>
                <li>
                  <button class="dropdown-item">Places - Venues</button>
                </li>
                <li>
                  <button class="dropdown-item">Programs - Events</button>
                </li>
                <li>
                  <button class="dropdown-item">Products - Store</button>
                </li>
                <li>
                  <button class="dropdown-item">Blogs</button>
                </li>
              </ul>
            </div>
          </div>
          <div class="flex flex-row mr-8 text-[#000000]">
            <div class="mr-2 text-[#9a6cb8]">
              <StarsIcon />
            </div>
            <div class="mr-2">Hobbies</div>
            <div class="dropdown-center">
              <button
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                class="opacity-60"
              >
                <KeyboardArrowDownIcon />
              </button>
              <ul class="dropdown-menu">
                <li>
                  <button class="dropdown-item">People - Community</button>
                </li>
                <li>
                  <button class="dropdown-item">Places - Venues</button>
                </li>
                <li>
                  <button class="dropdown-item">Programs - Events</button>
                </li>
                <li>
                  <button class="dropdown-item">Products - Store</button>
                </li>
                <li>
                  <button class="dropdown-item">Blogs</button>
                </li>
              </ul>
            </div>
          </div>
          <div class="mr-6 text-[#9a6cb8] cursor-pointer">
            <TurnedInIcon />
          </div>
          <div class="mr-6 text-[#9a6cb8] cursor-pointer">
            <NotificationsIcon />
          </div>
          <div class="mr-6 text-[#9a6cb8] cursor-pointer">
            <ShoppingCartIcon />
          </div>
          <div>
            <button class="border-1 border-[#9a6cb8] text-[#9a6cb8] pt-1.5 pb-1.5 pl-5 pr-5 rounded-lg">
              Sign In
            </button>
          </div>
        </div>
        <div className={navbarstyle.menudata}>
          <div className={navbarstyle.searchiconinside}>
            <SearchIcon color="action" fontSize="small" />
          </div>
          <div class="mr-6 text-[#9a6cb8]">
            <NotificationsIcon />
          </div>
          <Button
            id="fade-button"
            aria-controls={open ? "fade-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            className={navbarstyle.button}
          >
            <MenuIcon fontSize="small" sx={{ color: grey[800] }} />
          </Button>
          <Menu
            id="fade-menu"
            MenuListProps={{
              "aria-labelledby": "fade-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
          >
            <MenuItem class="flex flex-row text-[#9a6cb8] pl-2 pr-2 mt-2 mr-1 ml-1">
              <div class="mr-2 text-[#9a6cb8]">
                <ExploreIcon />
              </div>
              Explore
            </MenuItem>
            <MenuItem class="flex flex-row text-[#9a6cb8] pl-2 pr-2 mt-2 mb-2 mr-1 ml-1">
              <div class="mr-2 text-[#9a6cb8]">
                <StarsIcon />
              </div>
              Hobbies
            </MenuItem>
          </Menu>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
