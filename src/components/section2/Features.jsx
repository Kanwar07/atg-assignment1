import React from "react";
import data from "../data/Data.json";
import FeatureCard from "./FeatureCard";
import section2style from "./Section2.module.css";

function Features() {
  return (
    <div class="pl-[10%] pr-[10%]">
      <div className={section2style.main}>
        {data.map((feature) => {
          const { imageURL, name, description, buttonName } = feature;
          return (
            <>
              <FeatureCard {...{ imageURL, name, description, buttonName }} />
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Features;
