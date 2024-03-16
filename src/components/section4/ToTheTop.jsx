import React from "react";
import hobbies2 from "../../assets/hobbies2.png";
import arrow from "../../assets/arrow.png";

function ToTheTop() {
  return (
    <div class="pl-[10%] pr-[10%] pt-20 pb-20 bg-[#e8f2fb]">
      <div class="text-[32px] italic font-medium mb-4">
        Your <span class="text-[#9a6cb8]">Hobby</span>, Your{" "}
        <span class="text-[#6fa8dc]">Community...</span>
      </div>
      <button class="border-1 border-[#9a6cb8] text-[#ffffff] bg-[#9a6cb8] pl-4 pr-4 pt-2 pb-2 rounded-lg mb-16">
        Get Started
      </button>
      <div
        class="flex justify-end mb-4 cursor-pointer"
        id="link"
        href="#element_target"
      >
        <div class="flex flex-col items-center">
          <img src={arrow} alt="arrow" class="size-8" />
          <div class="text-[10px] text-[#9a6cb8]">Go to top (Clrl+Home)</div>
        </div>
      </div>
      <img src={hobbies2} alt="hobbies2" />
    </div>
  );
}

export default ToTheTop;
