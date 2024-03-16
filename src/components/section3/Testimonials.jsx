import React from "react";
import quotes from "../../assets/image.png";
import author from "../../assets/author.png";
import audio from "../../assets/audio.png";
import addnewstyle from "./AddNew.module.css";

function Testimonials() {
  return (
    <div className="pl-[10%] pr-[10%] pt-20 pb-20">
      <div class="flex flex-col border-2 pt-6 pb-6 pl-10 pr-10 rounded-lg bg-[#f3edf7]">
        <div class="flex flex-row mb-6">
          <img src={quotes} alt="quotes" class="size-6 mr-6" />
          <div class="font-bold text-[20px]">Testimonials</div>
        </div>
        <div class="font-normal mb-8 opacity-60">
          In a fast growing and ever changing city like Bangalore, it sometimes
          becomes very difficult to find or connect with like minded people,
          Websites like hobbycue.com is a great service which helps me get in
          touch with, communicate, connect, and exchange ideas with other
          dancers. It also provides the extra benefit of finding products and
          services that I can avall, which I can be assured is going to be of
          great quality as it comes recommended by people of the hobbycue
          community. To have discussions, to get visibility, and to be able to
          safely explore various hobbies and activities in my city, all under
          one roof, is an excellent idea and I highly recommend it.
        </div>
        <div className={addnewstyle.audio}>
          <img src={audio} alt="audio" className={addnewstyle.audio1} />
          <img src={author} alt="author" className={addnewstyle.audio2} />
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
