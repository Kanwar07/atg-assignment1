import React from "react";
import {
  CardMedia,
  CardActions,
  Typography,
  CardContent,
  Card,
} from "@mui/material";
import section2style from "./Section2.module.css";

function FeatureCard({ imageURL, name, description, buttonName }) {
  return (
    <Card class="w-full pl-10 pr-10 border-2 rounded-lg pt-10 pb-10">
      <div className={section2style.cardheading}>
        <CardMedia
          sx={{ height: 40, width: 40 }}
          image={imageURL}
          title={name}
        />
        <div class="ml-4 font-bold text-[20px]">{name}</div>
      </div>
      <CardContent>
        <Typography className={section2style.carddescription}>
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <button size="small" className={section2style.cardbutton}>
          {buttonName}
        </button>
      </CardActions>
    </Card>
  );
}

export default FeatureCard;
