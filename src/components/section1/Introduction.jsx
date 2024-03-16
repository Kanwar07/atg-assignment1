import React, { useContext } from "react";
import Signin from "./Signin";
import photo from "../../assets/hobbies.png";
import { Data } from "../context/Context";
import Login from "./Login";
import section1style from "./Section1.module.css";

function Introduction() {
  const { toggle } = useContext(Data);

  return (
    <div className={section1style.main}>
      <div className={section1style.text}>
        <div class="text-[36px] mb-4 font-semibold italic">
          Explore your <span class="text-[#6fa8dc]">hobby</span> or{" "}
          <span class="text-[#9a6cb8]">passion</span>
        </div>
        <div class="font-light leading-loose">
          Sign-in to interact with a community of fellow hobbyists and an
          eco-system of experts, teachers, suppliers, classes, workshops, and
          places to practice, participate or perform. Your hobby may be about
          visual or performing arts, sports, games, gardening, model making,
          cooking, indoor or outdoor activities.... <br />
          <br /> If you are an expert or a seller, you can Add your Listing and
          promote yourself, your students, products, services or events. Hop on
          your hobbyhorse and enjoy the ride.
        </div>
        <div className={section1style.photo}>
          <img src={photo} alt="hobbies" style={{ width: "80%" }} />
        </div>
      </div>
      <div className={section1style.auth}>
        {toggle ? <Login /> : <Signin />}
      </div>
    </div>
  );
}

export default Introduction;
