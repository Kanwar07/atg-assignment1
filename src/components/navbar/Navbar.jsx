import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import TurnedInIcon from "@mui/icons-material/TurnedIn";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ExploreIcon from "@mui/icons-material/Explore";
import StarsIcon from "@mui/icons-material/Stars";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function Navbar() {
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
          <div class="flex flex-row mr-8">
            <input
              type="search"
              id="search"
              name="search"
              size="35"
              class="bg-[#eeeeee] rounded-l-lg pt-1 pb-1 pr-2 pl-2 text-sm"
              placeholder="Search here.."
            />
            <div class="pl-2 pr-2 pt-1 pb-1 bg-[#9a6cb8] rounded-r-lg cursor-pointer">
              <SearchIcon color="action" fontSize="small" />
            </div>
          </div>
        </div>
        <div class="flex flex-row items-center">
          <div class="flex flex-row mr-8 text-[#000000]">
            <div class="mr-2 text-[#9a6cb8]">
              <ExploreIcon />
            </div>
            <div class="cursor-pointer mr-2">Explore</div>
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
                  <button class="dropdown-item">Action</button>
                </li>
                <li>
                  <button class="dropdown-item">Action</button>
                </li>
                <li>
                  <button class="dropdown-item">Action</button>
                </li>
              </ul>
            </div>
          </div>
          <div class="flex flex-row mr-8 text-[#000000]">
            <div class="mr-2 text-[#9a6cb8]">
              <StarsIcon />
            </div>
            <div class="cursor-pointer mr-2">Hobbies</div>
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
                  <button class="dropdown-item">Action</button>
                </li>
                <li>
                  <button class="dropdown-item">Action</button>
                </li>
                <li>
                  <button class="dropdown-item">Action</button>
                </li>
              </ul>
            </div>
          </div>
          <div class="mr-6 text-[#9a6cb8]">
            <TurnedInIcon />
          </div>
          <div class="mr-6 text-[#9a6cb8]">
            <NotificationsIcon />
          </div>
          <div class="mr-6 text-[#9a6cb8]">
            <ShoppingCartIcon />
          </div>
          <div>
            <button class="border-1 border-[#9a6cb8] text-[#9a6cb8] pt-1.5 pb-1.5 pl-5 pr-5 rounded-lg">
              Sign In
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
