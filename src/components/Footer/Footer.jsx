import React from "react";
import CopyrightIcon from "@mui/icons-material/Copyright";
import social from "../../assets/socials.png";
import footerstyle from "./Footer.module.css";

function Footer() {
  return (
    <>
      <div class="pl-[10%] pr-[10%] pt-20 pb-20">
        <div class={footerstyle.main}>
          <div>
            <div class="mb-4 font-medium">Hobbycue</div>
            <div class="font-normal opacity-90 cursor-pointer mb-1">
              About Us
            </div>
            <div class="font-normal opacity-90 cursor-pointer mb-1">
              Our Services
            </div>
            <div class="font-normal opacity-90 cursor-pointer mb-1">
              Work with Us
            </div>
            <div class="font-normal opacity-90 cursor-pointer mb-1">FAQ</div>
            <div class="font-normal opacity-90 cursor-pointer mb-4">
              Contact Us
            </div>
          </div>
          <div>
            <div class="mb-4 font-medium">How Do I</div>
            <div class="font-normal opacity-90 cursor-pointer mb-1">
              Sign Up
            </div>
            <div class="font-normal opacity-90 cursor-pointer mb-1">
              Add a Listing
            </div>
            <div class="font-normal opacity-90 cursor-pointer mb-1">
              Claim Listing
            </div>
            <div class="font-normal opacity-90 cursor-pointer mb-1">
              Post a Query
            </div>
            <div class="font-normal opacity-90 cursor-pointer mb-1">
              Add a Blog Post
            </div>
            <div class="font-normal opacity-90 cursor-pointer mb-4">
              Other Queries
            </div>
          </div>
          <div>
            <div class="mb-4 font-medium">Quick Links</div>
            <div class="font-normal opacity-90 cursor-pointer mb-1">
              Listings
            </div>
            <div class="font-normal opacity-90 cursor-pointer mb-1">
              Add a Listing
            </div>
            <div class="font-normal opacity-90 cursor-pointer mb-1">
              Blog Posts
            </div>
            <div class="font-normal opacity-90 cursor-pointer mb-1">
              Shop / Store
            </div>
            <div class="font-normal opacity-90 cursor-pointer mb-4">
              Community
            </div>
          </div>
          <div class="flex flex-col justify-between">
            <div>
              <div class="mb-4 font-medium">Social Media</div>
              <img src={social} alt="social" class="w-80 cursor-pointer mb-4" />
            </div>
            <div class="flex flex-col mr-8">
              <div class="mb-4 font-medium">Invite Friends</div>
              <div class="flex flex-row opacity-90">
                <input
                  type="search"
                  id="search"
                  name="search"
                  size="35"
                  class="rounded-l-lg pt-2 pb-2 pr-2 pl-2 text-sm border-1 border-[#9a6cb8]"
                  placeholder="Email ID"
                />
                <div class="pl-2 pr-2 pt-1 pb-1 bg-[#9a6cb8] rounded-r-lg cursor-pointer">
                  Invite
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer class="flex justify-center bg-[#f3edf7] pt-4 pb-4 font-medium items-center">
        <CopyrightIcon fontSize="small" />
        Purple Cues Private Limited
      </footer>
    </>
  );
}

export default Footer;
