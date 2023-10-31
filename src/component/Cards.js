import React from "react";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import {
  Card,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
import BedIcon from "@mui/icons-material/Bed";
import BathtubIcon from "@mui/icons-material/Bathtub";
import WorkspacesIcon from "@mui/icons-material/Workspaces";
import "../styles/cards.css";

const Cards = (props) => {
  const { id, title, productname, price, monthprice, age, classes } = props;
  return (
    <div className="cards" key={id}>
      <Card
        sx={{
          margin: 1.5,
          width: "350px",
          borderRadius: "5px",
        }}
      >
        <CardMedia
          component="img"
          height="250"
          image={
            "https://cdn-fgbel.nitrocdn.com/iFzAePZASExrqLAhqUdQOBfhHqZYShFU/assets/images/optimized/rev-8696a19/www.roboclasses.com/wp-content/uploads/2021/11/arduino@2x.png"
          }
          alt="Paella dish"
        />
        <div className="card-head">
          <div className="card-title">
            <h6>{title}</h6>
            <Typography variant="h4" className="fw-bold">
              {productname}
            </Typography>
          </div>
          <div className="title-head mt-2">
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              AED {price}
            </Typography>
            <p className="mt-2">4 payments of AED {monthprice} /month</p>
          </div>
          <div className="d-flex">
            <button className="free-btn">
              <WorkspacesIcon className="icons" /> Free Classes
            </button>
            <button className="learn-btn mx-4">Learn More</button>
          </div>
          <div className="card-rooms">
            <p>
              <BedIcon className="icons" />
              &nbsp;Age {age} years
            </p>
            <p>
              <WorkspacesIcon className="icons" />
              {classes} classes
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Cards;
